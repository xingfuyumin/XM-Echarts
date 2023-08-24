const chartDom = document.getElementById('root1');
const myChart = echarts.init(chartDom);

const option =
{
  "grid": {
    "top": 10,
    "bottom": 73,
    "bottomBak": 73,
    "left": 30,
    "right": 10,
    "containLabel": true
  },
  "legend": {
    "show": true,
    "data": [
      "187",
      "196",
      "12",
      "90",
      "193",
      "23",
      "49",
      "6",
      "195",
      "61",
      "156",
      "157",
      "(null)",
      "137",
      "92",
      "124",
      "27",
      "108",
      "181",
      "139",
      "21",
      "64",
      "36",
      "142",
      "180",
      "84",
      "110",
      "150",
      "100",
      "159",
      "22",
      "178",
      "116",
      "136",
      "13",
      "45",
      "66",
      "93",
      "130",
      "118",
      "177",
      "151",
      "17",
      "54",
      "155",
      "111",
      "113",
      "32",
      "20",
      "160",
      "88",
      "171",
      "39",
      "16",
      "94",
      "163",
      "44",
      "117",
      "186",
      "79",
      "83",
      "75",
      "102",
      "179",
      "33",
      "4",
      "146",
      "152",
      "131",
      "87",
      "65",
      "166",
      "19",
      "50",
      "184",
      "127",
      "98",
      "62",
      "68",
      "143",
      "1",
      "119",
      "197",
      "140",
      "103",
      "78",
      "169",
      "200",
      "99",
      "9",
      "59",
      "123",
      "170",
      "51",
      "11",
      "176",
      "199",
      "82",
      "167",
      "128",
      "191",
      "46",
      "107",
      "34",
      "121",
      "190",
      "37",
      "153",
      "147",
      "5",
      "185",
      "38",
      "120",
      "52",
      "148",
      "174",
      "194",
      "96",
      "41",
      "40",
      "161",
      "15",
      "145",
      "133",
      "81",
      "112",
      "114",
      "55",
      "86",
      "28",
      "144",
      "122",
      "158",
      "189",
      "60",
      "115",
      "35",
      "109",
      "53",
      "56",
      "10",
      "73",
      "25",
      "48",
      "91",
      "31",
      "63",
      "126",
      "74",
      "2",
      "72",
      "182",
      "149",
      "57",
      "77",
      "71",
      "24",
      "67",
      "105",
      "97",
      "172",
      "18",
      "26",
      "173",
      "162",
      "76",
      "47",
      "168",
      "3",
      "42",
      "132",
      "192",
      "175",
      "101",
      "58",
      "106",
      "188",
      "138",
      "165",
      "164",
      "69",
      "29",
      "30",
      "154",
      "70",
      "89",
      "135",
      "7",
      "14",
      "95",
      "8",
      "104",
      "80",
      "198",
      "125",
      "134",
      "183",
      "85"
    ],
    "bottom": 30,
    "type": "scroll",
    "itemGap": 12,
    "itemWidth": 10,
    "itemHeight": 10,
    "icon": "roundRect",
    "orient": "horizontal",
    "textStyle": {
      "color": "#202241",
      "overflow": "truncate"
    }
  },
  "tooltip": {
    "trigger": "item",
    "enterable": true,
    "backgroundColor": "#FFF",
    "borderColor": "#EEF1F7",
    "borderWidth": 1,
    "confine": true,
    "showDelay": 50,
    "textStyle": {
      "fontSize": "12px",
      "fontWeight": "normal"
    },
    "axisPointer": {
      "type": "line",
      "lineStyle": {
        "color": "#A1A7BB",
        "width": 1
      },
      "shadowStyle": {
        "color": "rgba(1, 4, 24, 0.1)"
      }
    },
    "hideDelay": 0,
    "padding": 5,
    "className": "chart-tooltip"
  },
  "xAxis": {
    "name": "micro_decimal",
    "nameGap": 25,
    "scale": false,
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": "#EBEDF3"
      }
    },
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#DEE1EB"
      }
    },
    "axisLabel": {
      "show": true,
      "color": "#747C94"
    },
    "triggerEvent": true,
    "axisTick": {
      "show": false
    },
    "splitNumber": 7,
    "nameTextStyle": {
      "color": "#747C94",
      "fontSize": 12
    },
    "nameLocation": "center"
  },
  "yAxis": [
    {
      "name": "level",
      "scale": false,
      "axisLabel": {
        "show": true,
        "color": "#747C94"
      },
      "axisLine": {
        "show": true
      },
      "splitLine": {
        "lineStyle": {
          "type": "solid",
          "color": "#EBEDF3"
        }
      },
      "type": "value",
      "axisTick": {
        "show": false
      },
      "splitNumber": 7,
      "nameLocation": "center",
      "nameTextStyle": {
        "color": "#747C94",
        "fontSize": 12
      },
      "nameVertical": true
    }
  ],
  "series": [
    {
      "name": "187",
      "data": [
        [
          2.1635999999999997,
          1122,
          null,
          "0.3606,2021-04-21",
          "187"
        ],
        [
          0.594,
          374,
          null,
          "0.297,2021-05-21",
          "187"
        ],
        [
          -0.0508,
          374,
          null,
          "-0.0254,2021-06-01",
          "187"
        ],
        [
          0.0922,
          374,
          null,
          "0.0461,2021-06-01",
          "187"
        ],
        [
          0.4606,
          374,
          null,
          "0.2303,2021-05-14",
          "187"
        ],
        [
          -0.2888,
          374,
          null,
          "-0.1444,2021-05-17",
          "187"
        ],
        [
          -1.1214,
          374,
          null,
          "-0.5607,2021-05-12",
          "187"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "196",
      "data": [
        [
          1.3284,
          392,
          null,
          "0.6642,2021-04-21",
          "196"
        ],
        [
          0.551,
          392,
          null,
          "0.2755,2021-05-16",
          "196"
        ],
        [
          0.7364,
          196,
          null,
          "0.7364,2021-06-27",
          "196"
        ],
        [
          0.9013,
          196,
          null,
          "0.9013,2021-06-27",
          "196"
        ],
        [
          0.1044,
          392,
          null,
          "0.0522,2021-04-17",
          "196"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "12",
      "data": [
        [
          -0.0552,
          12,
          null,
          "-0.0552,2021-04-21",
          "12"
        ],
        [
          -0.0948,
          24,
          null,
          "-0.0474,2021-04-20",
          "12"
        ],
        [
          -1.297,
          24,
          null,
          "-0.6485,2021-05-09",
          "12"
        ],
        [
          3.2968,
          48,
          null,
          "0.8242,2021-06-13",
          "12"
        ],
        [
          -0.2302,
          12,
          null,
          "-0.2302,2021-06-16",
          "12"
        ],
        [
          -0.955,
          12,
          null,
          "-0.955,2021-05-04",
          "12"
        ],
        [
          0.6256,
          24,
          null,
          "0.3128,2021-06-27",
          "12"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "90",
      "data": [
        [
          0,
          360,
          null,
          "(null),2021-04-21",
          "90"
        ],
        [
          -0.2253,
          90,
          null,
          "-0.2253,2021-06-28",
          "90"
        ],
        [
          -0.0046,
          90,
          null,
          "-0.0046,2021-06-13",
          "90"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "193",
      "data": [
        [
          0,
          579,
          null,
          "(null),2021-04-21",
          "193"
        ],
        [
          -0.4449,
          193,
          null,
          "-0.4449,2021-05-04",
          "193"
        ],
        [
          0.7344,
          193,
          null,
          "0.7344,2021-04-21",
          "193"
        ],
        [
          1.8861,
          579,
          null,
          "0.6287,2021-05-09",
          "193"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "23",
      "data": [
        [
          0,
          69,
          null,
          "(null),2021-04-21",
          "23"
        ],
        [
          -0.8096999999999999,
          69,
          null,
          "-0.2699,2021-06-21",
          "23"
        ],
        [
          3.658,
          92,
          null,
          "0.9145,2021-05-04",
          "23"
        ],
        [
          4.227,
          115,
          null,
          "0.8454,2021-05-22",
          "23"
        ],
        [
          1.7678,
          46,
          null,
          "0.8839,2021-05-17",
          "23"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "49",
      "data": [
        [
          0.5016,
          196,
          null,
          "0.1254,2021-04-21",
          "49"
        ],
        [
          0,
          98,
          null,
          "(null),2021-06-21",
          "49"
        ],
        [
          0.2708,
          98,
          null,
          "0.1354,2021-04-20",
          "49"
        ],
        [
          1.0312,
          98,
          null,
          "0.5156,2021-04-17",
          "49"
        ],
        [
          0,
          98,
          null,
          "(null),2021-04-10",
          "49"
        ],
        [
          -0.58,
          49,
          null,
          "-0.58,2021-05-21",
          "49"
        ],
        [
          3.86,
          196,
          null,
          "0.965,2021-05-16",
          "49"
        ],
        [
          -0.4056,
          98,
          null,
          "-0.2028,2021-04-17",
          "49"
        ],
        [
          1.5162,
          147,
          null,
          "0.5054,2021-06-16",
          "49"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "6",
      "data": [
        [
          -0.349,
          12,
          null,
          "-0.1745,2021-04-21",
          "6"
        ],
        [
          0.63,
          18,
          null,
          "0.21,2021-03-09",
          "6"
        ],
        [
          0.604,
          12,
          null,
          "0.302,2021-06-28",
          "6"
        ],
        [
          -1.9932,
          12,
          null,
          "-0.9966,2021-06-21",
          "6"
        ],
        [
          -0.335,
          12,
          null,
          "-0.1675,2021-05-16",
          "6"
        ],
        [
          1.1816,
          12,
          null,
          "0.5908,2021-05-17",
          "6"
        ],
        [
          -0.496,
          6,
          null,
          "-0.496,2021-06-26",
          "6"
        ],
        [
          -1.6804,
          12,
          null,
          "-0.8402,2021-06-11",
          "6"
        ],
        [
          0.9886,
          6,
          null,
          "0.9886,2021-06-07",
          "6"
        ],
        [
          0.7486,
          6,
          null,
          "0.7486,2021-05-12",
          "6"
        ],
        [
          -0.94,
          12,
          null,
          "-0.47,2021-05-12",
          "6"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "195",
      "data": [
        [
          1.8814,
          390,
          null,
          "0.9407,2021-04-21",
          "195"
        ],
        [
          1.7775,
          585,
          null,
          "0.5925,2021-05-04",
          "195"
        ],
        [
          0.0475,
          195,
          null,
          "0.0475,2021-05-22",
          "195"
        ],
        [
          -0.7968,
          585,
          null,
          "-0.2656,2021-06-04",
          "195"
        ],
        [
          0,
          195,
          null,
          "(null),2021-06-28",
          "195"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "61",
      "data": [
        [
          -1.5708,
          122,
          null,
          "-0.7854,2021-04-21",
          "61"
        ],
        [
          0.9510000000000001,
          183,
          null,
          "0.317,2021-05-14",
          "61"
        ],
        [
          -0.8358,
          122,
          null,
          "-0.4179,2021-06-28",
          "61"
        ],
        [
          0,
          244,
          null,
          "(null),2021-06-26",
          "61"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "156",
      "data": [
        [
          -0.4974,
          156,
          null,
          "-0.4974,2021-04-21",
          "156"
        ],
        [
          0.6842,
          312,
          null,
          "0.3421,2021-06-21",
          "156"
        ],
        [
          0,
          312,
          null,
          "(null),2021-06-16",
          "156"
        ],
        [
          1.146,
          312,
          null,
          "0.573,2021-05-22",
          "156"
        ],
        [
          0,
          468,
          null,
          "(null),2021-05-09",
          "156"
        ],
        [
          0.0673,
          156,
          null,
          "0.0673,2021-05-17",
          "156"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "157",
      "data": [
        [
          0.229,
          314,
          null,
          "0.1145,2021-04-21",
          "157"
        ],
        [
          -0.4426,
          314,
          null,
          "-0.2213,2021-06-02",
          "157"
        ],
        [
          -1.6792,
          314,
          null,
          "-0.8396,2021-06-27",
          "157"
        ],
        [
          1.1554,
          314,
          null,
          "0.5777,2021-06-28",
          "157"
        ],
        [
          0.1192,
          314,
          null,
          "0.0596,2021-06-11",
          "157"
        ],
        [
          -0.9652,
          314,
          null,
          "-0.4826,2021-06-11",
          "157"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "(null)",
      "data": [
        [
          -1.2608,
          0,
          null,
          "-0.3152,2021-04-21",
          "(null)"
        ],
        [
          2.5416,
          0,
          null,
          "0.8472,2021-04-21",
          "(null)"
        ],
        [
          1.0906,
          0,
          null,
          "0.5453,2021-04-21",
          "(null)"
        ],
        [
          -0.7794,
          0,
          null,
          "-0.7794,2021-04-21",
          "(null)"
        ],
        [
          -0.3378,
          0,
          null,
          "-0.1689,2021-06-21",
          "(null)"
        ],
        [
          -0.1334,
          0,
          null,
          "-0.1334,2021-06-28",
          "(null)"
        ],
        [
          1.5648,
          0,
          null,
          "0.3912,2021-06-28",
          "(null)"
        ],
        [
          -0.9077999999999999,
          0,
          null,
          "-0.3026,2021-05-14",
          "(null)"
        ],
        [
          1.245,
          0,
          null,
          "0.6225,2021-05-14",
          "(null)"
        ],
        [
          0.0898,
          0,
          null,
          "0.0449,2021-06-07",
          "(null)"
        ],
        [
          2.0068,
          0,
          null,
          "0.5017,2021-05-16",
          "(null)"
        ],
        [
          -1.8714,
          0,
          null,
          "-0.6238,2021-05-16",
          "(null)"
        ],
        [
          -0.2273,
          0,
          null,
          "-0.2273,2021-05-16",
          "(null)"
        ],
        [
          -0.0068,
          0,
          null,
          "-0.0034,2021-04-20",
          "(null)"
        ],
        [
          1.0926,
          0,
          null,
          "0.3642,2021-04-20",
          "(null)"
        ],
        [
          3.14,
          0,
          null,
          "0.785,2021-04-20",
          "(null)"
        ],
        [
          0,
          0,
          null,
          "(null),2021-05-04",
          "(null)"
        ],
        [
          -2.565,
          0,
          null,
          "-0.855,2021-05-04",
          "(null)"
        ],
        [
          0.3618,
          0,
          null,
          "0.1809,2021-04-17",
          "(null)"
        ],
        [
          0,
          0,
          null,
          "(null),2021-06-27",
          "(null)"
        ],
        [
          1.6018,
          0,
          null,
          "0.8009,2021-06-27",
          "(null)"
        ],
        [
          1.5496,
          0,
          null,
          "0.7748,2021-05-22",
          "(null)"
        ],
        [
          -0.9452,
          0,
          null,
          "-0.4726,2021-05-22",
          "(null)"
        ],
        [
          0.5756,
          0,
          null,
          "0.5756,2021-05-09",
          "(null)"
        ],
        [
          1.958,
          0,
          null,
          "0.979,2021-05-09",
          "(null)"
        ],
        [
          0.9504000000000001,
          0,
          null,
          "0.3168,2021-06-13",
          "(null)"
        ],
        [
          2.3886000000000003,
          0,
          null,
          "0.7962,2021-06-13",
          "(null)"
        ],
        [
          -0.2044,
          0,
          null,
          "-0.1022,2021-06-02",
          "(null)"
        ],
        [
          0.818,
          0,
          null,
          "0.818,2021-06-02",
          "(null)"
        ],
        [
          -5.148,
          0,
          null,
          "-0.858,2021-06-04",
          "(null)"
        ],
        [
          2.4144,
          0,
          null,
          "0.6036,2021-04-10",
          "(null)"
        ],
        [
          0.1243,
          0,
          null,
          "0.1243,2021-05-17",
          "(null)"
        ],
        [
          1.2164,
          0,
          null,
          "0.6082,2021-05-17",
          "(null)"
        ],
        [
          -0.373,
          0,
          null,
          "-0.1865,2021-05-17",
          "(null)"
        ],
        [
          0.9872,
          0,
          null,
          "0.9872,2021-06-26",
          "(null)"
        ],
        [
          -2.3445,
          0,
          null,
          "-0.7815,2021-06-26",
          "(null)"
        ],
        [
          -0.0162,
          0,
          null,
          "-0.0081,2021-06-26",
          "(null)"
        ],
        [
          0.27449999999999997,
          0,
          null,
          "0.0915,2021-06-11",
          "(null)"
        ],
        [
          0.7818,
          0,
          null,
          "0.7818,2021-06-11",
          "(null)"
        ],
        [
          0.7295,
          0,
          null,
          "0.7295,2021-05-21",
          "(null)"
        ],
        [
          2.1129000000000002,
          0,
          null,
          "0.7043,2021-05-12",
          "(null)"
        ],
        [
          1.9338,
          0,
          null,
          "0.9669,2021-05-12",
          "(null)"
        ],
        [
          -0.9230999999999999,
          0,
          null,
          "-0.3077,2021-03-09",
          "(null)"
        ],
        [
          -0.4912,
          0,
          null,
          "-0.4912,2021-03-09",
          "(null)"
        ],
        [
          -0.3638,
          0,
          null,
          "-0.1819,2021-03-09",
          "(null)"
        ],
        [
          -1.1264,
          0,
          null,
          "-0.5632,2021-04-01",
          "(null)"
        ],
        [
          -0.2635,
          0,
          null,
          "-0.2635,2021-04-01",
          "(null)"
        ],
        [
          0.3122,
          0,
          null,
          "0.3122,2021-04-01",
          "(null)"
        ],
        [
          -0.5678,
          0,
          null,
          "-0.2839,2021-05-08",
          "(null)"
        ],
        [
          2.6889,
          0,
          null,
          "0.8963,2021-04-04",
          "(null)"
        ],
        [
          -0.11,
          0,
          null,
          "-0.11,2021-04-04",
          "(null)"
        ],
        [
          -0.0142,
          0,
          null,
          "-0.0142,2021-04-04",
          "(null)"
        ],
        [
          -1.1544,
          0,
          null,
          "-0.5772,2021-04-21",
          "(null)"
        ],
        [
          -0.629,
          0,
          null,
          "-0.3145,2021-04-21",
          "(null)"
        ],
        [
          -2.9872000000000005,
          0,
          null,
          "-0.3734,2021-06-21",
          "(null)"
        ],
        [
          -2.1102,
          0,
          null,
          "-0.7034,2021-05-14",
          "(null)"
        ],
        [
          -1.7782,
          0,
          null,
          "-0.8891,2021-05-14",
          "(null)"
        ],
        [
          0.8362,
          0,
          null,
          "0.4181,2021-05-14",
          "(null)"
        ],
        [
          1.1432,
          0,
          null,
          "0.5716,2021-05-14",
          "(null)"
        ],
        [
          0,
          0,
          null,
          "(null),2021-06-07",
          "(null)"
        ],
        [
          4.3195,
          0,
          null,
          "0.8639,2021-06-07",
          "(null)"
        ],
        [
          3.7496,
          0,
          null,
          "0.9374,2021-06-07",
          "(null)"
        ],
        [
          0.4753,
          0,
          null,
          "0.4753,2021-06-21",
          "(null)"
        ],
        [
          -0.0582,
          0,
          null,
          "-0.0291,2021-05-16",
          "(null)"
        ],
        [
          -0.1966,
          0,
          null,
          "-0.0983,2021-05-16",
          "(null)"
        ],
        [
          1.9834,
          0,
          null,
          "0.9917,2021-05-16",
          "(null)"
        ],
        [
          0.5922,
          0,
          null,
          "0.5922,2021-05-16",
          "(null)"
        ],
        [
          0.7113,
          0,
          null,
          "0.7113,2021-05-16",
          "(null)"
        ],
        [
          -0.857,
          0,
          null,
          "-0.4285,2021-04-20",
          "(null)"
        ],
        [
          -0.7017,
          0,
          null,
          "-0.7017,2021-04-20",
          "(null)"
        ],
        [
          -3.4912,
          0,
          null,
          "-0.8728,2021-05-04",
          "(null)"
        ],
        [
          -0.9855,
          0,
          null,
          "-0.9855,2021-05-04",
          "(null)"
        ],
        [
          -0.8291,
          0,
          null,
          "-0.8291,2021-05-22",
          "(null)"
        ],
        [
          0,
          0,
          null,
          "(null),2021-05-09",
          "(null)"
        ],
        [
          0.0283,
          0,
          null,
          "0.0283,2021-05-09",
          "(null)"
        ],
        [
          0,
          0,
          null,
          "(null),2021-06-13",
          "(null)"
        ],
        [
          -0.4301,
          0,
          null,
          "-0.4301,2021-06-16",
          "(null)"
        ],
        [
          -0.4554,
          0,
          null,
          "-0.2277,2021-06-02",
          "(null)"
        ],
        [
          0.8657,
          0,
          null,
          "0.8657,2021-06-02",
          "(null)"
        ],
        [
          0.3171,
          0,
          null,
          "0.3171,2021-04-10",
          "(null)"
        ],
        [
          2.5473,
          0,
          null,
          "0.8491,2021-05-17",
          "(null)"
        ],
        [
          0,
          0,
          null,
          "(null),2021-05-17",
          "(null)"
        ],
        [
          -0.0748,
          0,
          null,
          "-0.0748,2021-05-17",
          "(null)"
        ],
        [
          -1.6888,
          0,
          null,
          "-0.8444,2021-05-17",
          "(null)"
        ],
        [
          -0.0761,
          0,
          null,
          "-0.0761,2021-05-17",
          "(null)"
        ],
        [
          -0.613,
          0,
          null,
          "-0.3065,2021-05-17",
          "(null)"
        ],
        [
          -1.5162,
          0,
          null,
          "-0.5054,2021-06-26",
          "(null)"
        ],
        [
          1.4528,
          0,
          null,
          "0.7264,2021-06-26",
          "(null)"
        ],
        [
          -1.5252,
          0,
          null,
          "-0.7626,2021-06-11",
          "(null)"
        ],
        [
          -0.4178,
          0,
          null,
          "-0.4178,2021-06-07",
          "(null)"
        ],
        [
          0.9499,
          0,
          null,
          "0.9499,2021-06-07",
          "(null)"
        ],
        [
          1.1262,
          0,
          null,
          "0.5631,2021-05-12",
          "(null)"
        ],
        [
          0.3807,
          0,
          null,
          "0.3807,2021-05-12",
          "(null)"
        ],
        [
          -0.9672,
          0,
          null,
          "-0.9672,2021-05-12",
          "(null)"
        ],
        [
          -0.7049999999999998,
          0,
          null,
          "-0.1175,2021-03-09",
          "(null)"
        ],
        [
          0.4144,
          0,
          null,
          "0.2072,2021-03-09",
          "(null)"
        ],
        [
          -0.824,
          0,
          null,
          "-0.412,2021-03-09",
          "(null)"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "137",
      "data": [
        [
          -0.0397,
          137,
          null,
          "-0.0397,2021-04-21",
          "137"
        ],
        [
          -0.4411,
          137,
          null,
          "-0.4411,2021-06-27",
          "137"
        ],
        [
          -2.7270000000000003,
          411,
          null,
          "-0.909,2021-05-22",
          "137"
        ],
        [
          -1.6726,
          274,
          null,
          "-0.8363,2021-05-21",
          "137"
        ],
        [
          1.4954,
          274,
          null,
          "0.7477,2021-05-04",
          "137"
        ],
        [
          -2.1584,
          1096,
          null,
          "-0.2698,2021-05-22",
          "137"
        ],
        [
          0,
          274,
          null,
          "(null),2021-03-09",
          "137"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "92",
      "data": [
        [
          -0.4221,
          92,
          null,
          "-0.4221,2021-04-21",
          "92"
        ],
        [
          -0.0745,
          92,
          null,
          "-0.0745,2021-05-08",
          "92"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "124",
      "data": [
        [
          0.3262,
          124,
          null,
          "0.3262,2021-04-21",
          "124"
        ],
        [
          -3.8128,
          496,
          null,
          "-0.9532,2021-05-14",
          "124"
        ],
        [
          -1.4284,
          496,
          null,
          "-0.3571,2021-05-16",
          "124"
        ],
        [
          0,
          496,
          null,
          "(null),2021-04-20",
          "124"
        ],
        [
          0,
          124,
          null,
          "(null),2021-04-17",
          "124"
        ],
        [
          -0.2152,
          248,
          null,
          "-0.1076,2021-06-02",
          "124"
        ],
        [
          5.0994,
          744,
          null,
          "0.8499,2021-04-10",
          "124"
        ],
        [
          0,
          248,
          null,
          "(null),2021-06-21",
          "124"
        ],
        [
          0.0063,
          124,
          null,
          "0.0063,2021-06-02",
          "124"
        ],
        [
          -2.6238,
          744,
          null,
          "-0.4373,2021-06-26",
          "124"
        ],
        [
          -2.8698,
          372,
          null,
          "-0.9566,2021-06-11",
          "124"
        ],
        [
          0.8032,
          248,
          null,
          "0.4016,2021-05-21",
          "124"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "27",
      "data": [
        [
          -0.8055000000000001,
          81,
          null,
          "-0.2685,2021-06-21",
          "27"
        ],
        [
          0,
          54,
          null,
          "(null),2021-05-14",
          "27"
        ],
        [
          -0.6591,
          81,
          null,
          "-0.2197,2021-06-02",
          "27"
        ],
        [
          1.9566,
          54,
          null,
          "0.9783,2021-04-01",
          "27"
        ],
        [
          -0.0669,
          27,
          null,
          "-0.0669,2021-04-01",
          "27"
        ],
        [
          -1.0294,
          54,
          null,
          "-0.5147,2021-05-16",
          "27"
        ],
        [
          0.8706,
          54,
          null,
          "0.4353,2021-06-13",
          "27"
        ],
        [
          1.418,
          108,
          null,
          "0.3545,2021-06-02",
          "27"
        ],
        [
          -0.2142,
          27,
          null,
          "-0.2142,2021-04-10",
          "27"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "108",
      "data": [
        [
          -1.8136,
          216,
          null,
          "-0.9068,2021-06-21",
          "108"
        ],
        [
          0.0623,
          108,
          null,
          "0.0623,2021-05-09",
          "108"
        ],
        [
          -0.1532,
          108,
          null,
          "-0.1532,2021-06-27",
          "108"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "181",
      "data": [
        [
          -1.8518,
          362,
          null,
          "-0.9259,2021-06-21",
          "181"
        ],
        [
          1.9634999999999998,
          543,
          null,
          "0.6545,2021-05-16",
          "181"
        ],
        [
          1.0642,
          362,
          null,
          "0.5321,2021-06-04",
          "181"
        ],
        [
          1.769,
          362,
          null,
          "0.8845,2021-06-02",
          "181"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "139",
      "data": [
        [
          0.1996,
          278,
          null,
          "0.0998,2021-06-21",
          "139"
        ],
        [
          -2.61,
          417,
          null,
          "-0.87,2021-04-17",
          "139"
        ],
        [
          2.8479,
          417,
          null,
          "0.9493,2021-05-09",
          "139"
        ],
        [
          0.1496,
          139,
          null,
          "0.1496,2021-06-13",
          "139"
        ],
        [
          -0.6242,
          278,
          null,
          "-0.3121,2021-03-09",
          "139"
        ],
        [
          -1.7106000000000001,
          417,
          null,
          "-0.5702,2021-04-21",
          "139"
        ],
        [
          0,
          139,
          null,
          "(null),2021-04-17",
          "139"
        ],
        [
          1.298,
          278,
          null,
          "0.649,2021-05-09",
          "139"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "21",
      "data": [
        [
          -1.5148,
          147,
          null,
          "-0.2164,2021-06-28",
          "21"
        ],
        [
          1.8072000000000001,
          63,
          null,
          "0.6024,2021-06-21",
          "21"
        ],
        [
          0.9658,
          42,
          null,
          "0.4829,2021-05-16",
          "21"
        ],
        [
          0,
          84,
          null,
          "(null),2021-06-27",
          "21"
        ],
        [
          0,
          42,
          null,
          "(null),2021-06-26",
          "21"
        ],
        [
          -1.717,
          42,
          null,
          "-0.8585,2021-05-21",
          "21"
        ],
        [
          -0.9992,
          42,
          null,
          "-0.4996,2021-05-04",
          "21"
        ],
        [
          0.1024,
          42,
          null,
          "0.0512,2021-05-09",
          "21"
        ],
        [
          -0.6821999999999999,
          63,
          null,
          "-0.2274,2021-05-21",
          "21"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "64",
      "data": [
        [
          -1.3256,
          128,
          null,
          "-0.6628,2021-06-28",
          "64"
        ],
        [
          -1.0958,
          128,
          null,
          "-0.5479,2021-05-16",
          "64"
        ],
        [
          1.6934,
          128,
          null,
          "0.8467,2021-06-21",
          "64"
        ],
        [
          1.3277999999999999,
          192,
          null,
          "0.4426,2021-06-27",
          "64"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "36",
      "data": [
        [
          -0.3932,
          36,
          null,
          "-0.3932,2021-06-28",
          "36"
        ],
        [
          1.921,
          72,
          null,
          "0.9605,2021-04-20",
          "36"
        ],
        [
          0.4337,
          36,
          null,
          "0.4337,2021-04-20",
          "36"
        ],
        [
          -3.2,
          144,
          null,
          "-0.8,2021-05-09",
          "36"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "142",
      "data": [
        [
          -0.666,
          852,
          null,
          "-0.111,2021-06-28",
          "142"
        ],
        [
          0,
          284,
          null,
          "(null),2021-06-21",
          "142"
        ],
        [
          0,
          568,
          null,
          "(null),2021-04-20",
          "142"
        ],
        [
          1.957,
          284,
          null,
          "0.9785,2021-06-04",
          "142"
        ],
        [
          1.7405000000000002,
          710,
          null,
          "0.3481,2021-06-26",
          "142"
        ],
        [
          1.0908,
          426,
          null,
          "0.3636,2021-05-08",
          "142"
        ],
        [
          -2.1525,
          426,
          null,
          "-0.7175,2021-05-14",
          "142"
        ],
        [
          -0.0151,
          142,
          null,
          "-0.0151,2021-04-10",
          "142"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "180",
      "data": [
        [
          -1.5828,
          1080,
          null,
          "-0.2638,2021-06-28",
          "180"
        ],
        [
          1.4001000000000001,
          540,
          null,
          "0.4667,2021-05-17",
          "180"
        ],
        [
          0.6353,
          180,
          null,
          "0.6353,2021-06-21",
          "180"
        ],
        [
          1.6262,
          360,
          null,
          "0.8131,2021-04-10",
          "180"
        ],
        [
          3.43,
          720,
          null,
          "0.8575,2021-06-26",
          "180"
        ],
        [
          -1.1716,
          360,
          null,
          "-0.5858,2021-06-11",
          "180"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "84",
      "data": [
        [
          0.3774,
          84,
          null,
          "0.3774,2021-06-28",
          "84"
        ],
        [
          0.3492,
          252,
          null,
          "0.1164,2021-05-17",
          "84"
        ],
        [
          -1.2064,
          168,
          null,
          "-0.6032,2021-06-11",
          "84"
        ],
        [
          -0.6854,
          168,
          null,
          "-0.3427,2021-05-12",
          "84"
        ],
        [
          1.5302,
          168,
          null,
          "0.7651,2021-05-04",
          "84"
        ],
        [
          1.631,
          420,
          null,
          "0.3262,2021-04-17",
          "84"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "110",
      "data": [
        [
          -0.0111,
          330,
          null,
          "-0.0037,2021-06-28",
          "110"
        ],
        [
          0.701,
          110,
          null,
          "0.701,2021-05-16",
          "110"
        ],
        [
          3.3284,
          440,
          null,
          "0.8321,2021-05-22",
          "110"
        ],
        [
          0.9049,
          110,
          null,
          "0.9049,2021-06-21",
          "110"
        ],
        [
          0.3779,
          110,
          null,
          "0.3779,2021-05-16",
          "110"
        ],
        [
          0.8738,
          220,
          null,
          "0.4369,2021-06-27",
          "110"
        ],
        [
          -0.8899,
          110,
          null,
          "-0.8899,2021-05-17",
          "110"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "150",
      "data": [
        [
          1.1726,
          300,
          null,
          "0.5863,2021-06-28",
          "150"
        ],
        [
          -3.058,
          600,
          null,
          "-0.7645,2021-06-02",
          "150"
        ],
        [
          0.5548,
          300,
          null,
          "0.2774,2021-05-17",
          "150"
        ],
        [
          -1.2346,
          300,
          null,
          "-0.6173,2021-06-28",
          "150"
        ],
        [
          -0.266,
          600,
          null,
          "-0.0665,2021-05-16",
          "150"
        ],
        [
          -0.4126,
          300,
          null,
          "-0.2063,2021-06-28",
          "150"
        ],
        [
          -2.3692,
          600,
          null,
          "-0.5923,2021-05-17",
          "150"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "100",
      "data": [
        [
          2.9245,
          500,
          null,
          "0.5849,2021-06-28",
          "100"
        ],
        [
          1.4635,
          500,
          null,
          "0.2927,2021-05-16",
          "100"
        ],
        [
          0,
          200,
          null,
          "(null),2021-04-04",
          "100"
        ],
        [
          0,
          300,
          null,
          "(null),2021-06-13",
          "100"
        ],
        [
          0.9657,
          100,
          null,
          "0.9657,2021-06-11",
          "100"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "159",
      "data": [
        [
          -1.3826,
          318,
          null,
          "-0.6913,2021-06-28",
          "159"
        ],
        [
          0.2324,
          318,
          null,
          "0.1162,2021-06-27",
          "159"
        ],
        [
          0.2484,
          477,
          null,
          "0.0828,2021-06-02",
          "159"
        ],
        [
          1.252,
          636,
          null,
          "0.313,2021-04-20",
          "159"
        ],
        [
          0.1025,
          159,
          null,
          "0.1025,2021-06-07",
          "159"
        ],
        [
          0.24630000000000002,
          477,
          null,
          "0.0821,2021-05-12",
          "159"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "22",
      "data": [
        [
          0.6908,
          22,
          null,
          "0.6908,2021-06-28",
          "22"
        ],
        [
          0,
          44,
          null,
          "(null),2021-04-10",
          "22"
        ],
        [
          -0.07250000000000001,
          110,
          null,
          "-0.0145,2021-06-26",
          "22"
        ],
        [
          -0.2906,
          22,
          null,
          "-0.2906,2021-06-26",
          "22"
        ],
        [
          1.4362,
          44,
          null,
          "0.7181,2021-06-26",
          "22"
        ],
        [
          1.8906,
          44,
          null,
          "0.9453,2021-06-21",
          "22"
        ],
        [
          -2.3663999999999996,
          66,
          null,
          "-0.7888,2021-05-22",
          "22"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "178",
      "data": [
        [
          -0.9164,
          178,
          null,
          "-0.9164,2021-06-28",
          "178"
        ],
        [
          1.5777,
          534,
          null,
          "0.5259,2021-05-17",
          "178"
        ],
        [
          -2.8986,
          534,
          null,
          "-0.9662,2021-06-26",
          "178"
        ],
        [
          1.4186,
          356,
          null,
          "0.7093,2021-06-26",
          "178"
        ],
        [
          1.594,
          712,
          null,
          "0.3985,2021-06-27",
          "178"
        ],
        [
          -0.6077,
          178,
          null,
          "-0.6077,2021-06-27",
          "178"
        ],
        [
          0,
          356,
          null,
          "(null),2021-06-04",
          "178"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "116",
      "data": [
        [
          0.8476,
          116,
          null,
          "0.8476,2021-06-28",
          "116"
        ],
        [
          1.9408,
          232,
          null,
          "0.9704,2021-06-21",
          "116"
        ],
        [
          0.1944,
          232,
          null,
          "0.0972,2021-06-28",
          "116"
        ],
        [
          -0.7295,
          580,
          null,
          "-0.1459,2021-06-07",
          "116"
        ],
        [
          0.7395,
          116,
          null,
          "0.7395,2021-04-20",
          "116"
        ],
        [
          1.4776,
          464,
          null,
          "0.3694,2021-05-09",
          "116"
        ],
        [
          -0.5559,
          348,
          null,
          "-0.1853,2021-04-01",
          "116"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "136",
      "data": [
        [
          0.1874,
          272,
          null,
          "0.0937,2021-06-28",
          "136"
        ],
        [
          0.2902,
          272,
          null,
          "0.1451,2021-06-28",
          "136"
        ],
        [
          -0.5236,
          272,
          null,
          "-0.2618,2021-06-07",
          "136"
        ],
        [
          0.1785,
          408,
          null,
          "0.0595,2021-05-22",
          "136"
        ],
        [
          -2.7024999999999997,
          680,
          null,
          "-0.5405,2021-06-21",
          "136"
        ],
        [
          0.0593,
          136,
          null,
          "0.0593,2021-06-13",
          "136"
        ],
        [
          -0.3549,
          136,
          null,
          "-0.3549,2021-06-16",
          "136"
        ],
        [
          1.0626,
          272,
          null,
          "0.5313,2021-05-17",
          "136"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "13",
      "data": [
        [
          -0.1612,
          26,
          null,
          "-0.0806,2021-06-28",
          "13"
        ],
        [
          -0.0731,
          13,
          null,
          "-0.0731,2021-05-17",
          "13"
        ],
        [
          0.8662,
          13,
          null,
          "0.8662,2021-04-04",
          "13"
        ],
        [
          2.3226,
          39,
          null,
          "0.7742,2021-06-07",
          "13"
        ],
        [
          -0.6236,
          26,
          null,
          "-0.3118,2021-05-16",
          "13"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "45",
      "data": [
        [
          -2.9318999999999997,
          135,
          null,
          "-0.9773,2021-05-14",
          "45"
        ],
        [
          -0.3224,
          180,
          null,
          "-0.0806,2021-06-21",
          "45"
        ],
        [
          1.7652,
          90,
          null,
          "0.8826,2021-06-28",
          "45"
        ],
        [
          -0.6683,
          45,
          null,
          "-0.6683,2021-05-21",
          "45"
        ],
        [
          0.0895,
          45,
          null,
          "0.0895,2021-04-04",
          "45"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "66",
      "data": [
        [
          -0.9292,
          264,
          null,
          "-0.2323,2021-05-14",
          "66"
        ],
        [
          0,
          198,
          null,
          "(null),2021-05-16",
          "66"
        ],
        [
          -0.3912,
          132,
          null,
          "-0.1956,2021-04-20",
          "66"
        ],
        [
          0.1016,
          66,
          null,
          "0.1016,2021-06-13",
          "66"
        ],
        [
          0.4575,
          198,
          null,
          "0.1525,2021-04-10",
          "66"
        ],
        [
          0,
          132,
          null,
          "(null),2021-04-01",
          "66"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "93",
      "data": [
        [
          -0.0756,
          279,
          null,
          "-0.0252,2021-05-14",
          "93"
        ],
        [
          -0.287,
          186,
          null,
          "-0.1435,2021-06-13",
          "93"
        ],
        [
          -0.8784,
          186,
          null,
          "-0.4392,2021-06-11",
          "93"
        ],
        [
          -0.6752,
          93,
          null,
          "-0.6752,2021-03-09",
          "93"
        ],
        [
          -1.1056,
          186,
          null,
          "-0.5528,2021-06-02",
          "93"
        ],
        [
          -0.63,
          558,
          null,
          "-0.105,2021-06-11",
          "93"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "130",
      "data": [
        [
          1.9816,
          260,
          null,
          "0.9908,2021-05-14",
          "130"
        ],
        [
          0,
          260,
          null,
          "(null),2021-05-04",
          "130"
        ],
        [
          -0.7446,
          130,
          null,
          "-0.7446,2021-06-21",
          "130"
        ],
        [
          -0.5138,
          130,
          null,
          "-0.5138,2021-05-16",
          "130"
        ],
        [
          -1.9956,
          260,
          null,
          "-0.9978,2021-06-11",
          "130"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "118",
      "data": [
        [
          0.38220000000000004,
          354,
          null,
          "0.1274,2021-05-14",
          "118"
        ],
        [
          -0.0288,
          236,
          null,
          "-0.0144,2021-06-21",
          "118"
        ],
        [
          0,
          354,
          null,
          "(null),2021-06-04",
          "118"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "177",
      "data": [
        [
          0,
          1239,
          null,
          "(null),2021-05-14",
          "177"
        ],
        [
          -2.3565,
          531,
          null,
          "-0.7855,2021-04-10",
          "177"
        ],
        [
          1.8638,
          354,
          null,
          "0.9319,2021-05-21",
          "177"
        ],
        [
          -1.015,
          354,
          null,
          "-0.5075,2021-06-01",
          "177"
        ],
        [
          0.9589,
          177,
          null,
          "0.9589,2021-06-01",
          "177"
        ],
        [
          0.1272,
          177,
          null,
          "0.1272,2021-06-01",
          "177"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "151",
      "data": [
        [
          -0.8312,
          151,
          null,
          "-0.8312,2021-05-14",
          "151"
        ],
        [
          -0.1243,
          151,
          null,
          "-0.1243,2021-06-21",
          "151"
        ],
        [
          -0.3104,
          151,
          null,
          "-0.3104,2021-06-04",
          "151"
        ],
        [
          0.2157,
          453,
          null,
          "0.0719,2021-05-21",
          "151"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "17",
      "data": [
        [
          2.2557,
          51,
          null,
          "0.7519,2021-05-14",
          "17"
        ],
        [
          0.7604,
          17,
          null,
          "0.7604,2021-06-21",
          "17"
        ],
        [
          -4.665,
          85,
          null,
          "-0.933,2021-04-21",
          "17"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "54",
      "data": [
        [
          -0.6546000000000001,
          162,
          null,
          "-0.2182,2021-05-14",
          "54"
        ],
        [
          0.218,
          108,
          null,
          "0.109,2021-04-17",
          "54"
        ],
        [
          -1.4184,
          108,
          null,
          "-0.7092,2021-05-22",
          "54"
        ],
        [
          -0.22169999999999998,
          162,
          null,
          "-0.0739,2021-06-13",
          "54"
        ],
        [
          1.8628,
          216,
          null,
          "0.4657,2021-06-04",
          "54"
        ],
        [
          -1.0378,
          108,
          null,
          "-0.5189,2021-05-14",
          "54"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "155",
      "data": [
        [
          0.8745,
          155,
          null,
          "0.8745,2021-05-14",
          "155"
        ],
        [
          0,
          155,
          null,
          "(null),2021-05-17",
          "155"
        ],
        [
          -2.9565,
          775,
          null,
          "-0.5913,2021-05-17",
          "155"
        ],
        [
          3.106,
          620,
          null,
          "0.7765,2021-06-07",
          "155"
        ],
        [
          -0.6428,
          310,
          null,
          "-0.3214,2021-06-27",
          "155"
        ],
        [
          -1.2654,
          310,
          null,
          "-0.6327,2021-05-17",
          "155"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "111",
      "data": [
        [
          -2.3157,
          333,
          null,
          "-0.7719,2021-06-07",
          "111"
        ],
        [
          0.7028,
          444,
          null,
          "0.1757,2021-06-21",
          "111"
        ],
        [
          -2.6586,
          333,
          null,
          "-0.8862,2021-05-04",
          "111"
        ],
        [
          0.5499,
          111,
          null,
          "0.5499,2021-06-27",
          "111"
        ],
        [
          -1.1188,
          222,
          null,
          "-0.5594,2021-06-28",
          "111"
        ],
        [
          0.8825,
          111,
          null,
          "0.8825,2021-06-28",
          "111"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "113",
      "data": [
        [
          1.4352,
          904,
          null,
          "0.1794,2021-06-07",
          "113"
        ],
        [
          0.8994,
          339,
          null,
          "0.2998,2021-06-07",
          "113"
        ],
        [
          0.4458,
          113,
          null,
          "0.4458,2021-06-28",
          "113"
        ],
        [
          0.8244,
          113,
          null,
          "0.8244,2021-06-07",
          "113"
        ],
        [
          0.0984,
          226,
          null,
          "0.0492,2021-06-21",
          "113"
        ],
        [
          -1.1928,
          452,
          null,
          "-0.2982,2021-05-16",
          "113"
        ],
        [
          1.3474,
          226,
          null,
          "0.6737,2021-04-17",
          "113"
        ],
        [
          -3.664,
          452,
          null,
          "-0.916,2021-06-02",
          "113"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "32",
      "data": [
        [
          2.376,
          192,
          null,
          "0.396,2021-06-07",
          "32"
        ],
        [
          1.9354,
          64,
          null,
          "0.9677,2021-06-07",
          "32"
        ],
        [
          -0.2118,
          96,
          null,
          "-0.0706,2021-06-02",
          "32"
        ],
        [
          1.7364000000000002,
          192,
          null,
          "0.2894,2021-06-04",
          "32"
        ],
        [
          0.7954,
          64,
          null,
          "0.3977,2021-05-21",
          "32"
        ],
        [
          -0.8825,
          32,
          null,
          "-0.8825,2021-05-21",
          "32"
        ],
        [
          -0.2313,
          32,
          null,
          "-0.2313,2021-05-17",
          "32"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "20",
      "data": [
        [
          0.68,
          80,
          null,
          "0.17,2021-06-07",
          "20"
        ],
        [
          1.3914,
          60,
          null,
          "0.4638,2021-06-26",
          "20"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "160",
      "data": [
        [
          0,
          320,
          null,
          "(null),2021-06-07",
          "160"
        ],
        [
          0.6567,
          160,
          null,
          "0.6567,2021-06-26",
          "160"
        ],
        [
          0.0092,
          320,
          null,
          "0.0046,2021-06-07",
          "160"
        ],
        [
          1.2254,
          320,
          null,
          "0.6127,2021-06-21",
          "160"
        ],
        [
          0.7758,
          160,
          null,
          "0.7758,2021-06-28",
          "160"
        ],
        [
          0,
          160,
          null,
          "(null),2021-06-02",
          "160"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "88",
      "data": [
        [
          -0.0147,
          88,
          null,
          "-0.0147,2021-06-07",
          "88"
        ],
        [
          2.7732,
          264,
          null,
          "0.9244,2021-06-13",
          "88"
        ],
        [
          1.2094,
          176,
          null,
          "0.6047,2021-05-12",
          "88"
        ],
        [
          -0.638,
          88,
          null,
          "-0.638,2021-04-17",
          "88"
        ],
        [
          2.7908,
          352,
          null,
          "0.6977,2021-06-13",
          "88"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "171",
      "data": [
        [
          0.8546,
          171,
          null,
          "0.8546,2021-06-07",
          "171"
        ],
        [
          0,
          171,
          null,
          "(null),2021-06-16",
          "171"
        ],
        [
          1.0664,
          684,
          null,
          "0.2666,2021-04-17",
          "171"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "39",
      "data": [
        [
          -0.6358,
          39,
          null,
          "-0.6358,2021-06-07",
          "39"
        ],
        [
          -2.51,
          156,
          null,
          "-0.6275,2021-05-16",
          "39"
        ],
        [
          -0.5053,
          39,
          null,
          "-0.5053,2021-04-17",
          "39"
        ],
        [
          2.355,
          117,
          null,
          "0.785,2021-04-04",
          "39"
        ],
        [
          2.3040000000000003,
          117,
          null,
          "0.768,2021-06-28",
          "39"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "16",
      "data": [
        [
          2.4804,
          48,
          null,
          "0.8268,2021-06-07",
          "16"
        ],
        [
          -1.5609,
          48,
          null,
          "-0.5203,2021-05-22",
          "16"
        ],
        [
          -2.418,
          48,
          null,
          "-0.806,2021-05-08",
          "16"
        ],
        [
          3.3608,
          64,
          null,
          "0.8402,2021-06-07",
          "16"
        ],
        [
          -0.8895,
          48,
          null,
          "-0.2965,2021-04-17",
          "16"
        ],
        [
          0.022,
          16,
          null,
          "0.022,2021-05-17",
          "16"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "94",
      "data": [
        [
          -2.6463,
          282,
          null,
          "-0.8821,2021-06-07",
          "94"
        ],
        [
          -1.858,
          188,
          null,
          "-0.929,2021-06-07",
          "94"
        ],
        [
          -0.2081,
          94,
          null,
          "-0.2081,2021-05-12",
          "94"
        ],
        [
          -0.6623,
          94,
          null,
          "-0.6623,2021-05-14",
          "94"
        ],
        [
          3.128,
          376,
          null,
          "0.782,2021-06-21",
          "94"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "163",
      "data": [
        [
          0.7732,
          326,
          null,
          "0.3866,2021-06-07",
          "163"
        ],
        [
          -0.4714,
          163,
          null,
          "-0.4714,2021-05-17",
          "163"
        ],
        [
          -0.0338,
          326,
          null,
          "-0.0169,2021-04-01",
          "163"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "44",
      "data": [
        [
          0.5924,
          88,
          null,
          "0.2962,2021-06-07",
          "44"
        ],
        [
          3.582,
          176,
          null,
          "0.8955,2021-05-04",
          "44"
        ],
        [
          -0.279,
          88,
          null,
          "-0.1395,2021-06-26",
          "44"
        ],
        [
          -1.5228,
          88,
          null,
          "-0.7614,2021-06-21",
          "44"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "117",
      "data": [
        [
          -0.7126,
          234,
          null,
          "-0.3563,2021-06-07",
          "117"
        ],
        [
          -0.8602,
          234,
          null,
          "-0.4301,2021-06-27",
          "117"
        ],
        [
          -0.0507,
          117,
          null,
          "-0.0507,2021-06-28",
          "117"
        ],
        [
          0.4764,
          117,
          null,
          "0.4764,2021-06-16",
          "117"
        ],
        [
          1.843,
          234,
          null,
          "0.9215,2021-05-16",
          "117"
        ],
        [
          -0.577,
          117,
          null,
          "-0.577,2021-04-17",
          "117"
        ],
        [
          -0.333,
          117,
          null,
          "-0.333,2021-06-27",
          "117"
        ],
        [
          1.2668,
          234,
          null,
          "0.6334,2021-06-16",
          "117"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "186",
      "data": [
        [
          0.5794,
          372,
          null,
          "0.2897,2021-06-21",
          "186"
        ],
        [
          0.6945,
          186,
          null,
          "0.6945,2021-06-27",
          "186"
        ],
        [
          -0.9175,
          186,
          null,
          "-0.9175,2021-06-13",
          "186"
        ],
        [
          -0.498,
          744,
          null,
          "-0.1245,2021-06-21",
          "186"
        ],
        [
          -0.782,
          186,
          null,
          "-0.782,2021-06-02",
          "186"
        ],
        [
          1.6824,
          558,
          null,
          "0.5608,2021-05-17",
          "186"
        ],
        [
          1.7506,
          372,
          null,
          "0.8753,2021-05-21",
          "186"
        ],
        [
          0,
          186,
          null,
          "(null),2021-04-01",
          "186"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "79",
      "data": [
        [
          0.8932,
          158,
          null,
          "0.4466,2021-06-21",
          "79"
        ],
        [
          2.0712,
          316,
          null,
          "0.5178,2021-04-17",
          "79"
        ],
        [
          -0.8337,
          79,
          null,
          "-0.8337,2021-06-02",
          "79"
        ],
        [
          -0.0534,
          237,
          null,
          "-0.0178,2021-05-17",
          "79"
        ],
        [
          1.8032,
          158,
          null,
          "0.9016,2021-06-11",
          "79"
        ],
        [
          -0.321,
          158,
          null,
          "-0.1605,2021-05-14",
          "79"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "83",
      "data": [
        [
          -1.2362,
          166,
          null,
          "-0.6181,2021-06-21",
          "83"
        ],
        [
          1.0942,
          166,
          null,
          "0.5471,2021-06-21",
          "83"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "75",
      "data": [
        [
          2.7510000000000003,
          225,
          null,
          "0.917,2021-05-16",
          "75"
        ],
        [
          1.6544,
          300,
          null,
          "0.4136,2021-05-09",
          "75"
        ],
        [
          -0.4291,
          75,
          null,
          "-0.4291,2021-03-09",
          "75"
        ],
        [
          -0.7202,
          75,
          null,
          "-0.7202,2021-06-04",
          "75"
        ],
        [
          -1.7922000000000002,
          225,
          null,
          "-0.5974,2021-05-17",
          "75"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "102",
      "data": [
        [
          0.8853,
          306,
          null,
          "0.2951,2021-05-16",
          "102"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "179",
      "data": [
        [
          0.8648,
          179,
          null,
          "0.8648,2021-05-16",
          "179"
        ],
        [
          0.3524,
          179,
          null,
          "0.3524,2021-05-16",
          "179"
        ],
        [
          -0.215,
          179,
          null,
          "-0.215,2021-05-16",
          "179"
        ],
        [
          -0.6956,
          179,
          null,
          "-0.6956,2021-05-14",
          "179"
        ],
        [
          1.6416000000000002,
          1432,
          null,
          "0.2052,2021-04-20",
          "179"
        ],
        [
          0.4814,
          358,
          null,
          "0.2407,2021-04-17",
          "179"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "33",
      "data": [
        [
          -2.985,
          99,
          null,
          "-0.995,2021-05-16",
          "33"
        ],
        [
          0,
          66,
          null,
          "(null),2021-06-27",
          "33"
        ],
        [
          -2.1204,
          132,
          null,
          "-0.5301,2021-05-09",
          "33"
        ],
        [
          -1.9889999999999999,
          165,
          null,
          "-0.3978,2021-06-07",
          "33"
        ],
        [
          1.8732,
          66,
          null,
          "0.9366,2021-06-02",
          "33"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "4",
      "data": [
        [
          -1.0113,
          12,
          null,
          "-0.3371,2021-05-16",
          "4"
        ],
        [
          -0.469,
          4,
          null,
          "-0.469,2021-05-09",
          "4"
        ],
        [
          -3.6784,
          16,
          null,
          "-0.9196,2021-05-21",
          "4"
        ],
        [
          -1.9973999999999998,
          12,
          null,
          "-0.6658,2021-04-01",
          "4"
        ],
        [
          -3.482,
          20,
          null,
          "-0.6964,2021-04-20",
          "4"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "146",
      "data": [
        [
          -0.9289,
          146,
          null,
          "-0.9289,2021-05-16",
          "146"
        ],
        [
          -0.7926,
          146,
          null,
          "-0.7926,2021-05-16",
          "146"
        ],
        [
          1.8044,
          292,
          null,
          "0.9022,2021-05-04",
          "146"
        ],
        [
          -1.5903,
          438,
          null,
          "-0.5301,2021-06-27",
          "146"
        ],
        [
          -1.3252,
          292,
          null,
          "-0.6626,2021-05-22",
          "146"
        ],
        [
          0.1652,
          584,
          null,
          "0.0413,2021-05-22",
          "146"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "152",
      "data": [
        [
          1.2033,
          456,
          null,
          "0.4011,2021-05-16",
          "152"
        ],
        [
          0.2862,
          152,
          null,
          "0.2862,2021-03-09",
          "152"
        ],
        [
          0.6276,
          304,
          null,
          "0.3138,2021-06-28",
          "152"
        ],
        [
          4.456900000000001,
          1064,
          null,
          "0.6367,2021-06-02",
          "152"
        ],
        [
          -0.4395,
          456,
          null,
          "-0.1465,2021-06-26",
          "152"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "131",
      "data": [
        [
          0,
          131,
          null,
          "(null),2021-05-16",
          "131"
        ],
        [
          -1.0116,
          393,
          null,
          "-0.3372,2021-04-20",
          "131"
        ],
        [
          -2.7603,
          393,
          null,
          "-0.9201,2021-06-21",
          "131"
        ],
        [
          0.2456,
          262,
          null,
          "0.1228,2021-06-28",
          "131"
        ],
        [
          0.9846,
          262,
          null,
          "0.4923,2021-06-07",
          "131"
        ],
        [
          -2.0136000000000003,
          393,
          null,
          "-0.6712,2021-06-11",
          "131"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "87",
      "data": [
        [
          0,
          174,
          null,
          "(null),2021-05-16",
          "87"
        ],
        [
          -4.7528,
          696,
          null,
          "-0.5941,2021-06-16",
          "87"
        ],
        [
          2.0406,
          261,
          null,
          "0.6802,2021-03-09",
          "87"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "65",
      "data": [
        [
          -0.7272,
          130,
          null,
          "-0.3636,2021-05-16",
          "65"
        ],
        [
          2.894,
          260,
          null,
          "0.7235,2021-05-17",
          "65"
        ],
        [
          -3.3516,
          260,
          null,
          "-0.8379,2021-03-09",
          "65"
        ],
        [
          -0.0706,
          65,
          null,
          "-0.0706,2021-05-22",
          "65"
        ],
        [
          0,
          130,
          null,
          "(null),2021-06-26",
          "65"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "166",
      "data": [
        [
          0,
          332,
          null,
          "(null),2021-04-20",
          "166"
        ],
        [
          -0.4176,
          166,
          null,
          "-0.4176,2021-05-08",
          "166"
        ],
        [
          0.8235,
          166,
          null,
          "0.8235,2021-04-01",
          "166"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "19",
      "data": [
        [
          2.3576,
          76,
          null,
          "0.5894,2021-04-20",
          "19"
        ],
        [
          0,
          114,
          null,
          "(null),2021-06-13",
          "19"
        ],
        [
          0.1534,
          38,
          null,
          "0.0767,2021-06-02",
          "19"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "50",
      "data": [
        [
          -1.7408,
          200,
          null,
          "-0.4352,2021-04-20",
          "50"
        ],
        [
          -1.4832,
          100,
          null,
          "-0.7416,2021-06-07",
          "50"
        ],
        [
          -1.0496,
          200,
          null,
          "-0.2624,2021-04-10",
          "50"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "184",
      "data": [
        [
          -0.87,
          368,
          null,
          "-0.435,2021-04-20",
          "184"
        ],
        [
          0.6598,
          184,
          null,
          "0.6598,2021-05-04",
          "184"
        ],
        [
          -5.239199999999999,
          1104,
          null,
          "-0.8732,2021-06-26",
          "184"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "127",
      "data": [
        [
          0,
          381,
          null,
          "(null),2021-04-20",
          "127"
        ],
        [
          0,
          254,
          null,
          "(null),2021-04-01",
          "127"
        ],
        [
          2.3706,
          381,
          null,
          "0.7902,2021-06-01",
          "127"
        ],
        [
          0.2842,
          254,
          null,
          "0.1421,2021-04-21",
          "127"
        ],
        [
          0.183,
          762,
          null,
          "0.0305,2021-05-16",
          "127"
        ],
        [
          -2.3787000000000003,
          381,
          null,
          "-0.7929,2021-06-02",
          "127"
        ],
        [
          0.4293,
          381,
          null,
          "0.1431,2021-05-17",
          "127"
        ],
        [
          1.9367999999999999,
          381,
          null,
          "0.6456,2021-05-17",
          "127"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "98",
      "data": [
        [
          3.716,
          392,
          null,
          "0.929,2021-04-20",
          "98"
        ],
        [
          4.948799999999999,
          1176,
          null,
          "0.4124,2021-06-13",
          "98"
        ],
        [
          0.2282,
          98,
          null,
          "0.2282,2021-06-16",
          "98"
        ],
        [
          0.7958,
          196,
          null,
          "0.3979,2021-06-04",
          "98"
        ],
        [
          -0.9066,
          196,
          null,
          "-0.4533,2021-06-26",
          "98"
        ],
        [
          0.976,
          196,
          null,
          "0.488,2021-06-21",
          "98"
        ],
        [
          -0.0847,
          98,
          null,
          "-0.0847,2021-04-20",
          "98"
        ],
        [
          0.1101,
          294,
          null,
          "0.0367,2021-06-04",
          "98"
        ],
        [
          0,
          98,
          null,
          "(null),2021-06-11",
          "98"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "62",
      "data": [
        [
          -0.243,
          62,
          null,
          "-0.243,2021-04-20",
          "62"
        ],
        [
          0.6657,
          186,
          null,
          "0.2219,2021-04-17",
          "62"
        ],
        [
          -1.2822,
          124,
          null,
          "-0.6411,2021-06-07",
          "62"
        ],
        [
          -1.5267,
          186,
          null,
          "-0.5089,2021-06-07",
          "62"
        ],
        [
          -1.4332,
          124,
          null,
          "-0.7166,2021-06-26",
          "62"
        ],
        [
          2.2098,
          186,
          null,
          "0.7366,2021-06-11",
          "62"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "68",
      "data": [
        [
          1.5963,
          204,
          null,
          "0.5321,2021-04-20",
          "68"
        ],
        [
          0.028,
          272,
          null,
          "0.007,2021-04-17",
          "68"
        ],
        [
          1.0832,
          136,
          null,
          "0.5416,2021-06-16",
          "68"
        ],
        [
          1.4088,
          136,
          null,
          "0.7044,2021-06-02",
          "68"
        ],
        [
          -0.22619999999999998,
          204,
          null,
          "-0.0754,2021-05-17",
          "68"
        ],
        [
          0,
          68,
          null,
          "(null),2021-05-17",
          "68"
        ],
        [
          -1.3908,
          136,
          null,
          "-0.6954,2021-05-08",
          "68"
        ],
        [
          -0.7502,
          68,
          null,
          "-0.7502,2021-05-08",
          "68"
        ],
        [
          -3.6744,
          272,
          null,
          "-0.9186,2021-06-28",
          "68"
        ],
        [
          -0.3205,
          68,
          null,
          "-0.3205,2021-05-12",
          "68"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "143",
      "data": [
        [
          -0.6746,
          143,
          null,
          "-0.6746,2021-04-20",
          "143"
        ],
        [
          -3.6292,
          572,
          null,
          "-0.9073,2021-03-09",
          "143"
        ],
        [
          0.777,
          143,
          null,
          "0.777,2021-06-01",
          "143"
        ],
        [
          0.2754,
          286,
          null,
          "0.1377,2021-04-01",
          "143"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "1",
      "data": [
        [
          0.8185,
          1,
          null,
          "0.8185,2021-04-20",
          "1"
        ],
        [
          3.372,
          4,
          null,
          "0.843,2021-06-04",
          "1"
        ],
        [
          1.7193,
          3,
          null,
          "0.5731,2021-04-10",
          "1"
        ],
        [
          0.3986,
          1,
          null,
          "0.3986,2021-06-07",
          "1"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "119",
      "data": [
        [
          -3.9768,
          476,
          null,
          "-0.9942,2021-04-20",
          "119"
        ],
        [
          0,
          119,
          null,
          "(null),2021-05-22",
          "119"
        ],
        [
          -0.4536,
          476,
          null,
          "-0.1134,2021-05-09",
          "119"
        ],
        [
          -0.5006,
          119,
          null,
          "-0.5006,2021-06-26",
          "119"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "197",
      "data": [
        [
          0.6095,
          197,
          null,
          "0.6095,2021-04-20",
          "197"
        ],
        [
          -1.2392,
          788,
          null,
          "-0.3098,2021-06-07",
          "197"
        ],
        [
          0,
          394,
          null,
          "(null),2021-06-07",
          "197"
        ],
        [
          1.7446,
          394,
          null,
          "0.8723,2021-05-12",
          "197"
        ],
        [
          0.025,
          394,
          null,
          "0.0125,2021-04-01",
          "197"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "140",
      "data": [
        [
          0.4783,
          140,
          null,
          "0.4783,2021-04-20",
          "140"
        ],
        [
          -0.1711,
          140,
          null,
          "-0.1711,2021-04-21",
          "140"
        ],
        [
          -1.4708,
          280,
          null,
          "-0.7354,2021-06-07",
          "140"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "103",
      "data": [
        [
          0.317,
          103,
          null,
          "0.317,2021-04-20",
          "103"
        ],
        [
          -0.8308,
          206,
          null,
          "-0.4154,2021-04-17",
          "103"
        ],
        [
          -0.8469,
          309,
          null,
          "-0.2823,2021-06-11",
          "103"
        ],
        [
          -0.6192,
          412,
          null,
          "-0.1548,2021-06-01",
          "103"
        ],
        [
          -1.3594,
          206,
          null,
          "-0.6797,2021-04-04",
          "103"
        ],
        [
          1.4658,
          309,
          null,
          "0.4886,2021-04-20",
          "103"
        ],
        [
          1.4294,
          206,
          null,
          "0.7147,2021-05-09",
          "103"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "78",
      "data": [
        [
          -0.8599,
          78,
          null,
          "-0.8599,2021-04-20",
          "78"
        ],
        [
          0,
          156,
          null,
          "(null),2021-05-17",
          "78"
        ],
        [
          -0.0907,
          78,
          null,
          "-0.0907,2021-05-14",
          "78"
        ],
        [
          0.608,
          78,
          null,
          "0.608,2021-06-07",
          "78"
        ],
        [
          -0.6930000000000001,
          468,
          null,
          "-0.1155,2021-06-11",
          "78"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "169",
      "data": [
        [
          -2.602,
          676,
          null,
          "-0.6505,2021-05-04",
          "169"
        ],
        [
          1.9857,
          507,
          null,
          "0.6619,2021-05-09",
          "169"
        ],
        [
          -0.4356,
          169,
          null,
          "-0.4356,2021-04-10",
          "169"
        ],
        [
          -0.0944,
          169,
          null,
          "-0.0944,2021-05-17",
          "169"
        ],
        [
          0,
          507,
          null,
          "(null),2021-06-26",
          "169"
        ],
        [
          -1.755,
          338,
          null,
          "-0.8775,2021-05-08",
          "169"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "200",
      "data": [
        [
          1.5272,
          400,
          null,
          "0.7636,2021-05-04",
          "200"
        ],
        [
          -1.5392,
          400,
          null,
          "-0.7696,2021-06-02",
          "200"
        ],
        [
          1.3958,
          400,
          null,
          "0.6979,2021-03-09",
          "200"
        ],
        [
          -0.8004,
          200,
          null,
          "-0.8004,2021-06-21",
          "200"
        ],
        [
          2.9939999999999998,
          600,
          null,
          "0.998,2021-04-17",
          "200"
        ],
        [
          1.5074999999999998,
          600,
          null,
          "0.5025,2021-06-13",
          "200"
        ],
        [
          -0.8788,
          400,
          null,
          "-0.4394,2021-06-16",
          "200"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "99",
      "data": [
        [
          -1.0778,
          198,
          null,
          "-0.5389,2021-05-04",
          "99"
        ],
        [
          -0.757,
          99,
          null,
          "-0.757,2021-06-28",
          "99"
        ],
        [
          3.1830000000000003,
          495,
          null,
          "0.6366,2021-06-21",
          "99"
        ],
        [
          -0.7435,
          495,
          null,
          "-0.1487,2021-05-22",
          "99"
        ],
        [
          0.3406,
          99,
          null,
          "0.3406,2021-06-28",
          "99"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "9",
      "data": [
        [
          -2.4924,
          36,
          null,
          "-0.6231,2021-05-04",
          "9"
        ],
        [
          0.9878,
          18,
          null,
          "0.4939,2021-06-04",
          "9"
        ],
        [
          -0.2079,
          9,
          null,
          "-0.2079,2021-04-20",
          "9"
        ],
        [
          0,
          18,
          null,
          "(null),2021-06-16",
          "9"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "59",
      "data": [
        [
          -1.6877999999999997,
          354,
          null,
          "-0.2813,2021-05-04",
          "59"
        ],
        [
          -0.5328,
          59,
          null,
          "-0.5328,2021-04-17",
          "59"
        ],
        [
          -3.2544,
          236,
          null,
          "-0.8136,2021-06-26",
          "59"
        ],
        [
          0.41309999999999997,
          177,
          null,
          "0.1377,2021-03-09",
          "59"
        ],
        [
          0.213,
          59,
          null,
          "0.213,2021-06-21",
          "59"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "123",
      "data": [
        [
          0.1214,
          123,
          null,
          "0.1214,2021-05-04",
          "123"
        ],
        [
          0.3794,
          246,
          null,
          "0.1897,2021-06-16",
          "123"
        ],
        [
          -0.9388,
          123,
          null,
          "-0.9388,2021-05-16",
          "123"
        ],
        [
          0.0678,
          246,
          null,
          "0.0339,2021-06-28",
          "123"
        ],
        [
          0,
          123,
          null,
          "(null),2021-06-16",
          "123"
        ],
        [
          0.2049,
          369,
          null,
          "0.0683,2021-06-26",
          "123"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "170",
      "data": [
        [
          4.812,
          1360,
          null,
          "0.6015,2021-04-17",
          "170"
        ],
        [
          1.4862,
          340,
          null,
          "0.7431,2021-05-17",
          "170"
        ],
        [
          -0.199,
          340,
          null,
          "-0.0995,2021-06-01",
          "170"
        ],
        [
          0.2245,
          170,
          null,
          "0.2245,2021-06-02",
          "170"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "51",
      "data": [
        [
          0.9585,
          153,
          null,
          "0.3195,2021-04-17",
          "51"
        ],
        [
          -0.2992,
          51,
          null,
          "-0.2992,2021-04-21",
          "51"
        ],
        [
          0.2139,
          51,
          null,
          "0.2139,2021-06-21",
          "51"
        ],
        [
          -3.7348,
          204,
          null,
          "-0.9337,2021-04-20",
          "51"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "11",
      "data": [
        [
          1.0944,
          44,
          null,
          "0.2736,2021-04-17",
          "11"
        ],
        [
          0.1456,
          44,
          null,
          "0.0364,2021-06-02",
          "11"
        ],
        [
          -0.186,
          44,
          null,
          "-0.0465,2021-06-27",
          "11"
        ],
        [
          1.1122,
          22,
          null,
          "0.5561,2021-05-17",
          "11"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "176",
      "data": [
        [
          0,
          528,
          null,
          "(null),2021-04-17",
          "176"
        ],
        [
          -0.7376,
          352,
          null,
          "-0.3688,2021-06-28",
          "176"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "199",
      "data": [
        [
          0.2467,
          199,
          null,
          "0.2467,2021-04-17",
          "199"
        ],
        [
          -1.5656,
          398,
          null,
          "-0.7828,2021-05-09",
          "199"
        ],
        [
          -2.6985,
          597,
          null,
          "-0.8995,2021-05-12",
          "199"
        ],
        [
          2.5293,
          597,
          null,
          "0.8431,2021-04-04",
          "199"
        ],
        [
          -2.5614,
          597,
          null,
          "-0.8538,2021-06-28",
          "199"
        ],
        [
          1.3618,
          398,
          null,
          "0.6809,2021-05-04",
          "199"
        ],
        [
          -0.6906,
          398,
          null,
          "-0.3453,2021-06-27",
          "199"
        ],
        [
          -0.04,
          398,
          null,
          "-0.02,2021-06-27",
          "199"
        ],
        [
          -0.5966,
          199,
          null,
          "-0.5966,2021-05-22",
          "199"
        ],
        [
          -2.4486,
          597,
          null,
          "-0.8162,2021-06-11",
          "199"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "82",
      "data": [
        [
          2.1915,
          246,
          null,
          "0.7305,2021-06-27",
          "82"
        ],
        [
          0,
          246,
          null,
          "(null),2021-06-27",
          "82"
        ],
        [
          -3.9496,
          328,
          null,
          "-0.9874,2021-05-22",
          "82"
        ],
        [
          0.8283,
          246,
          null,
          "0.2761,2021-05-22",
          "82"
        ],
        [
          -1.2322,
          164,
          null,
          "-0.6161,2021-06-02",
          "82"
        ],
        [
          1.8992,
          164,
          null,
          "0.9496,2021-06-26",
          "82"
        ],
        [
          1.8816,
          164,
          null,
          "0.9408,2021-05-16",
          "82"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "167",
      "data": [
        [
          0,
          334,
          null,
          "(null),2021-06-27",
          "167"
        ],
        [
          -2.1572,
          668,
          null,
          "-0.5393,2021-05-09",
          "167"
        ],
        [
          -1.3074,
          334,
          null,
          "-0.6537,2021-06-16",
          "167"
        ],
        [
          -0.5999,
          167,
          null,
          "-0.5999,2021-06-07",
          "167"
        ],
        [
          -2.2437,
          501,
          null,
          "-0.7479,2021-05-22",
          "167"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "128",
      "data": [
        [
          0.5765,
          128,
          null,
          "0.5765,2021-06-27",
          "128"
        ],
        [
          0.9636,
          128,
          null,
          "0.9636,2021-04-10",
          "128"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "191",
      "data": [
        [
          0,
          191,
          null,
          "(null),2021-06-27",
          "191"
        ],
        [
          5.6077,
          1337,
          null,
          "0.8011,2021-05-09",
          "191"
        ],
        [
          0,
          764,
          null,
          "(null),2021-06-26",
          "191"
        ],
        [
          -0.9904,
          191,
          null,
          "-0.9904,2021-06-21",
          "191"
        ],
        [
          -0.7598,
          382,
          null,
          "-0.3799,2021-04-17",
          "191"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "46",
      "data": [
        [
          3.6876,
          184,
          null,
          "0.9219,2021-06-27",
          "46"
        ],
        [
          0,
          138,
          null,
          "(null),2021-05-17",
          "46"
        ],
        [
          0.5239,
          46,
          null,
          "0.5239,2021-06-26",
          "46"
        ],
        [
          1.26,
          92,
          null,
          "0.63,2021-05-21",
          "46"
        ],
        [
          3.91,
          184,
          null,
          "0.9775,2021-06-13",
          "46"
        ],
        [
          -2.4445,
          230,
          null,
          "-0.4889,2021-06-11",
          "46"
        ],
        [
          -0.9971,
          46,
          null,
          "-0.9971,2021-06-11",
          "46"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "107",
      "data": [
        [
          0,
          321,
          null,
          "(null),2021-06-27",
          "107"
        ],
        [
          1.8056,
          214,
          null,
          "0.9028,2021-05-17",
          "107"
        ],
        [
          0.0316,
          214,
          null,
          "0.0158,2021-05-12",
          "107"
        ],
        [
          -2.6508,
          428,
          null,
          "-0.6627,2021-03-09",
          "107"
        ],
        [
          -0.69,
          214,
          null,
          "-0.345,2021-06-21",
          "107"
        ],
        [
          -0.12240000000000001,
          321,
          null,
          "-0.0408,2021-06-13",
          "107"
        ],
        [
          -0.6892,
          428,
          null,
          "-0.1723,2021-05-17",
          "107"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "34",
      "data": [
        [
          -1.6222,
          68,
          null,
          "-0.8111,2021-06-27",
          "34"
        ],
        [
          -0.4462,
          68,
          null,
          "-0.2231,2021-06-13",
          "34"
        ],
        [
          1.7996,
          136,
          null,
          "0.4499,2021-04-20",
          "34"
        ],
        [
          0,
          102,
          null,
          "(null),2021-05-04",
          "34"
        ],
        [
          0.3096,
          68,
          null,
          "0.1548,2021-05-09",
          "34"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "121",
      "data": [
        [
          2.3510999999999997,
          363,
          null,
          "0.7837,2021-06-27",
          "121"
        ],
        [
          -0.9064,
          242,
          null,
          "-0.4532,2021-06-02",
          "121"
        ],
        [
          0,
          242,
          null,
          "(null),2021-05-21",
          "121"
        ],
        [
          -0.2757,
          121,
          null,
          "-0.2757,2021-05-09",
          "121"
        ],
        [
          -1.3374,
          363,
          null,
          "-0.4458,2021-05-12",
          "121"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "190",
      "data": [
        [
          -1.6862,
          380,
          null,
          "-0.8431,2021-06-27",
          "190"
        ],
        [
          0.0172,
          760,
          null,
          "0.0043,2021-05-09",
          "190"
        ],
        [
          -0.4348,
          380,
          null,
          "-0.2174,2021-06-27",
          "190"
        ],
        [
          0.0154,
          380,
          null,
          "0.0077,2021-05-09",
          "190"
        ],
        [
          1.6128,
          570,
          null,
          "0.5376,2021-04-01",
          "190"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "37",
      "data": [
        [
          2.9823,
          111,
          null,
          "0.9941,2021-06-27",
          "37"
        ],
        [
          -0.9448,
          37,
          null,
          "-0.9448,2021-06-21",
          "37"
        ],
        [
          -1.0809,
          111,
          null,
          "-0.3603,2021-06-27",
          "37"
        ],
        [
          2.1888,
          222,
          null,
          "0.3648,2021-06-16",
          "37"
        ],
        [
          0,
          37,
          null,
          "(null),2021-05-21",
          "37"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "153",
      "data": [
        [
          3.9696,
          918,
          null,
          "0.6616,2021-05-22",
          "153"
        ],
        [
          0.1249,
          153,
          null,
          "0.1249,2021-05-09",
          "153"
        ],
        [
          -0.3576,
          918,
          null,
          "-0.0596,2021-06-27",
          "153"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "147",
      "data": [
        [
          0.152,
          588,
          null,
          "0.038,2021-05-22",
          "147"
        ],
        [
          1.3402,
          294,
          null,
          "0.6701,2021-05-09",
          "147"
        ],
        [
          2.949,
          441,
          null,
          "0.983,2021-06-01",
          "147"
        ],
        [
          -0.3708,
          294,
          null,
          "-0.1854,2021-06-16",
          "147"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "5",
      "data": [
        [
          -4.4502,
          30,
          null,
          "-0.7417,2021-05-22",
          "5"
        ],
        [
          -2.376,
          20,
          null,
          "-0.594,2021-06-21",
          "5"
        ],
        [
          -0.2193,
          5,
          null,
          "-0.2193,2021-04-17",
          "5"
        ],
        [
          0.0759,
          15,
          null,
          "0.0253,2021-04-01",
          "5"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "185",
      "data": [
        [
          -1.9416,
          555,
          null,
          "-0.6472,2021-05-22",
          "185"
        ],
        [
          -0.5778,
          185,
          null,
          "-0.5778,2021-05-22",
          "185"
        ],
        [
          0,
          185,
          null,
          "(null),2021-05-08",
          "185"
        ],
        [
          0.3588,
          370,
          null,
          "0.1794,2021-03-09",
          "185"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "38",
      "data": [
        [
          -4.1545,
          190,
          null,
          "-0.8309,2021-05-22",
          "38"
        ],
        [
          -0.3449,
          38,
          null,
          "-0.3449,2021-05-21",
          "38"
        ],
        [
          -0.5727,
          38,
          null,
          "-0.5727,2021-05-22",
          "38"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "120",
      "data": [
        [
          0.4311,
          360,
          null,
          "0.1437,2021-05-22",
          "120"
        ],
        [
          -0.4574,
          240,
          null,
          "-0.2287,2021-06-13",
          "120"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "52",
      "data": [
        [
          -1.3062,
          104,
          null,
          "-0.6531,2021-05-09",
          "52"
        ],
        [
          -0.2102,
          52,
          null,
          "-0.2102,2021-06-13",
          "52"
        ],
        [
          0.1575,
          260,
          null,
          "0.0315,2021-06-28",
          "52"
        ],
        [
          -0.4588,
          104,
          null,
          "-0.2294,2021-06-21",
          "52"
        ],
        [
          1.9146,
          156,
          null,
          "0.6382,2021-05-17",
          "52"
        ],
        [
          -1.8072,
          208,
          null,
          "-0.4518,2021-05-21",
          "52"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "148",
      "data": [
        [
          1.0464,
          592,
          null,
          "0.2616,2021-05-09",
          "148"
        ],
        [
          -0.6394,
          148,
          null,
          "-0.6394,2021-06-28",
          "148"
        ],
        [
          -0.4531,
          148,
          null,
          "-0.4531,2021-05-17",
          "148"
        ],
        [
          0.5991,
          148,
          null,
          "0.5991,2021-06-26",
          "148"
        ],
        [
          0,
          148,
          null,
          "(null),2021-06-07",
          "148"
        ],
        [
          -0.2612,
          148,
          null,
          "-0.2612,2021-05-22",
          "148"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "174",
      "data": [
        [
          2.9574,
          522,
          null,
          "0.9858,2021-05-09",
          "174"
        ],
        [
          3.9952,
          696,
          null,
          "0.9988,2021-06-13",
          "174"
        ],
        [
          -1.9026,
          348,
          null,
          "-0.9513,2021-04-01",
          "174"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "194",
      "data": [
        [
          -0.5262,
          194,
          null,
          "-0.5262,2021-05-09",
          "194"
        ],
        [
          0,
          388,
          null,
          "(null),2021-06-11",
          "194"
        ],
        [
          0,
          582,
          null,
          "(null),2021-05-22",
          "194"
        ],
        [
          2.4945,
          582,
          null,
          "0.8315,2021-06-02",
          "194"
        ],
        [
          -1.9034,
          388,
          null,
          "-0.9517,2021-05-21",
          "194"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "96",
      "data": [
        [
          -0.4744,
          192,
          null,
          "-0.2372,2021-05-09",
          "96"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "41",
      "data": [
        [
          0.5703,
          41,
          null,
          "0.5703,2021-05-09",
          "41"
        ],
        [
          -1.674,
          82,
          null,
          "-0.837,2021-04-01",
          "41"
        ],
        [
          -5.3052,
          246,
          null,
          "-0.8842,2021-06-28",
          "41"
        ],
        [
          -0.8021,
          41,
          null,
          "-0.8021,2021-05-14",
          "41"
        ],
        [
          -1.6074000000000002,
          123,
          null,
          "-0.5358,2021-04-17",
          "41"
        ],
        [
          -1.1964,
          164,
          null,
          "-0.2991,2021-04-10",
          "41"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "40",
      "data": [
        [
          -0.1949,
          40,
          null,
          "-0.1949,2021-05-09",
          "40"
        ],
        [
          0.0828,
          80,
          null,
          "0.0414,2021-06-27",
          "40"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "161",
      "data": [
        [
          -0.7854,
          161,
          null,
          "-0.7854,2021-05-09",
          "161"
        ],
        [
          2.0256,
          644,
          null,
          "0.5064,2021-06-16",
          "161"
        ],
        [
          -2.3196,
          483,
          null,
          "-0.7732,2021-06-11",
          "161"
        ],
        [
          -0.7146,
          483,
          null,
          "-0.2382,2021-06-01",
          "161"
        ],
        [
          0.8496,
          322,
          null,
          "0.4248,2021-06-01",
          "161"
        ],
        [
          -1.614,
          644,
          null,
          "-0.4035,2021-05-14",
          "161"
        ],
        [
          0,
          322,
          null,
          "(null),2021-05-17",
          "161"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "15",
      "data": [
        [
          -0.723,
          30,
          null,
          "-0.3615,2021-06-13",
          "15"
        ],
        [
          0.182,
          30,
          null,
          "0.091,2021-03-09",
          "15"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "145",
      "data": [
        [
          -0.9168,
          580,
          null,
          "-0.2292,2021-06-13",
          "145"
        ],
        [
          1.7196,
          290,
          null,
          "0.8598,2021-06-16",
          "145"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "133",
      "data": [
        [
          0,
          532,
          null,
          "(null),2021-06-13",
          "133"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "81",
      "data": [
        [
          0.9862,
          81,
          null,
          "0.9862,2021-06-13",
          "81"
        ],
        [
          -2.7126,
          243,
          null,
          "-0.9042,2021-06-16",
          "81"
        ],
        [
          -0.7748,
          324,
          null,
          "-0.1937,2021-04-20",
          "81"
        ],
        [
          -0.5793,
          81,
          null,
          "-0.5793,2021-06-13",
          "81"
        ],
        [
          -0.2289,
          81,
          null,
          "-0.2289,2021-06-02",
          "81"
        ],
        [
          -1.5138,
          162,
          null,
          "-0.7569,2021-06-11",
          "81"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "112",
      "data": [
        [
          -1.7922,
          224,
          null,
          "-0.8961,2021-06-13",
          "112"
        ],
        [
          0,
          112,
          null,
          "(null),2021-04-21",
          "112"
        ],
        [
          1.469,
          224,
          null,
          "0.7345,2021-06-21",
          "112"
        ],
        [
          -1.5872,
          224,
          null,
          "-0.7936,2021-05-16",
          "112"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "114",
      "data": [
        [
          0.8378,
          228,
          null,
          "0.4189,2021-06-13",
          "114"
        ],
        [
          1.2092,
          456,
          null,
          "0.3023,2021-06-13",
          "114"
        ],
        [
          1.4432,
          228,
          null,
          "0.7216,2021-05-08",
          "114"
        ],
        [
          0,
          456,
          null,
          "(null),2021-06-11",
          "114"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "55",
      "data": [
        [
          -2.6241000000000003,
          165,
          null,
          "-0.8747,2021-06-13",
          "55"
        ],
        [
          -1.1124,
          165,
          null,
          "-0.3708,2021-05-14",
          "55"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "86",
      "data": [
        [
          -1.9796,
          344,
          null,
          "-0.4949,2021-06-13",
          "86"
        ],
        [
          1.418,
          344,
          null,
          "0.3545,2021-06-16",
          "86"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "28",
      "data": [
        [
          0.0404,
          56,
          null,
          "0.0202,2021-06-13",
          "28"
        ],
        [
          -1.7292,
          84,
          null,
          "-0.5764,2021-06-04",
          "28"
        ],
        [
          0.6151,
          28,
          null,
          "0.6151,2021-04-10",
          "28"
        ],
        [
          1.5726,
          84,
          null,
          "0.5242,2021-04-21",
          "28"
        ],
        [
          0.5665,
          28,
          null,
          "0.5665,2021-06-28",
          "28"
        ],
        [
          -0.0164,
          56,
          null,
          "-0.0082,2021-04-17",
          "28"
        ],
        [
          0,
          84,
          null,
          "(null),2021-05-17",
          "28"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "144",
      "data": [
        [
          0.3193,
          144,
          null,
          "0.3193,2021-06-13",
          "144"
        ],
        [
          -0.351,
          144,
          null,
          "-0.351,2021-04-04",
          "144"
        ],
        [
          -2.7612,
          432,
          null,
          "-0.9204,2021-06-07",
          "144"
        ],
        [
          -0.535,
          288,
          null,
          "-0.2675,2021-06-07",
          "144"
        ],
        [
          0,
          864,
          null,
          "(null),2021-06-13",
          "144"
        ],
        [
          -0.4886,
          144,
          null,
          "-0.4886,2021-06-28",
          "144"
        ],
        [
          -1.198,
          288,
          null,
          "-0.599,2021-06-16",
          "144"
        ],
        [
          -1.2494999999999998,
          432,
          null,
          "-0.4165,2021-06-07",
          "144"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "122",
      "data": [
        [
          1.9132,
          244,
          null,
          "0.9566,2021-06-28",
          "122"
        ],
        [
          -1.5682,
          244,
          null,
          "-0.7841,2021-06-21",
          "122"
        ],
        [
          -0.0142,
          244,
          null,
          "-0.0071,2021-06-13",
          "122"
        ],
        [
          0.9493,
          122,
          null,
          "0.9493,2021-06-02",
          "122"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "158",
      "data": [
        [
          -0.4086,
          158,
          null,
          "-0.4086,2021-06-16",
          "158"
        ],
        [
          -0.3973,
          158,
          null,
          "-0.3973,2021-06-11",
          "158"
        ],
        [
          1.2036000000000002,
          948,
          null,
          "0.2006,2021-05-16",
          "158"
        ],
        [
          1.3804,
          632,
          null,
          "0.3451,2021-06-26",
          "158"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "189",
      "data": [
        [
          -1.5088,
          378,
          null,
          "-0.7544,2021-06-16",
          "189"
        ],
        [
          1.9058,
          378,
          null,
          "0.9529,2021-06-16",
          "189"
        ],
        [
          -0.2015,
          189,
          null,
          "-0.2015,2021-05-21",
          "189"
        ],
        [
          1.1736,
          378,
          null,
          "0.5868,2021-05-08",
          "189"
        ],
        [
          0.437,
          189,
          null,
          "0.437,2021-06-21",
          "189"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "60",
      "data": [
        [
          0.791,
          60,
          null,
          "0.791,2021-06-16",
          "60"
        ],
        [
          -0.5816,
          120,
          null,
          "-0.2908,2021-04-04",
          "60"
        ],
        [
          -3.4164,
          240,
          null,
          "-0.8541,2021-04-10",
          "60"
        ],
        [
          -0.7917,
          60,
          null,
          "-0.7917,2021-05-21",
          "60"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "115",
      "data": [
        [
          1.144,
          230,
          null,
          "0.572,2021-06-16",
          "115"
        ],
        [
          -1.235,
          230,
          null,
          "-0.6175,2021-06-11",
          "115"
        ],
        [
          -0.1332,
          115,
          null,
          "-0.1332,2021-04-04",
          "115"
        ],
        [
          -3.4848,
          460,
          null,
          "-0.8712,2021-05-09",
          "115"
        ],
        [
          -0.3102,
          230,
          null,
          "-0.1551,2021-06-13",
          "115"
        ],
        [
          0.1048,
          115,
          null,
          "0.1048,2021-04-01",
          "115"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "35",
      "data": [
        [
          -2.4753,
          105,
          null,
          "-0.8251,2021-06-02",
          "35"
        ],
        [
          -0.2307,
          105,
          null,
          "-0.0769,2021-05-14",
          "35"
        ],
        [
          -0.9728,
          35,
          null,
          "-0.9728,2021-06-02",
          "35"
        ],
        [
          -3.71,
          140,
          null,
          "-0.9275,2021-05-12",
          "35"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "109",
      "data": [
        [
          -0.3934,
          218,
          null,
          "-0.1967,2021-06-02",
          "109"
        ],
        [
          0,
          436,
          null,
          "(null),2021-05-22",
          "109"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "53",
      "data": [
        [
          0.1924,
          106,
          null,
          "0.0962,2021-06-02",
          "53"
        ],
        [
          -2.8392,
          159,
          null,
          "-0.9464,2021-05-17",
          "53"
        ],
        [
          0.0044,
          53,
          null,
          "0.0044,2021-03-09",
          "53"
        ],
        [
          0.3568,
          106,
          null,
          "0.1784,2021-05-16",
          "53"
        ],
        [
          0,
          53,
          null,
          "(null),2021-06-04",
          "53"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "56",
      "data": [
        [
          1.54,
          224,
          null,
          "0.385,2021-04-10",
          "56"
        ],
        [
          -1.748,
          112,
          null,
          "-0.874,2021-06-21",
          "56"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "10",
      "data": [
        [
          -0.2015,
          10,
          null,
          "-0.2015,2021-04-10",
          "10"
        ],
        [
          1.708,
          20,
          null,
          "0.854,2021-04-20",
          "10"
        ],
        [
          -0.2419,
          10,
          null,
          "-0.2419,2021-06-07",
          "10"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "73",
      "data": [
        [
          2.3112,
          219,
          null,
          "0.7704,2021-04-10",
          "73"
        ],
        [
          -0.8717,
          73,
          null,
          "-0.8717,2021-03-09",
          "73"
        ],
        [
          0.7252,
          292,
          null,
          "0.1813,2021-04-20",
          "73"
        ],
        [
          -0.9034,
          146,
          null,
          "-0.4517,2021-06-16",
          "73"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "25",
      "data": [
        [
          -1.6146,
          50,
          null,
          "-0.8073,2021-04-10",
          "25"
        ],
        [
          0,
          50,
          null,
          "(null),2021-05-17",
          "25"
        ],
        [
          -1.8844,
          100,
          null,
          "-0.4711,2021-06-11",
          "25"
        ],
        [
          0,
          100,
          null,
          "(null),2021-04-01",
          "25"
        ],
        [
          0.832,
          50,
          null,
          "0.416,2021-05-22",
          "25"
        ],
        [
          -7.786800000000002,
          300,
          null,
          "-0.6489,2021-06-02",
          "25"
        ],
        [
          0,
          175,
          null,
          "(null),2021-03-09",
          "25"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "48",
      "data": [
        [
          0,
          48,
          null,
          "(null),2021-04-10",
          "48"
        ],
        [
          -0.9815,
          48,
          null,
          "-0.9815,2021-06-04",
          "48"
        ],
        [
          -1.0818,
          96,
          null,
          "-0.5409,2021-06-26",
          "48"
        ],
        [
          -0.6598,
          96,
          null,
          "-0.3299,2021-03-09",
          "48"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "91",
      "data": [
        [
          -0.6647,
          91,
          null,
          "-0.6647,2021-04-10",
          "91"
        ],
        [
          0,
          182,
          null,
          "(null),2021-06-21",
          "91"
        ],
        [
          -0.4997,
          91,
          null,
          "-0.4997,2021-06-21",
          "91"
        ],
        [
          -0.6424,
          182,
          null,
          "-0.3212,2021-06-16",
          "91"
        ],
        [
          -2.6550000000000002,
          273,
          null,
          "-0.885,2021-05-17",
          "91"
        ],
        [
          3.1996,
          364,
          null,
          "0.7999,2021-06-01",
          "91"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "31",
      "data": [
        [
          0.5234,
          31,
          null,
          "0.5234,2021-04-10",
          "31"
        ],
        [
          -7.1192,
          248,
          null,
          "-0.8899,2021-05-21",
          "31"
        ],
        [
          0,
          31,
          null,
          "(null),2021-06-21",
          "31"
        ],
        [
          -0.3388,
          62,
          null,
          "-0.1694,2021-06-21",
          "31"
        ],
        [
          0,
          62,
          null,
          "(null),2021-06-26",
          "31"
        ],
        [
          -0.7473,
          31,
          null,
          "-0.7473,2021-06-11",
          "31"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "63",
      "data": [
        [
          -0.2742,
          63,
          null,
          "-0.2742,2021-05-17",
          "63"
        ],
        [
          0.168,
          63,
          null,
          "0.168,2021-05-12",
          "63"
        ],
        [
          0.4764,
          189,
          null,
          "0.1588,2021-04-01",
          "63"
        ],
        [
          0,
          63,
          null,
          "(null),2021-05-22",
          "63"
        ],
        [
          0,
          126,
          null,
          "(null),2021-05-09",
          "63"
        ],
        [
          -0.5892,
          126,
          null,
          "-0.2946,2021-04-10",
          "63"
        ],
        [
          -1.6004,
          126,
          null,
          "-0.8002,2021-05-12",
          "63"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "126",
      "data": [
        [
          -0.0337,
          126,
          null,
          "-0.0337,2021-05-17",
          "126"
        ],
        [
          1.8666,
          252,
          null,
          "0.9333,2021-05-21",
          "126"
        ],
        [
          -2.4279,
          378,
          null,
          "-0.8093,2021-06-02",
          "126"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "74",
      "data": [
        [
          0,
          148,
          null,
          "(null),2021-06-26",
          "74"
        ],
        [
          3.7685999999999997,
          444,
          null,
          "0.6281,2021-06-02",
          "74"
        ],
        [
          -0.5631,
          74,
          null,
          "-0.5631,2021-05-12",
          "74"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "2",
      "data": [
        [
          1.5602,
          4,
          null,
          "0.7801,2021-06-26",
          "2"
        ],
        [
          0.603,
          2,
          null,
          "0.603,2021-06-07",
          "2"
        ],
        [
          1.313,
          4,
          null,
          "0.6565,2021-03-09",
          "2"
        ],
        [
          -1.8285,
          6,
          null,
          "-0.6095,2021-06-21",
          "2"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "72",
      "data": [
        [
          -1.5494,
          144,
          null,
          "-0.7747,2021-06-26",
          "72"
        ],
        [
          -0.2997,
          72,
          null,
          "-0.2997,2021-06-07",
          "72"
        ],
        [
          1.9902,
          216,
          null,
          "0.6634,2021-06-21",
          "72"
        ],
        [
          0.7769,
          72,
          null,
          "0.7769,2021-05-16",
          "72"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "182",
      "data": [
        [
          -0.8668,
          728,
          null,
          "-0.2167,2021-06-26",
          "182"
        ],
        [
          -0.2427,
          546,
          null,
          "-0.0809,2021-04-04",
          "182"
        ],
        [
          -0.1278,
          364,
          null,
          "-0.0639,2021-06-28",
          "182"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "149",
      "data": [
        [
          0.5975999999999999,
          447,
          null,
          "0.1992,2021-06-11",
          "149"
        ],
        [
          1.0056,
          447,
          null,
          "0.3352,2021-05-08",
          "149"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "57",
      "data": [
        [
          -0.7294,
          57,
          null,
          "-0.7294,2021-06-11",
          "57"
        ],
        [
          -1.5964,
          114,
          null,
          "-0.7982,2021-05-16",
          "57"
        ],
        [
          -0.4308,
          228,
          null,
          "-0.1077,2021-05-22",
          "57"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "77",
      "data": [
        [
          0.4434,
          154,
          null,
          "0.2217,2021-05-21",
          "77"
        ],
        [
          1.35,
          231,
          null,
          "0.45,2021-06-21",
          "77"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "71",
      "data": [
        [
          -1.7174,
          142,
          null,
          "-0.8587,2021-05-21",
          "71"
        ],
        [
          -1.2036,
          213,
          null,
          "-0.4012,2021-06-27",
          "71"
        ],
        [
          0.7296,
          142,
          null,
          "0.3648,2021-04-01",
          "71"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "24",
      "data": [
        [
          -0.5744,
          48,
          null,
          "-0.2872,2021-05-21",
          "24"
        ],
        [
          0.8973,
          72,
          null,
          "0.2991,2021-05-22",
          "24"
        ],
        [
          0.9441,
          24,
          null,
          "0.9441,2021-06-26",
          "24"
        ],
        [
          0.3453,
          24,
          null,
          "0.3453,2021-05-12",
          "24"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "67",
      "data": [
        [
          0.9946,
          67,
          null,
          "0.9946,2021-05-21",
          "67"
        ],
        [
          -1.1726,
          134,
          null,
          "-0.5863,2021-06-02",
          "67"
        ],
        [
          0,
          268,
          null,
          "(null),2021-03-09",
          "67"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "105",
      "data": [
        [
          2.3748,
          420,
          null,
          "0.5937,2021-05-12",
          "105"
        ],
        [
          -1.6278,
          210,
          null,
          "-0.8139,2021-04-01",
          "105"
        ],
        [
          0.0364,
          105,
          null,
          "0.0364,2021-06-21",
          "105"
        ],
        [
          0.6285,
          105,
          null,
          "0.6285,2021-05-22",
          "105"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "97",
      "data": [
        [
          -0.9502,
          97,
          null,
          "-0.9502,2021-05-12",
          "97"
        ],
        [
          -0.2883,
          97,
          null,
          "-0.2883,2021-06-21",
          "97"
        ],
        [
          2.8804,
          388,
          null,
          "0.7201,2021-04-17",
          "97"
        ],
        [
          0.419,
          194,
          null,
          "0.2095,2021-06-27",
          "97"
        ],
        [
          1.765,
          194,
          null,
          "0.8825,2021-05-09",
          "97"
        ],
        [
          2.436,
          776,
          null,
          "0.3045,2021-06-13",
          "97"
        ],
        [
          -1.5436,
          194,
          null,
          "-0.7718,2021-06-13",
          "97"
        ],
        [
          0,
          97,
          null,
          "(null),2021-06-16",
          "97"
        ],
        [
          -0.2368,
          97,
          null,
          "-0.2368,2021-05-17",
          "97"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "172",
      "data": [
        [
          1.3792,
          344,
          null,
          "0.6896,2021-05-12",
          "172"
        ],
        [
          2.3689999999999998,
          860,
          null,
          "0.4738,2021-06-28",
          "172"
        ],
        [
          -5.727000000000001,
          1720,
          null,
          "-0.5727,2021-06-07",
          "172"
        ],
        [
          2.9488,
          688,
          null,
          "0.7372,2021-05-21",
          "172"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "18",
      "data": [
        [
          -0.2327,
          18,
          null,
          "-0.2327,2021-05-12",
          "18"
        ],
        [
          0.3522,
          18,
          null,
          "0.3522,2021-06-26",
          "18"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "26",
      "data": [
        [
          0.3045,
          78,
          null,
          "0.1015,2021-03-09",
          "26"
        ],
        [
          -1.3552,
          104,
          null,
          "-0.3388,2021-05-22",
          "26"
        ],
        [
          1.0311,
          78,
          null,
          "0.3437,2021-04-10",
          "26"
        ],
        [
          0,
          26,
          null,
          "(null),2021-04-01",
          "26"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "173",
      "data": [
        [
          0.7535999999999999,
          519,
          null,
          "0.2512,2021-03-09",
          "173"
        ],
        [
          0.6444,
          692,
          null,
          "0.1611,2021-06-02",
          "173"
        ],
        [
          -0.0936,
          346,
          null,
          "-0.0468,2021-05-21",
          "173"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "162",
      "data": [
        [
          -0.6938,
          324,
          null,
          "-0.3469,2021-03-09",
          "162"
        ],
        [
          -0.6538,
          162,
          null,
          "-0.6538,2021-06-21",
          "162"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "76",
      "data": [
        [
          0.4193,
          76,
          null,
          "0.4193,2021-04-01",
          "76"
        ],
        [
          -0.1033,
          76,
          null,
          "-0.1033,2021-05-16",
          "76"
        ],
        [
          0.6186,
          228,
          null,
          "0.2062,2021-04-20",
          "76"
        ],
        [
          -0.3822,
          76,
          null,
          "-0.3822,2021-04-20",
          "76"
        ],
        [
          -1.7847,
          228,
          null,
          "-0.5949,2021-04-17",
          "76"
        ],
        [
          -0.8147,
          76,
          null,
          "-0.8147,2021-05-09",
          "76"
        ],
        [
          0.060899999999999996,
          228,
          null,
          "0.0203,2021-06-26",
          "76"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "47",
      "data": [
        [
          0.204,
          94,
          null,
          "0.102,2021-04-01",
          "47"
        ],
        [
          0.3318,
          94,
          null,
          "0.1659,2021-06-01",
          "47"
        ],
        [
          -1.5444,
          94,
          null,
          "-0.7722,2021-06-07",
          "47"
        ],
        [
          -0.0883,
          47,
          null,
          "-0.0883,2021-06-13",
          "47"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "168",
      "data": [
        [
          -1.79,
          336,
          null,
          "-0.895,2021-04-01",
          "168"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "3",
      "data": [
        [
          0,
          9,
          null,
          "(null),2021-06-01",
          "3"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "42",
      "data": [
        [
          -1.8412,
          84,
          null,
          "-0.9206,2021-06-01",
          "42"
        ],
        [
          0.3997,
          42,
          null,
          "0.3997,2021-05-16",
          "42"
        ],
        [
          1.2632,
          168,
          null,
          "0.3158,2021-05-09",
          "42"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "132",
      "data": [
        [
          -0.3067,
          132,
          null,
          "-0.3067,2021-06-01",
          "132"
        ],
        [
          2.4969,
          396,
          null,
          "0.8323,2021-06-07",
          "132"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "192",
      "data": [
        [
          0,
          1344,
          null,
          "(null),2021-05-08",
          "192"
        ],
        [
          0.8026,
          384,
          null,
          "0.4013,2021-06-27",
          "192"
        ],
        [
          0,
          576,
          null,
          "(null),2021-06-13",
          "192"
        ],
        [
          -0.9431,
          192,
          null,
          "-0.9431,2021-06-13",
          "192"
        ],
        [
          1.9935,
          576,
          null,
          "0.6645,2021-04-01",
          "192"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "175",
      "data": [
        [
          1.5464,
          350,
          null,
          "0.7732,2021-05-08",
          "175"
        ],
        [
          -2.871,
          525,
          null,
          "-0.957,2021-06-07",
          "175"
        ],
        [
          1.8112,
          350,
          null,
          "0.9056,2021-03-09",
          "175"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "101",
      "data": [
        [
          0.211,
          101,
          null,
          "0.211,2021-05-08",
          "101"
        ],
        [
          -2.8992,
          303,
          null,
          "-0.9664,2021-05-22",
          "101"
        ],
        [
          0.6193,
          101,
          null,
          "0.6193,2021-05-22",
          "101"
        ],
        [
          0.0838,
          202,
          null,
          "0.0419,2021-05-17",
          "101"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "58",
      "data": [
        [
          -0.366,
          58,
          null,
          "-0.366,2021-05-08",
          "58"
        ],
        [
          0.8449,
          58,
          null,
          "0.8449,2021-05-22",
          "58"
        ],
        [
          1.9631999999999998,
          348,
          null,
          "0.3272,2021-05-09",
          "58"
        ],
        [
          -3.2976,
          232,
          null,
          "-0.8244,2021-06-07",
          "58"
        ],
        [
          0.2808,
          58,
          null,
          "0.2808,2021-06-27",
          "58"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "106",
      "data": [
        [
          -2.218,
          530,
          null,
          "-0.4436,2021-04-04",
          "106"
        ],
        [
          0.5154,
          106,
          null,
          "0.5154,2021-04-17",
          "106"
        ],
        [
          2.1816,
          424,
          null,
          "0.5454,2021-03-09",
          "106"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "188",
      "data": [
        [
          0.7962,
          188,
          null,
          "0.7962,2021-04-04",
          "188"
        ],
        [
          0,
          376,
          null,
          "(null),2021-05-09",
          "188"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "138",
      "data": [
        [
          -0.9612,
          138,
          null,
          "-0.9612,2021-04-04",
          "138"
        ],
        [
          0.0375,
          138,
          null,
          "0.0375,2021-04-21",
          "138"
        ],
        [
          -2.8832,
          552,
          null,
          "-0.7208,2021-05-21",
          "138"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "165",
      "data": [
        [
          -0.8706,
          990,
          null,
          "-0.1451,2021-04-21",
          "165"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "164",
      "data": [
        [
          0.1064,
          164,
          null,
          "0.1064,2021-04-21",
          "164"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "69",
      "data": [
        [
          0.4812,
          138,
          null,
          "0.2406,2021-04-21",
          "69"
        ],
        [
          0.8768,
          138,
          null,
          "0.4384,2021-06-16",
          "69"
        ],
        [
          -7.692799999999999,
          552,
          null,
          "-0.9616,2021-05-21",
          "69"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "29",
      "data": [
        [
          0.8871,
          29,
          null,
          "0.8871,2021-04-21",
          "29"
        ],
        [
          -2.8308,
          116,
          null,
          "-0.7077,2021-06-13",
          "29"
        ],
        [
          -0.9659,
          29,
          null,
          "-0.9659,2021-06-04",
          "29"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "30",
      "data": [
        [
          1.8351000000000002,
          90,
          null,
          "0.6117,2021-06-21",
          "30"
        ],
        [
          -0.6498,
          30,
          null,
          "-0.6498,2021-06-21",
          "30"
        ],
        [
          0,
          60,
          null,
          "(null),2021-05-22",
          "30"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "154",
      "data": [
        [
          -0.0429,
          462,
          null,
          "-0.0143,2021-06-28",
          "154"
        ],
        [
          -0.0858,
          308,
          null,
          "-0.0429,2021-05-09",
          "154"
        ],
        [
          0.3313,
          154,
          null,
          "0.3313,2021-06-13",
          "154"
        ],
        [
          1.394,
          616,
          null,
          "0.3485,2021-06-26",
          "154"
        ],
        [
          0,
          308,
          null,
          "(null),2021-03-09",
          "154"
        ],
        [
          -0.8278,
          154,
          null,
          "-0.8278,2021-03-09",
          "154"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "70",
      "data": [
        [
          2.8182,
          420,
          null,
          "0.4697,2021-06-28",
          "70"
        ],
        [
          -1.1702,
          140,
          null,
          "-0.5851,2021-06-16",
          "70"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "89",
      "data": [
        [
          -0.41969999999999996,
          267,
          null,
          "-0.1399,2021-05-14",
          "89"
        ],
        [
          2.3619,
          267,
          null,
          "0.7873,2021-06-16",
          "89"
        ],
        [
          -0.358,
          89,
          null,
          "-0.358,2021-04-10",
          "89"
        ],
        [
          0.0587,
          89,
          null,
          "0.0587,2021-05-17",
          "89"
        ],
        [
          2.2374,
          267,
          null,
          "0.7458,2021-05-21",
          "89"
        ],
        [
          -4.658999999999999,
          890,
          null,
          "-0.4659,2021-03-09",
          "89"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "135",
      "data": [
        [
          1.0138,
          270,
          null,
          "0.5069,2021-06-07",
          "135"
        ],
        [
          0.9516,
          270,
          null,
          "0.4758,2021-05-16",
          "135"
        ],
        [
          0.6548,
          270,
          null,
          "0.3274,2021-04-20",
          "135"
        ],
        [
          -2.5017,
          405,
          null,
          "-0.8339,2021-05-04",
          "135"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "7",
      "data": [
        [
          -5.423999999999999,
          70,
          null,
          "-0.5424,2021-06-07",
          "7"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "14",
      "data": [
        [
          0.6996,
          14,
          null,
          "0.6996,2021-06-28",
          "14"
        ],
        [
          -2.1588000000000003,
          42,
          null,
          "-0.7196,2021-05-16",
          "14"
        ],
        [
          0.2716,
          14,
          null,
          "0.2716,2021-05-12",
          "14"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "95",
      "data": [
        [
          0.5536,
          380,
          null,
          "0.1384,2021-04-20",
          "95"
        ],
        [
          0.819,
          95,
          null,
          "0.819,2021-06-28",
          "95"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "8",
      "data": [
        [
          8.918999999999999,
          80,
          null,
          "0.8919,2021-05-04",
          "8"
        ],
        [
          -2.4200999999999997,
          24,
          null,
          "-0.8067,2021-06-13",
          "8"
        ],
        [
          -0.6213,
          24,
          null,
          "-0.2071,2021-06-02",
          "8"
        ],
        [
          -0.3896,
          8,
          null,
          "-0.3896,2021-06-26",
          "8"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "104",
      "data": [
        [
          0,
          312,
          null,
          "(null),2021-04-17",
          "104"
        ],
        [
          0.5955,
          104,
          null,
          "0.5955,2021-04-10",
          "104"
        ],
        [
          0,
          208,
          null,
          "(null),2021-03-09",
          "104"
        ],
        [
          -2.7424999999999997,
          520,
          null,
          "-0.5485,2021-04-01",
          "104"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "80",
      "data": [
        [
          -2.4162,
          240,
          null,
          "-0.8054,2021-06-27",
          "80"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "198",
      "data": [
        [
          0,
          396,
          null,
          "(null),2021-05-09",
          "198"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "125",
      "data": [
        [
          0.3212,
          125,
          null,
          "0.3212,2021-06-28",
          "125"
        ],
        [
          1.0656,
          250,
          null,
          "0.5328,2021-04-10",
          "125"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "134",
      "data": [
        [
          0.9204,
          134,
          null,
          "0.9204,2021-06-26",
          "134"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "183",
      "data": [
        [
          -3.5028,
          732,
          null,
          "-0.8757,2021-05-21",
          "183"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    },
    {
      "name": "85",
      "data": [
        [
          2.727,
          850,
          null,
          "0.2727,2021-04-01",
          "85"
        ]
      ],
      "type": "scatter",
      "large": true,
      "largeThreshold": 200000,
      "emphasis": {
        "focus": "series"
      },
      "labelLayout": {
        "moveOverlap": true,
        "hideOverlap": true
      },
      "label": {
        "color": "#202241",
        "textBorderColor": "#FFF",
        "textBorderWidth": 1.5,
        "show": true,
        "position": "top",
        "overflow": "truncate"
      }
    }
  ],
  "dataZoom": [
    {
      "type": "slider",
      "show": true,
      "height": 24,
      "showDataShadow": false,
      "bottom": 0,
      "borderRadius": 3,
      "backgroundColor": "rgba(47,69,84,0)",
      "handleStyle": {
        "color": "#fff",
        "borderColor": "#ACB8D1"
      },
      "dataBackground": {
        "lineStyle": {
          "color": "#d2dbee",
          "width": 0.5
        },
        "areaStyle": {
          "color": "#dedbee",
          "opacity": 0.2
        }
      },
      "fillerColor": "rgba(135,175,274,0.2)",
      "handleIcon": "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",
      "brushStyle": {
        "color": "rgba(135,175,274,0.15)"
      },
      "brushSelect": false,
      "moveHandleStyle": {
        "color": "#D2DBEE",
        "opacity": 0.7
      },
      "showDetail": false,
      "realtime": true,
      "xAxisIndex": [
        0
      ],
      "zoomLock": false,
      "throttle": 200,
      "start": 0,
      "end": 100
    }
  ],
  "color": [
    "#217DFF",
    "#F99239",
    "#374BCD",
    "#66D8E2",
    "#FFBC04",
    "#40AEFF",
    "#0A8CA0",
    "#FFB676",
    "#EE6C59",
    "#7856FF",
    "#A37AF5",
    "#48C6A8"
  ],
  "animationDuration": 300,
  "hoverLayerThreshold": 100000000
}
myChart.setOption(option);
