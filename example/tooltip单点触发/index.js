const chartDom = document.getElementById('root1');
const chartDom2 = document.getElementById('root2');
const chartDom3 = document.getElementById('root3');
const myChart = echarts.init(chartDom);
const myChart2 = echarts.init(chartDom2);
const myChart3 = echarts.init(chartDom3);
function makeData() {
  let data = [];
  for (let i = 0; i < 18; i++) {
    let cate = [];
    for (let j = 0; j < 100; j++) {
      cate.push(Math.random() * 200);
    }
    data.push(cate);
  }
  return data;
}
const data0 = makeData();
const data1 = makeData();
const data2 = makeData();
const option = {
  title: {
    text: 'Multiple Categories',
    left: 'center'
  },
  dataset: [
    {
      source: data0
    },
    {
      source: data1
    },
    {
      source: data2
    },
    {
      fromDatasetIndex: 0,
      transform: { type: 'boxplot' }
    },
    {
      fromDatasetIndex: 1,
      transform: { type: 'boxplot' }
    },
    {
      fromDatasetIndex: 2,
      transform: { type: 'boxplot' }
    }
  ],
  legend: {
    top: '10%'
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '10%',
    top: '20%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    nameGap: 30,
    splitArea: {
      show: true
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'Value',
    min: -400,
    max: 600,
    splitArea: {
      show: false
    }
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20
    },
    {
      show: true,
      type: 'slider',
      top: '90%',
      xAxisIndex: [0],
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      name: 'category0',
      type: 'boxplot',
      datasetIndex: 3
    },
    {
      name: 'category1',
      type: 'boxplot',
      datasetIndex: 4
    },
    {
      name: 'category2',
      type: 'boxplot',
      datasetIndex: 5
    }
  ]
};
const option2 = {
  grid: {
    containLabel: true
  },
  tooltip: {
    trigger: 'auto',
    axisPointer: {
      type: 'shadow',
    }

  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: [{
    type: 'value',
    name: '感谢二蛋给Thank Erdan for findشكرا لك على سبة لي .ing me something to do我找العمل بالن事做',
    nameLocation: 'center'
  }, {
    type: 'value',
    name: '感谢二蛋给Thank Erdan for findشكرا لك على سبة لي .ing me something to do我找العمل بالن事做',
    nameLocation: 'center'
  }],
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      yAxisIndex: 0,
      emphasis: {
        focus: 'series',
      },
    },
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'bar',
      yAxisIndex: 1,
      emphasis: {
        focus: 'series',
      },
    },
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      areaStyle: {},
      yAxisIndex: 1,
      emphasis: {
        focus: 'series',
      },
    },
    {
      data: [150, 20, 24, 218, 135, 17, 260],
      type: 'line',
      areaStyle: {},
      yAxisIndex: 1,
      emphasis: {
        focus: 'series',
      },
    }
  ]
};
const option3 = 
{
  grid: {
    containLabel: true
  },
  tooltip: {
    trigger: 'item',

  },
  xAxis: {},
  yAxis: [{
    type: 'value',
    name: '感谢二蛋给Thank Erdan for findشكرا لك على سبة لي .ing me something to do我找العمل بالن事做',
    nameLocation: 'center',
    nameGap: 0,
  },
  {
    type: 'value',
    name: '感谢二蛋给Thank Erdan for findشكرا لك على سبة لي .ing me something to do我找العمل بالن事做',
    nameLocation: 'center',
    nameGap: 0,
  }],
  series: [
    {
      symbolSize: 20,
      data: [
        [10.0, 800.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [-12.0, 8.84],
        [-7.08, 5.82],
        [-5.02, 5.60008]
      ],
      type: 'scatter',
      yAxisIndex: 0,
    },
    {
      symbolSize: 20,
      data: [
        [10.0, 800.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [-12.0, 8.84],
        [-7.08, 5.82],
        [-5.02, 5.60008]
      ],
      type: 'scatter',
      yAxisIndex: 1,
    }
  ]
}

myChart.setOption(option);
myChart2.setOption(option2);
myChart3.setOption(option3);