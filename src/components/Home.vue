<template>
  <div class="container">
    <homeTop></homeTop>
    <lunbo></lunbo>
    <ul class="">
      <li v-for="item in cz_array" :key="item.key" @click="clickCell(item.name)" class="li-item clearfix">
        <img v-bind:src=item.image >
      <div class="cp-text">
        <p class="cp-title">{{item.name}}</p>
        <p class="cp-info">{{item.info}}</p>
      </div>
      </li>
    </ul>
    <tabBar v-bind:idx='0'></tabBar>
  </div>
</template>

<script>
import HomeTop from './HomeTop'
import Lunbo from './Lunbo'
import TabBar from './TabBar'
export default {
  name: 'Home',
  data: function () {
    return {
      test: require('../assets/image/fc3d_icon.png'),
      cz_array: [
        {name: '重庆时时彩', info: '最高现金加奖95%', image: require('../assets/image/ico_lottery_cqssc.png')},
        {name: '竞彩足球', info: '最高现金加奖12%，独家红包减免', image: require('../assets/image/centralfoot.png')},
        {name: '江西11选5', info: '现金加奖60%', image: require('../assets/image/gd115_icon.png')},
        {name: '竞彩篮球', info: '最高现金加奖15%，独家红包减免5%', image: require('../assets/image/centralbasket.png')},
        {name: '胜负彩', info: '最高奖金500万', image: require('../assets/image/centralsfc.png')},
        {name: '双色球', info: '2元赢千万', image: require('../assets/image/centraldcb.png')},
        {name: '大乐透', info: '3元赢千万', image: require('../assets/image/centraldlt.png')},
        {name: '福彩3', info: '天天开奖，独家红包减免25%', image: require('../assets/image/fc3d_icon.png')},
        {name: '排列三', info: '天天开奖，独家红包减免25%', image: require('../assets/image/centralp3.png')},
        {name: '任选九', info: '红包加奖高达15%', image: require('../assets/image/centralrxn.png')},
        {name: '北京单场', info: '挑战高赔率', image: require('../assets/image/centralbd.png')}

      ]
    }
  },
  methods: {
    clickCell (name) {
      if (name === '双色球') {
        this.$router.push('SSQ')
      }
    }
  },
  components: {
    Lunbo,
    HomeTop,
    TabBar
  }
}
</script>

<style scoped>
@import '../assets/css/home.css';
</style>
