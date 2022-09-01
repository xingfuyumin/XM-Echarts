const chartDom = document.getElementById('root1');
const myChart = echarts.init(chartDom);

const option = {
  grid: {
    containLabel: true
  },
  tooltip: {
    trigger: 'auto',
    axisPointer: {
      type: 'shadow',
    },
    enterable: true,
    showDelay: 500,
  },
  xAxis: {
    type: 'category',
    data: ['Mon1', 'Tue2', 'Wed3', 'Thu4', 'Fri5', 'Sat6', 'Sun7', 'Mon8', 'Tue9', 'Wed10', 'Thu11', 'Fri12', 'Sat13', 'Sun14','Mon15', 'Tue16', 'Wed17', 'Thu18', 'Fri19', 'Sat20', 'Sun21', 'Mon22', 'Tue23', 'Wed24', 'Thu25', 'Fri26', 'Sat27', 'Sun28']
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
      data: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      yAxisIndex: 0,
      emphasis: {
        focus: 'series',
      },
    },
    {
      data: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260],
      type: 'bar',
      yAxisIndex: 1,
      emphasis: {
        focus: 'series',
      },
    }
  ]
};

myChart.setOption(option);