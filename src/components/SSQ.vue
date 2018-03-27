<template>
  <div class="container">
    <customNav @navBack="back" :show-title="true"></customNav>
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
      blueBalls: [],
      redLimit: 0,
      blueLimit: 0
    }
  },
  methods: {
    back () {
      this.$store.commit('setPlayType', '')
    },
    clear () {
      this.betNum = 0
      this.money = 0
      this.redBalls = []
      this.blueBalls = []
      this.$refs.ballView.clear()
    },
    calculateBet (n, flag) {
      var k = n - flag
      var m = k
      var sun = 1
      var mother = 1
      for (var i = 0; i < k; i++) {
        sun *= n--
        mother *= m--
      }
      return sun / mother
    },
    ssqBet (redNum, blueNum) {
      if (redNum >= 6 && blueNum >= 1) {
        if (redNum === 6) {
          this.betNum = blueNum
        } else {
          this.betNum = this.calculateBet(redNum, 6) * blueNum
        }
        this.money = 2 * this.betNum
      } else {
        this.betNum = 0
        this.money = 0
      }
    },
    dltBet (redNum, blueNum) {
      if (redNum >= 5 && blueNum >= 2) {
        this.betNum = this.calculateBet(redNum, 5) * this.calculateBet(blueNum, 2)
        this.money = this.betNum * 2
      } else {
        this.betNum = 0
        this.money = 0
      }
    },
    ballClick (redBalls, blueBalls) {
      this.redBalls = redBalls
      this.blueBalls = blueBalls
      var redNum = redBalls.length
      var blueNum = blueBalls.length
      console.log(redNum, blueNum)
      if (this.$store.state.lotteryName === '双色球') {
        this.ssqBet(redNum, blueNum)
      } else {
        this.dltBet(redNum, blueNum)
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
  created () {
    if (this.$store.state.lotteryName === '双色球') {
      this.redLimit = 6
      this.blueLimit = 1
    } else {
      this.redLimit = 5
      this.blueLimit = 2
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
