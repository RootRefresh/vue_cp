<template>
  <div class="container">
    <customNav :show-title="true"></customNav>
    <topTimerView></topTimerView>
    <SSQBallView ref="ballView" v-on:ballClick="ballClick"></SSQBallView>
    <selectBar v-on:clearBallSelect="clear" v-on:toBuy="toBuy" :betNum="betNum" :money="money"></selectBar>
  </div>
</template>

<script>
import CustomNav from './CustomNav'
import TopTimerView from './CPTopTimerView'
import SSQBallView from './NumberType/CPSSQ_DLT_BallView'
import SelectBar from './CPSelectBar'
export default {
  name: 'SSQ',
  data () {
    return {
      betNum: 0,
      money: 0,
      redBalls: [],
      blueBalls: []
    }
  },
  methods: {
    clear () {
      this.$refs.ballView.clear()
    },
    ballClick (redBalls, blueBalls) {
      this.redBalls = redBalls
      this.blueBalls = blueBalls
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
    },
    toBuy () {
      this.$router.push({ path: '/buy' })
      var tmp = {'red': this.redBalls, 'blue': this.blueBalls, 'way': '单式投注', 'betNum': this.betNum, 'money': this.money}
      this.$store.commit('pushBuyArray', tmp)
      this.$store.commit('setRedCount', 35)
      this.$store.commit('setBlueCount', 12)
      this.$store.commit('setPlayType', '单式投注')
    }
  },
  components: {
    TopTimerView,
    SSQBallView,
    SelectBar,
    CustomNav
  }
}
</script>
