<template>
  <div class="container card">
    <div class="map" id="map" style="width: 100%; height: 750px"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import china from 'echarts/map/json/china.json'
import shanghai from 'echarts/map/json/province/shanghai.json'
import hebei from 'echarts/map/json/province/hebei.json'
import shanxi from 'echarts/map/json/province/shanxi.json'
import neimenggu from 'echarts/map/json/province/neimenggu.json'
import liaoning from 'echarts/map/json/province/liaoning.json'
import jilin from 'echarts/map/json/province/jilin.json'
import heilongjiang from 'echarts/map/json/province/heilongjiang.json'
import jiangsu from 'echarts/map/json/province/jiangsu.json'
import zhejiang from 'echarts/map/json/province/zhejiang.json'
import anhui from 'echarts/map/json/province/anhui.json'
import fujian from 'echarts/map/json/province/fujian.json'
import jiangxi from 'echarts/map/json/province/jiangxi.json'
import shandong from 'echarts/map/json/province/shandong.json'
import henan from 'echarts/map/json/province/henan.json'
import hubei from 'echarts/map/json/province/hubei.json'
import hunan from 'echarts/map/json/province/hunan.json'
import guangdong from 'echarts/map/json/province/guangdong.json'
import guangxi from 'echarts/map/json/province/guangxi.json'
import hainan from 'echarts/map/json/province/hainan.json'
import sichuan from 'echarts/map/json/province/sichuan.json'
import guizhou from 'echarts/map/json/province/guizhou.json'
import yunnan from 'echarts/map/json/province/yunnan.json'
import xizang from 'echarts/map/json/province/xizang.json'
import shanxi1 from 'echarts/map/json/province/shanxi1.json'
import gansu from 'echarts/map/json/province/gansu.json'
import qinghai from 'echarts/map/json/province/qinghai.json'
import ningxia from 'echarts/map/json/province/ningxia.json'
import xinjiang from 'echarts/map/json/province/xinjiang.json'
import beijing from 'echarts/map/json/province/ningxia.json'
import tianjin from 'echarts/map/json/province/tianjin.json'
import chongqing from 'echarts/map/json/province/chongqing.json'
import xianggang from 'echarts/map/json/province/xianggang.json'
import aomen from 'echarts/map/json/province/aomen.json'
import { onMounted, onUnmounted } from 'vue'
var timeFn = null
let myChart = null
var provinces = {
  上海: shanghai,
  河北: hebei,
  山西: shanxi,
  内蒙古: neimenggu,
  辽宁: liaoning,
  吉林: jilin,
  黑龙江: heilongjiang,
  江苏: jiangsu,
  浙江: zhejiang,
  安徽: anhui,
  福建: fujian,
  江西: jiangxi,
  山东: shandong,
  河南: henan,
  湖北: hubei,
  湖南: hunan,
  广东: guangdong,
  广西: guangxi,
  海南: hainan,
  四川: sichuan,
  贵州: guizhou,
  云南: yunnan,
  西藏: xizang,
  陕西: shanxi1,
  甘肃: gansu,
  青海: qinghai,
  宁夏: ningxia,
  新疆: xinjiang,
  北京: beijing,
  天津: tianjin,
  重庆: chongqing,
  香港: xianggang,
  澳门: aomen
}
//各省份的数据
let allData = [
  { name: '北京' },
  { name: '天津' },
  { name: '上海' },
  { name: '重庆' },
  { name: '河北' },
  { name: '河南' },
  { name: '云南' },
  { name: '辽宁' },
  { name: '黑龙江' },
  { name: '湖南' },
  { name: '安徽' },
  { name: '山东' },
  { name: '新疆' },
  { name: '江苏' },
  { name: '浙江' },
  { name: '江西' },
  { name: '湖北' },
  { name: '广西' },
  { name: '甘肃' },
  { name: '山西' },
  { name: '内蒙古' },
  { name: '陕西' },
  { name: '吉林' },
  { name: '福建' },
  { name: '贵州' },
  { name: '广东' },
  { name: '青海' },
  { name: '西藏' },
  { name: '四川' },
  { name: '宁夏' },
  { name: '海南' },
  { name: '台湾' },
  { name: '香港' },
  { name: '澳门' }
]
for (let i = 0; i < allData.length; i++) {
  allData[i].value = Math.round(Math.random() * 100)
}

function handleResize(params) {
  console.log('myChart :>> ', myChart);
  myChart.resize()
}

onMounted(() => {
  loadMap(china, 'china') //初始化全国地图
  /**
 获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
 @params {String} mapCode:json数据的地址
 @params {String} name: 地图名称
 */
  async function loadMap(mapCode, name) {
    try {
      myChart = echarts.init(document.getElementById('map'))
      echarts.registerMap(name, mapCode)
      let option = {
        tooltip: {
          show: true,
          formatter: function (params) {
            if (params.data) return params.name + '：' + params.data['value']
          }
        },
        visualMap: {
          type: 'continuous',
          text: ['', ''],
          showLabel: true,
          left: '50',
          min: 0,
          max: 100,
          inRange: {
            color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096']
          },
          splitNumber: 0
        },
        series: [
          {
            name: 'MAP',
            type: 'map',
            mapType: name,
            selectedMode: 'false', //是否允许选中多个区域
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: allData
          }
        ]
      }
      myChart.setOption(option)
      //单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
      window.addEventListener('resize', handleResize)
      myChart.on('click', function (params) {
        clearTimeout(timeFn)
        //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
        timeFn = setTimeout(function () {
          let name = params.name //地区name
          let mapCode = provinces[name] //地区的json数据
          if (!mapCode) {
            alert('无此区域地图显示')
            return
          }

          loadMap(mapCode, name)
        }, 250)
      })

      // 绑定双击事件，返回全国地图
      myChart.on('dblclick', function (params) {
        //当双击事件发生时，清除单击事件，仅响应双击事件
        clearTimeout(timeFn)

        //返回全国地图
        loadMap(china, 'china')
      })
    } catch (error) {
      console.log('error :>> ', error)
    }
  }
})
onUnmounted(() => {
  window.removeEventListener('reset', handleResize)
})
</script>

<style lang="scss" scoped></style>
