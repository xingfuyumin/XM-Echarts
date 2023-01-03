const chartDom = document.getElementById('root1');
const chartDom2 = document.getElementById('root2');
const chartDom3 = document.getElementById('root3');
const myChart = echarts.init(chartDom);
const myChart2 = echarts.init(chartDom2);
const myChart3 = echarts.init(chartDom3);
const option = {
  grid: {
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    name: '感谢二蛋给Thank Erdan for findشكرا لك على سبة لي .ing me something to do我找العمل بالن事做',
    nameLocation: 'center',
    nameVertical: true,
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
const option2 = {
  grid: {
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    name: 'Erdan for findشكرا لك على سبة لي .ing me something to',
    nameLocation: 'center'
  },
  yAxis: [{
    type: 'value',
    name: 'Thank Erdan for findشكرا لك على سبة لي .ing me something to d',
    nameLocation: 'center',
    nameVertical: true,
  }, {
    type: 'value',
    name: '感谢二蛋给Thank Erdan for findشكرا لك على سبة لي .ing me something to do我找العمل بالن事做',
    nameVertical: true,
    nameLocation: 'center'
  }, ],
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      yAxisIndex: 0,
    },
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'bar',
      yAxisIndex: 1,
    }
  ]
};
const option3 =
{
  grid: {
    containLabel: true
  },
  xAxis: {},
  yAxis: [{
    type: 'value',
    name: '感谢二蛋给Thank Erdan for findشكرا لك على سبة لي .ing me something to do我找العمل بالن事做',
    nameLocation: 'center',
    nameVertical: true,
    nameGap: 0,
    position: 'right',
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
    }
  ]
}

myChart.setOption(option);
myChart2.setOption(option2);
myChart3.setOption(option3);