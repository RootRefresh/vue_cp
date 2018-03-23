<template>
    <div>
      <customNav></customNav>
      <p>测试</p>
      <addBet @randomOneBet="randomOneBet"></addBet>
      <buyList @changeMoneyBar="changeMoneyBar" ref="buyList"></buyList>
      <betNumberBar @multiChange="multiChange"></betNumberBar>
      <moneyBar :multiNumber="multiNumber" :money="money" :betNumber="betNumber"></moneyBar>
    </div>
    <!-- :termNumber="termNumber" :multiNumber="multiNumber" -->
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
      blueCount: '',
      playType: '',
      termNumber: 1,
      multiNumber: 1
    }
  },
  // props: ['redCount', 'blueCount'],
  methods: {
    multiChange (num) {
      this.multiNumber = num
    },
    changeMoneyBar (betNumber, money) {
      this.betNumber = betNumber
      this.money = money
    },
    isInArray (arr, value) {
      for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
          return true
        }
      }
      return false
    },
    randomNumber (num) {
      var r = Math.floor(Math.random() * num)
      return r
    },
    randomOneBet () {
      if (this.playType === '组选三') {
        var randomArr = []
        for (var i = 0; i < 2; i++) {
          var r = this.randomNumber(10)
          while (this.isInArray(randomArr, r)) {
            r = this.randomNumber(10)
          }
          randomArr.push(r)
        }
        var tmp = {'red': randomArr, 'blue': '', 'way': '组选三', 'betNum': 2, 'money': 4}
        this.$store.commit('insertBuyArray', tmp)
        this.$refs.buyList.addOneData(tmp)
      } else if (this.playType === '组选六') {
        var randomArr1 = []
        for (var j = 0; j < 3; j++) {
          var r1 = this.randomNumber(10)
          while (this.isInArray(randomArr1, r1)) {
            r1 = this.randomNumber(10)
          }
          randomArr1.push(r1)
        }
        var tmp1 = {'red': randomArr1, 'blue': '', 'way': '组选六', 'betNum': 1, 'money': 2}
        this.$store.commit('insertBuyArray', tmp1)
        this.$refs.buyList.addOneData(tmp1)
      } else if (this.playType === '直选') {
        var randomArr2 = []
        for (var n = 0; n < 3; n++) {
          var r2 = this.randomNumber(10)
          randomArr2.push(r2)
        }
        var tmp2 = {'red': randomArr2, 'blue': '', 'way': '直选', 'betNum': 1, 'money': 2}
        this.$store.commit('insertBuyArray', tmp2)
        this.$refs.buyList.addOneData(tmp2)
      } else {
        var redCount = 35
        var blueCount = 12
        var randomReds = []
        var randomBlues = []
        for (var m = 0; m < 6; m++) {
          var r3 = Math.floor(Math.random() * redCount + 1)
          var v = r3 < 10 ? '0' + r3 : r3
          randomReds.push(v)
        }
        for (var k = 0; k < 1; k++) {
          var b = Math.floor((Math.random() * blueCount) + 1)
          var v2 = b < 10 ? '0' + b : b
          randomBlues.push(v2)
        }
        var tmp3 = {'red': randomReds, 'blue': randomBlues, 'betNum': 1, 'money': 2}
        this.$store.commit('insertBuyArray', tmp3)
        this.$refs.buyList.addOneData(tmp3)
      }
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
    this.playType = this.$store.state.playType
    console.log(this.playType)
  }
}
</script>

<style scoped>

</style>
