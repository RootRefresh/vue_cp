<template>
    <div>
      <customNav></customNav>
      <p>测试</p>
      <addBet @randomOneBet="randomOneBet"></addBet>
      <buyList @changeMoneyBar="changeMoneyBar" ref="buyList"></buyList>
      <betNumberBar></betNumberBar>
      <moneyBar :money="money" :betNumber="betNumber"></moneyBar>
    </div>
</template>

<script>
import CustomNav from '../CustomNav'
import AddBet from './AddBet'
import BuyList from './BuyList'
import BetNumberBar from './BetNumberBar'
import MoneyBar from './MoneyBar'

export default {
  name: 'buy',
  data () {
    return {
      money: 0,
      betNumber: 0,
      redCount: '',
      blueCount: ''
    }
  },
  // props: ['redCount', 'blueCount'],
  methods: {
    changeMoneyBar (betNumber, money) {
      this.betNumber = betNumber
      this.money = money
    },
    randomOneBet () {
      var redCount = 35
      var blueCount = 12
      var randomReds = []
      var randomBlues = []
      for (var i = 0; i < 6; i++) {
        var r = Math.floor(Math.random() * redCount + 1)
        var v = r < 10 ? '0' + r : r
        randomReds.push(v)
      }
      for (var j = 0; j < 1; j++) {
        var b = Math.floor((Math.random() * blueCount) + 1)
        var v2 = b < 10 ? '0' + b : b
        randomBlues.push(v2)
      }
      var tmp = {'red': randomReds, 'blue': randomBlues, 'betNum': 1, 'money': 2}
      this.$store.commit('insertBuyArray', tmp)
      this.$refs.buyList.addOneData(tmp)
    }
  },
  components: {
    CustomNav,
    AddBet,
    BuyList,
    BetNumberBar,
    MoneyBar
  },
  created () {
  }
}
</script>

<style scoped>

</style>
