# XM-Echarts

## 介绍
本组件是基于开源组件Apache ECharts的5.3.3版本进行自定义开发，修复了个别echarts长久来一直存在的问题，也为echarts增加了一些个性化的功能。  
目前正在持续迭代中，欢迎大家一起来维护。

## 使用
直接将本项目的dist/echarts.min.js导入到项目即可，如果是npm引入的echarts则需要在打包时配置优先使用html外部导入的echarts.min.js。
有啥问题可以在issue中联系作者。

## 新功能或修改介绍

### Y轴名称居中时自动翻转
曾经遇到过一个需求，Y轴名称需要在两边分别垂直排列，其中中文是单字正常，整体垂直排列，而英文是单字翻转，整体垂直排列。原有方案是通过css的writing-mode属性实现，但是该属性在溢出...时和safari浏览器中都有兼容性问题，所以我们想在echarts直接使用该配置。

目前设置yAxis.nameLocation=“center”才能触发文本的垂直排列

### tooltip系列触发和单点出发自动切换
tooltip.trigger只能配置为axis或item,不能同时存在 。 
tooltip.trigger="axis"，同时series.tooltip.trigger="item"时可以做到鼠标放在空白处触发整体tooltip，放置在点上时触发单点的tooltip，但是此时的坐标指示线去不掉。  

目前设置 tooltip.trigger = ‘auto’时生效

### 大数量图表tooltip操作优化
tooltip.enterable支持鼠标进入tooltip内容，但是当数据很多时鼠标在移到tooltip中时必然会经过其他点，然后就会触发新的tooltip，导致问题出现。  
尽管通过tooltip.showDelay可以保证鼠标轻松移到tooltip，但是他不会阻止经过的点的tooltip事件的触发，导致tooltip还是会变。  
tooltip.showDelay支持让tooltip内容延迟展示，但是此时当鼠标移出图表后，tooltip还是会延迟触发，导致鼠标已经移出了，但是tooltip还是过一会自己展示了

目前设置通过tooltip.showDelay可以实现功能同时没有了原有的BUG

### 更多修改上线中，敬请期待...