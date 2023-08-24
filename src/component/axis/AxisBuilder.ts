/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

import { retrieve, defaults, extend, each, isObject, map, isString, isNumber, isFunction } from 'zrender/src/core/util';
import * as graphic from '../../util/graphic';
import { getECData } from '../../util/innerStore';
import { createTextStyle } from '../../label/labelStyle';
import Model from '../../model/Model';
import { isRadianAroundZero, remRadian } from '../../util/number';
import { createSymbol, normalizeSymbolOffset } from '../../util/symbol';
import * as matrixUtil from 'zrender/src/core/matrix';
import { applyTransform as v2ApplyTransform } from 'zrender/src/core/vector';
import { shouldShowAllLabels } from '../../coord/axisHelper';
import { AxisBaseModel } from '../../coord/AxisBaseModel';
import { ZRTextVerticalAlign, ZRTextAlign, ECElement, ColorString } from '../../util/types';
import { AxisBaseOption } from '../../coord/axisCommonTypes';
import Element from 'zrender/src/Element';
import { PathStyleProps } from 'zrender/src/graphic/Path';
import OrdinalScale from '../../scale/Ordinal';
import { prepareLayoutList, hideOverlap } from '../../label/labelLayoutHelper';
import ExtensionAPI from '../../core/ExtensionAPI';

const PI = Math.PI;

type AxisIndexKey = 'xAxisIndex' | 'yAxisIndex' | 'radiusAxisIndex'
    | 'angleAxisIndex' | 'singleAxisIndex';

type AxisEventData = {
    componentType: string
    componentIndex: number
    targetType: 'axisName' | 'axisLabel'
    name?: string
    value?: string | number
    dataIndex?: number
    tickIndex?: number
} & {
        [key in AxisIndexKey]?: number
    };

type AxisLabelText = graphic.Text & {
    __fullText: string
    __truncatedText: string
} & ECElement;
type AxisLabelGroup = graphic.Group & {
    __fullText: string
    __truncatedText: string
} & ECElement;

export interface AxisBuilderCfg {
    position?: number[]
    rotation?: number
    /**
     * Used when nameLocation is 'middle' or 'center'.
     * 1 | -1
     */
    nameDirection?: number
    tickDirection?: number
    labelDirection?: number
    /**
     * Usefull when onZero.
     */
    labelOffset?: number
    /**
     * default get from axisModel.
     */
    axisLabelShow?: boolean
    /**
     * default get from axisModel.
     */
    axisName?: string

    axisNameAvailableWidth?: number
    /**
     * by degree, default get from axisModel.
     */
    labelRotate?: number

    strokeContainThreshold?: number

    nameTruncateMaxWidth?: number

    silent?: boolean

    handleAutoShown?(elementType: 'axisLine' | 'axisTick'): boolean
}

interface TickCoord {
    coord: number
    tickValue?: number
}

/**
 * A final axis is translated and rotated from a "standard axis".
 * So opt.position and opt.rotation is required.
 *
 * A standard axis is and axis from [0, 0] to [0, axisExtent[1]],
 * for example: (0, 0) ------------> (0, 50)
 *
 * nameDirection or tickDirection or labelDirection is 1 means tick
 * or label is below the standard axis, whereas is -1 means above
 * the standard axis. labelOffset means offset between label and axis,
 * which is useful when 'onZero', where axisLabel is in the grid and
 * label in outside grid.
 *
 * Tips: like always,
 * positive rotation represents anticlockwise, and negative rotation
 * represents clockwise.
 * The direction of position coordinate is the same as the direction
 * of screen coordinate.
 *
 * Do not need to consider axis 'inverse', which is auto processed by
 * axis extent.
 */
class AxisBuilder {

    axisModel: AxisBaseModel;

    opt: AxisBuilderCfg;

    readonly group = new graphic.Group();

    private _transformGroup: graphic.Group;

    private _api?: ExtensionAPI;

    constructor(axisModel: AxisBaseModel, opt?: AxisBuilderCfg, api?: ExtensionAPI) {

        this.opt = opt;

        this.axisModel = axisModel;

        // Default value
        defaults(
            opt,
            {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: true,
                handleAutoShown: () => true
            } as AxisBuilderCfg
        );


        // FIXME Not use a seperate text group?
        const transformGroup = new graphic.Group({
            x: opt.position[0],
            y: opt.position[1],
            rotation: opt.rotation
        });

        // this.group.add(transformGroup);
        // this._transformGroup = transformGroup;

        transformGroup.updateTransform();

        this._transformGroup = transformGroup;
        this._api = api;
    }

    hasBuilder(name: keyof typeof builders) {
        return !!builders[name];
    }

    add(name: keyof typeof builders) {
        builders[name](this.opt, this.axisModel, this.group, this._transformGroup, this._api);
    }

    getGroup() {
        return this.group;
    }

    static innerTextLayout(axisRotation: number, textRotation: number, direction: number) {
        const rotationDiff = remRadian(textRotation - axisRotation);
        let textAlign;
        let textVerticalAlign;

        if (isRadianAroundZero(rotationDiff)) { // Label is parallel with axis line.
            textVerticalAlign = direction > 0 ? 'top' : 'bottom';
            textAlign = 'center';
        }
        else if (isRadianAroundZero(rotationDiff - PI)) { // Label is inverse parallel with axis line.
            textVerticalAlign = direction > 0 ? 'bottom' : 'top';
            textAlign = 'center';
        }
        else {
            textVerticalAlign = 'middle';

            if (rotationDiff > 0 && rotationDiff < PI) {
                textAlign = direction > 0 ? 'right' : 'left';
            }
            else {
                textAlign = direction > 0 ? 'left' : 'right';
            }
        }

        return {
            rotation: rotationDiff,
            textAlign: textAlign as ZRTextAlign,
            textVerticalAlign: textVerticalAlign as ZRTextVerticalAlign
        };
    }

    static makeAxisEventDataBase(axisModel: AxisBaseModel) {
        const eventData = {
            componentType: axisModel.mainType,
            componentIndex: axisModel.componentIndex
        } as AxisEventData;
        eventData[axisModel.mainType + 'Index' as AxisIndexKey] = axisModel.componentIndex;
        return eventData;
    }

    static isLabelSilent(axisModel: AxisBaseModel): boolean {
        const tooltipOpt = axisModel.get('tooltip');
        return axisModel.get('silent')
            // Consider mouse cursor, add these restrictions.
            || !(
                axisModel.get('triggerEvent') || (tooltipOpt && tooltipOpt.show)
            );
    }
};

interface AxisElementsBuilder {
    (
        opt: AxisBuilderCfg,
        axisModel: AxisBaseModel,
        group: graphic.Group,
        transformGroup: graphic.Group,
        api?: ExtensionAPI,
    ): void
}

const builders: Record<'axisLine' | 'axisTickLabel' | 'axisName', AxisElementsBuilder> = {

    axisLine(opt, axisModel, group, transformGroup) {

        let shown = axisModel.get(['axisLine', 'show']);
        if (shown === 'auto' && opt.handleAutoShown) {
            shown = opt.handleAutoShown('axisLine');
        }
        if (!shown) {
            return;
        }

        const extent = axisModel.axis.getExtent();

        const matrix = transformGroup.transform;
        const pt1 = [extent[0], 0];
        const pt2 = [extent[1], 0];
        const inverse = pt1[0] > pt2[0];
        if (matrix) {
            v2ApplyTransform(pt1, pt1, matrix);
            v2ApplyTransform(pt2, pt2, matrix);
        }

        const lineStyle = extend(
            {
                lineCap: 'round'
            },
            axisModel.getModel(['axisLine', 'lineStyle']).getLineStyle()
        );

        const line = new graphic.Line({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt2[0],
                y2: pt2[1]
            },
            style: lineStyle,
            strokeContainThreshold: opt.strokeContainThreshold || 5,
            silent: true,
            z2: 1
        });
        graphic.subPixelOptimizeLine(line.shape, line.style.lineWidth);
        line.anid = 'line';
        group.add(line);

        let arrows = axisModel.get(['axisLine', 'symbol']);

        if (arrows != null) {
            let arrowSize = axisModel.get(['axisLine', 'symbolSize']);

            if (isString(arrows)) {
                // Use the same arrow for start and end point
                arrows = [arrows, arrows];
            }
            if (isString(arrowSize) || isNumber(arrowSize)) {
                // Use the same size for width and height
                arrowSize = [arrowSize as number, arrowSize as number];
            }

            const arrowOffset = normalizeSymbolOffset(axisModel.get(['axisLine', 'symbolOffset']) || 0, arrowSize);

            const symbolWidth = arrowSize[0];
            const symbolHeight = arrowSize[1];

            each([{
                rotate: opt.rotation + Math.PI / 2,
                offset: arrowOffset[0],
                r: 0
            }, {
                rotate: opt.rotation - Math.PI / 2,
                offset: arrowOffset[1],
                r: Math.sqrt((pt1[0] - pt2[0]) * (pt1[0] - pt2[0])
                    + (pt1[1] - pt2[1]) * (pt1[1] - pt2[1]))
            }], function (point, index) {
                if (arrows[index] !== 'none' && arrows[index] != null) {
                    const symbol = createSymbol(
                        arrows[index],
                        -symbolWidth / 2,
                        -symbolHeight / 2,
                        symbolWidth,
                        symbolHeight,
                        lineStyle.stroke,
                        true
                    );

                    // Calculate arrow position with offset
                    const r = point.r + point.offset;

                    const pt = inverse ? pt2 : pt1;
                    symbol.attr({
                        rotation: point.rotate,
                        x: pt[0] + r * Math.cos(opt.rotation),
                        y: pt[1] - r * Math.sin(opt.rotation),
                        silent: true,
                        z2: 11
                    });
                    group.add(symbol);
                }
            });
        }
    },

    axisTickLabel(opt, axisModel, group, transformGroup) {
        const ticksEls = buildAxisMajorTicks(group, transformGroup, axisModel, opt);
        const labelEls = buildAxisLabel(group, transformGroup, axisModel, opt);

        fixMinMaxLabelShow(axisModel, labelEls, ticksEls);

        buildAxisMinorTicks(group, transformGroup, axisModel, opt.tickDirection);

        // This bit fixes the label overlap issue for the time chart.
        // See https://github.com/apache/echarts/issues/14266 for more.
        if (axisModel.get(['axisLabel', 'hideOverlap'])) {
            const labelList = prepareLayoutList(map(labelEls, label => ({
                label,
                priority: label.z2,
                defaultAttr: {
                    ignore: label.ignore
                }
            })));

            hideOverlap(labelList);
        }
    },

    axisName(opt, axisModel, group, transformGroup, api?: ExtensionAPI) {
        const name = retrieve(opt.axisName, axisModel.get('name'));

        if (!name) {
            return;
        }

        const nameLocation = axisModel.get('nameLocation');
        const nameVertical = axisModel.get('nameVertical');
        const nameDirection = opt.nameDirection;
        const textStyleModel = axisModel.getModel('nameTextStyle');
        const gap = axisModel.get('nameGap') || 0;
        const axisLine = axisModel.get('axisLine'); // axisLine.show=true时boundingRect.width包含opt.labelOffset

        // 需要提前计算好这些信息后面用做判断
        // Y轴标签容器，用来计算标签左右侧起始位置
        const boundingRect = group.getBoundingRect();
        // 判断是否Y轴，X轴不需要启用文本竖直排列
        const isY = axisModel.mainType === 'yAxis';
        // 判断标签是在左侧还是在右侧
        const labelHorizontalPosition = !(opt.tickDirection === 1);
        // 判断是否需要文本竖直排列，只有文本居中排列的Y轴才需要
        const needLabelVertical = nameVertical && isY;
        // 需要获取文字的大小以计算偏移位置
        const fontSize: number = (textStyleModel.get('fontSize') as number) || 12;
        const extent = axisModel.axis.getExtent();
        const gapSignal = extent[0] > extent[1] ? -1 : 1;
        const pos = [
            nameLocation === 'start'
                ? extent[0] - gapSignal * gap
                : nameLocation === 'end'
                    ? extent[1] + gapSignal * gap
                    : (extent[0] + extent[1]) / 2, // 'middle'
            // 计算标签起始位置，默认Y轴刻度往左右各偏移一个字符的距离
            // opt.labelOffset是0刻度到左侧的距离（不包含刻度值）
            needLabelVertical ? nameDirection * boundingRect.width
            + (axisLine?.show && !labelHorizontalPosition ? nameDirection * gap - fontSize : nameDirection * gap)
            + (labelHorizontalPosition || axisLine?.show ? fontSize : 0)
            + nameDirection * fontSize
            : isY ? 0 : opt.labelOffset + gapSignal * gap
        ];
        // console.log('gap', gap);
        // console.log('gap', gap);
        // console.log('nameDirection', nameDirection);
        // console.log('axisLine?.show',  axisLine?.show);
        // console.log('opt.labelOffset', opt.labelOffset);
        // console.log('boundingRect', boundingRect);
        // console.log('pos', pos, axisModel);

        let labelLayout;

        let nameRotation = axisModel.get('nameRotate');
        if (nameRotation != null) {
            nameRotation = nameRotation * PI / 180; // To radian.
        }

        let axisNameAvailableWidth;

        if (isNameLocationCenter(nameLocation)) {
            labelLayout = AxisBuilder.innerTextLayout(
                opt.rotation,
                nameRotation != null ? nameRotation : opt.rotation, // Adapt to axis.
                nameDirection
            );
        }
        else {
            labelLayout = endTextLayout(
                opt.rotation, nameLocation, nameRotation || 0, extent
            );

            axisNameAvailableWidth = opt.axisNameAvailableWidth;
            if (axisNameAvailableWidth != null) {
                axisNameAvailableWidth = Math.abs(
                    axisNameAvailableWidth / Math.sin(labelLayout.rotation)
                );
                !isFinite(axisNameAvailableWidth) && (axisNameAvailableWidth = null);
            }
        }

        const textFont = textStyleModel.getFont();

        const truncateOpt = axisModel.get('nameTruncate', true) || {};
        const ellipsis = truncateOpt.ellipsis;
        const maxWidth = retrieve(
            opt.nameTruncateMaxWidth, truncateOpt.maxWidth, axisNameAvailableWidth
        );

        /**
         * 需要获取canvas对象用来计算文字的宽度和高度
         * 第一次使用时因为canvas还没有创建，所以需要在dom中创建一个临时canvas，全部计算完后销毁
         * 后面重新渲染时chart本身的canvas就能获取到了,也就不用重复创建canvas。
         */
        const dom = api?.getDom();
        let canvas = dom?.querySelector('canvas');
        if (!canvas) { // 第一次渲染时找不到canvas进行文字长度判断，判断完后干掉他
            // eslint-disable-next-line no-undef
            canvas = document.createElement('canvas');
            canvas.setAttribute('type', 'tmp');
            dom.appendChild(canvas);
        }
        const context = canvas?.getContext('2d');
        context.font = textFont || '12px';
        const len = context.measureText(name).width;
        // 计算Y轴高度，超过的话需要出现"..."
        const maxLen = Math.min(extent[1] - extent[0], maxWidth || Number.MAX_VALUE); // Y轴名称最大高度
        const matchLen = Math.min(len, extent[1] - extent[0], maxWidth || Number.MAX_VALUE); // Y轴名称最大高度
        // 检查是否有方字体
        const hasChinese = !!name.split('').find((char) => {
            const w = context.measureText(char).width;
            return w === fontSize;
        });
        const groupEl = new graphic.Group({
            x: pos[0],
            y: !hasChinese && needLabelVertical ? pos[1] - fontSize : pos[1],
            silent: AxisBuilder.isLabelSilent(axisModel),
            rotation: needLabelVertical ? hasChinese ? -PI : -PI * 2 : labelLayout.rotation
        }) as AxisLabelGroup;
        const baseX = (isY && nameLocation === 'start') ? (hasChinese ? -matchLen : 0)
        : (isY && nameLocation === 'end') ? (hasChinese ? extent[0] : -matchLen)
        : isNameLocationCenter(nameLocation) ? matchLen / -2 : 0;
        let x = 0;
        if (needLabelVertical) {
            const ellipsisWidth = context.measureText('...').width;
            // 一个字符一个字符的翻转
            name.split('').forEach((char) => {
                // 计算实际宽度，因为高度就是fontsize
                const w = context.measureText(char).width;
                // 判断是否超长
                if (x + ellipsisWidth + w > maxLen) {
                    return;
                }
                // 单字跟字体大小一致时竖直读，不一致时横着读
                const type = w !== fontSize ? 0 : 1;
                groupEl.add(new graphic.Text({
                    x: baseX + x,
                    y: 0,
                    originX: fontSize * 0.5,
                    originY: fontSize * 0.5, //  opt.tickDirection=1表示坐标轴在右边
                    rotation: type === 1 ? PI / 2 : 0,
                    silent: AxisBuilder.isLabelSilent(axisModel),
                    style: createTextStyle(textStyleModel, {
                        text: char,
                        font: textFont,
                        overflow: 'truncate',
                        ellipsis,
                        fill: textStyleModel.getTextColor()
                            || axisModel.get(['axisLine', 'lineStyle', 'color']) as ColorString,
                        align: 'left' // 不加这个英文会往右靠齐
                    }),
                    z2: 1
                }) as AxisLabelText);
                x += w;
            });
            // 超长后需要在后面拼接"..."
            if (len > matchLen) {
                groupEl.add(new graphic.Text({
                    x: baseX + x,
                    y: 0,
                    originX: fontSize / 2,
                    originY: fontSize / -2,
                    rotation: 0,
                    style: createTextStyle(textStyleModel, {
                        text: '...',
                        font: textFont,
                        fill: textStyleModel.getTextColor()
                            || axisModel.get(['axisLine', 'lineStyle', 'color']) as ColorString,
                        align: 'left' // 不加这个英文会往右靠齐
                    }),
                    z2: 1
                }) as AxisLabelText);
            }
        }
        else { // 使用group图形包裹原来的text以达到结构的统一
            groupEl.add(new graphic.Text({
                silent: AxisBuilder.isLabelSilent(axisModel),
                style: createTextStyle(textStyleModel, {
                    text: name,
                    font: textFont,
                    overflow: 'truncate',
                    width: Math.min(maxWidth || Number.MAX_VALUE, extent[1] - extent[0]),
                    ellipsis,
                    fill: textStyleModel.getTextColor()
                        || axisModel.get(['axisLine', 'lineStyle', 'color']) as ColorString,
                    align: textStyleModel.get('align')
                        || labelLayout.textAlign,
                    verticalAlign: textStyleModel.get('verticalAlign')
                        || labelLayout.textVerticalAlign
                }),
                z2: 1
            }) as AxisLabelText);
        }
        // 自己建的dom要干掉，原则上第二次就不需要用到了
        if (dom?.querySelector('canvas[type="tmp"]')) {
            dom.removeChild(canvas);
        }

        graphic.setTooltipConfig({
            el: groupEl,
            componentModel: axisModel,
            itemName: name
        });

        groupEl.__fullText = name;
        // Id for animation
        groupEl.anid = 'name';

        if (axisModel.get('triggerEvent')) {
            const eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisName';
            eventData.name = name;
            getECData(groupEl).eventData = eventData;
        }

        // FIXME
        transformGroup.add(groupEl);
        groupEl.updateTransform();

        group.add(groupEl);

        groupEl.decomposeTransform();
    }

};

function endTextLayout(
    rotation: number, textPosition: 'start' | 'middle' | 'end', textRotate: number, extent: number[]
) {
    const rotationDiff = remRadian(textRotate - rotation);
    let textAlign: ZRTextAlign;
    let textVerticalAlign: ZRTextVerticalAlign;
    const inverse = extent[0] > extent[1];
    const onLeft = (textPosition === 'start' && !inverse)
        || (textPosition !== 'start' && inverse);

    if (isRadianAroundZero(rotationDiff - PI / 2)) {
        textVerticalAlign = onLeft ? 'bottom' : 'top';
        textAlign = 'center';
    }
    else if (isRadianAroundZero(rotationDiff - PI * 1.5)) {
        textVerticalAlign = onLeft ? 'top' : 'bottom';
        textAlign = 'center';
    }
    else {
        textVerticalAlign = 'middle';
        if (rotationDiff < PI * 1.5 && rotationDiff > PI / 2) {
            textAlign = onLeft ? 'left' : 'right';
        }
        else {
            textAlign = onLeft ? 'right' : 'left';
        }
    }

    return {
        rotation: rotationDiff,
        textAlign: textAlign,
        textVerticalAlign: textVerticalAlign
    };
}

function fixMinMaxLabelShow(
    axisModel: AxisBaseModel,
    labelEls: graphic.Text[],
    tickEls: graphic.Line[]
) {
    if (shouldShowAllLabels(axisModel.axis)) {
        return;
    }

    // If min or max are user set, we need to check
    // If the tick on min(max) are overlap on their neighbour tick
    // If they are overlapped, we need to hide the min(max) tick label
    const showMinLabel = axisModel.get(['axisLabel', 'showMinLabel']);
    const showMaxLabel = axisModel.get(['axisLabel', 'showMaxLabel']);

    // FIXME
    // Have not consider onBand yet, where tick els is more than label els.

    labelEls = labelEls || [];
    tickEls = tickEls || [];

    const firstLabel = labelEls[0];
    const nextLabel = labelEls[1];
    const lastLabel = labelEls[labelEls.length - 1];
    const prevLabel = labelEls[labelEls.length - 2];

    const firstTick = tickEls[0];
    const nextTick = tickEls[1];
    const lastTick = tickEls[tickEls.length - 1];
    const prevTick = tickEls[tickEls.length - 2];

    if (showMinLabel === false) {
        ignoreEl(firstLabel);
        ignoreEl(firstTick);
    }
    else if (isTwoLabelOverlapped(firstLabel, nextLabel)) {
        if (showMinLabel) {
            ignoreEl(nextLabel);
            ignoreEl(nextTick);
        }
        else {
            ignoreEl(firstLabel);
            ignoreEl(firstTick);
        }
    }

    if (showMaxLabel === false) {
        ignoreEl(lastLabel);
        ignoreEl(lastTick);
    }
    else if (isTwoLabelOverlapped(prevLabel, lastLabel)) {
        if (showMaxLabel) {
            ignoreEl(prevLabel);
            ignoreEl(prevTick);
        }
        else {
            ignoreEl(lastLabel);
            ignoreEl(lastTick);
        }
    }
}

function ignoreEl(el: Element) {
    el && (el.ignore = true);
}

function isTwoLabelOverlapped(
    current: graphic.Text,
    next: graphic.Text
) {
    // current and next has the same rotation.
    const firstRect = current && current.getBoundingRect().clone();
    const nextRect = next && next.getBoundingRect().clone();

    if (!firstRect || !nextRect) {
        return;
    }

    // When checking intersect of two rotated labels, we use mRotationBack
    // to avoid that boundingRect is enlarge when using `boundingRect.applyTransform`.
    const mRotationBack = matrixUtil.identity([]);
    matrixUtil.rotate(mRotationBack, mRotationBack, -current.rotation);

    firstRect.applyTransform(matrixUtil.mul([], mRotationBack, current.getLocalTransform()));
    nextRect.applyTransform(matrixUtil.mul([], mRotationBack, next.getLocalTransform()));

    return firstRect.intersect(nextRect);
}

function isNameLocationCenter(nameLocation: string) {
    return nameLocation === 'middle' || nameLocation === 'center';
}


function createTicks(
    ticksCoords: TickCoord[],
    tickTransform: matrixUtil.MatrixArray,
    tickEndCoord: number,
    tickLineStyle: PathStyleProps,
    anidPrefix: string
) {
    const tickEls = [];
    const pt1: number[] = [];
    const pt2: number[] = [];
    for (let i = 0; i < ticksCoords.length; i++) {
        const tickCoord = ticksCoords[i].coord;

        pt1[0] = tickCoord;
        pt1[1] = 0;
        pt2[0] = tickCoord;
        pt2[1] = tickEndCoord;

        if (tickTransform) {
            v2ApplyTransform(pt1, pt1, tickTransform);
            v2ApplyTransform(pt2, pt2, tickTransform);
        }
        // Tick line, Not use group transform to have better line draw
        const tickEl = new graphic.Line({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt2[0],
                y2: pt2[1]
            },
            style: tickLineStyle,
            z2: 2,
            autoBatch: true,
            silent: true
        });
        graphic.subPixelOptimizeLine(tickEl.shape, tickEl.style.lineWidth);
        tickEl.anid = anidPrefix + '_' + ticksCoords[i].tickValue;
        tickEls.push(tickEl);
    }
    return tickEls;
}

function buildAxisMajorTicks(
    group: graphic.Group,
    transformGroup: graphic.Group,
    axisModel: AxisBaseModel,
    opt: AxisBuilderCfg
) {
    const axis = axisModel.axis;

    const tickModel = axisModel.getModel('axisTick');

    let shown = tickModel.get('show');
    if (shown === 'auto' && opt.handleAutoShown) {
        shown = opt.handleAutoShown('axisTick');
    }
    if (!shown || axis.scale.isBlank()) {
        return;
    }

    const lineStyleModel = tickModel.getModel('lineStyle');
    const tickEndCoord = opt.tickDirection * tickModel.get('length');

    const ticksCoords = axis.getTicksCoords();

    const ticksEls = createTicks(ticksCoords, transformGroup.transform, tickEndCoord, defaults(
        lineStyleModel.getLineStyle(),
        {
            stroke: axisModel.get(['axisLine', 'lineStyle', 'color'])
        }
    ), 'ticks');

    for (let i = 0; i < ticksEls.length; i++) {
        group.add(ticksEls[i]);
    }

    return ticksEls;
}

function buildAxisMinorTicks(
    group: graphic.Group,
    transformGroup: graphic.Group,
    axisModel: AxisBaseModel,
    tickDirection: number
) {
    const axis = axisModel.axis;

    const minorTickModel = axisModel.getModel('minorTick');

    if (!minorTickModel.get('show') || axis.scale.isBlank()) {
        return;
    }

    const minorTicksCoords = axis.getMinorTicksCoords();
    if (!minorTicksCoords.length) {
        return;
    }

    const lineStyleModel = minorTickModel.getModel('lineStyle');
    const tickEndCoord = tickDirection * minorTickModel.get('length');

    const minorTickLineStyle = defaults(
        lineStyleModel.getLineStyle(),
        defaults(
            axisModel.getModel('axisTick').getLineStyle(),
            {
                stroke: axisModel.get(['axisLine', 'lineStyle', 'color'])
            }
        )
    );

    for (let i = 0; i < minorTicksCoords.length; i++) {
        const minorTicksEls = createTicks(
            minorTicksCoords[i], transformGroup.transform, tickEndCoord, minorTickLineStyle, 'minorticks_' + i
        );
        for (let k = 0; k < minorTicksEls.length; k++) {
            group.add(minorTicksEls[k]);
        }
    }
}

function buildAxisLabel(
    group: graphic.Group,
    transformGroup: graphic.Group,
    axisModel: AxisBaseModel,
    opt: AxisBuilderCfg
) {
    const axis = axisModel.axis;
    const show = retrieve(opt.axisLabelShow, axisModel.get(['axisLabel', 'show']));

    if (!show || axis.scale.isBlank()) {
        return;
    }

    const labelModel = axisModel.getModel('axisLabel');
    const labelMargin = labelModel.get('margin');
    const labels = axis.getViewLabels();

    // Special label rotate.
    const labelRotation = (
        retrieve(opt.labelRotate, labelModel.get('rotate')) || 0
    ) * PI / 180;

    const labelLayout = AxisBuilder.innerTextLayout(opt.rotation, labelRotation, opt.labelDirection);
    const rawCategoryData = axisModel.getCategories && axisModel.getCategories(true);

    const labelEls: graphic.Text[] = [];
    const silent = AxisBuilder.isLabelSilent(axisModel);
    const triggerEvent = axisModel.get('triggerEvent');

    each(labels, function (labelItem, index) {
        const tickValue = axis.scale.type === 'ordinal'
            ? (axis.scale as OrdinalScale).getRawOrdinalNumber(labelItem.tickValue)
            : labelItem.tickValue;
        const formattedLabel = labelItem.formattedLabel;
        const rawLabel = labelItem.rawLabel;

        let itemLabelModel = labelModel;
        if (rawCategoryData && rawCategoryData[tickValue]) {
            const rawCategoryItem = rawCategoryData[tickValue];
            if (isObject(rawCategoryItem) && rawCategoryItem.textStyle) {
                itemLabelModel = new Model(
                    rawCategoryItem.textStyle, labelModel, axisModel.ecModel
                );
            }
        }

        const textColor = itemLabelModel.getTextColor() as AxisBaseOption['axisLabel']['color']
            || axisModel.get(['axisLine', 'lineStyle', 'color']);

        const tickCoord = axis.dataToCoord(tickValue);

        const textEl = new graphic.Text({
            x: tickCoord,
            y: opt.labelOffset + opt.labelDirection * labelMargin,
            rotation: labelLayout.rotation,
            silent: silent,
            z2: 10 + (labelItem.level || 0),
            style: createTextStyle(itemLabelModel, {
                text: formattedLabel,
                align: itemLabelModel.getShallow('align', true)
                    || labelLayout.textAlign,
                verticalAlign: itemLabelModel.getShallow('verticalAlign', true)
                    || itemLabelModel.getShallow('baseline', true)
                    || labelLayout.textVerticalAlign,
                fill: isFunction(textColor)
                    ? textColor(
                        // (1) In category axis with data zoom, tick is not the original
                        // index of axis.data. So tick should not be exposed to user
                        // in category axis.
                        // (2) Compatible with previous version, which always use formatted label as
                        // input. But in interval scale the formatted label is like '223,445', which
                        // maked user repalce ','. So we modify it to return original val but remain
                        // it as 'string' to avoid error in replacing.
                        axis.type === 'category'
                            ? rawLabel
                            : axis.type === 'value'
                                ? tickValue + ''
                                : tickValue,
                        index
                    )
                    : textColor as string
            })
        });
        textEl.anid = 'label_' + tickValue;


        // Pack data for mouse event
        if (triggerEvent) {
            const eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisLabel';
            eventData.value = rawLabel;
            eventData.tickIndex = index;
            if (axis.type === 'category') {
                eventData.dataIndex = tickValue;
            }

            getECData(textEl).eventData = eventData;
        }

        // FIXME
        transformGroup.add(textEl);
        textEl.updateTransform();

        labelEls.push(textEl);
        group.add(textEl);

        textEl.decomposeTransform();

    });

    return labelEls;
}


export default AxisBuilder;
