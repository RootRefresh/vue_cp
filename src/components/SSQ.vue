<template>
  <div class="container">
    <customNav></customNav>
    <topTimerView></topTimerView>
    <redBallView ref="ballView" v-on:ballClick="ballClick"></redBallView>
    <selectBar v-on:clearBallSelect="clear" :betNum="betNum" :money="money"></selectBar>
  </div>
</template>

<script>
import CustomNav from './CustomNav'
import TopTimerView from './CPTopTimerView'
import RedBallView from './CPRedBallView'
import SelectBar from './CPSelectBar'
export default {
  name: 'SSQ',
  data () {
    return {
      betNum: 0,
      money: 0
    }
  },
  methods: {
    clear () {
      this.$refs.ballView.clear()
    },
    ballClick (redBalls, blueBalls) {
      var redNum = redBalls.length
      var blueNum = blueBalls.length
      console.log(redNum, blueNum)
      if (redNum >= 6 && blueNum >= 1) {
        if (redNum === 6) {
          this.betNum = blueNum
        } else {
          this.betNum = redNum * blueNum
        }
        this.money = 2 * this.betNum
      } else {
        this.betNum = 0
        this.money = 0
      }
    }
  },
  components: {
    TopTimerView,
    RedBallView,
    SelectBar,
    CustomNav
  }
}
</script>
