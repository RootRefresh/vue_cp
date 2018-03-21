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
      blueCount: '',
      playType: ''
    }
  },
  // props: ['redCount', 'blueCount'],
  methods: {
    changeMoneyBar (betNumber, money) {
      this.betNumber = betNumber
      this.money = money
    },
    isInArray(arr,value){
      for(var i = 0; i < arr.length; i++){
          if(value === arr[i]){
              return true;
          }
      }
      return false;
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
        var tmp = {'red': randomArr, 'blue': '', 'way': '组选三','betNum': 2, 'money': 4}
        this.$store.commit('insertBuyArray', tmp)
        this.$refs.buyList.addOneData(tmp)
      }else if (this.playType === '组选六') {
        var randomArr = []
        for (var i = 0; i < 3; i++) {
          var r = this.randomNumber(10)
          while (this.isInArray(randomArr, r)) {
            r = this.randomNumber(10)
          }
          randomArr.push(r)
        }
        var tmp = {'red': randomArr, 'blue': '', 'way': '组选六', 'betNum': 1, 'money': 2}
        this.$store.commit('insertBuyArray', tmp)
        this.$refs.buyList.addOneData(tmp)
      } else if(this.playType === '直选'){
        var randomArr = []
        for (var i = 0; i < 3; i++) {
          var r = this.randomNumber(10)
          randomArr.push(r)
        }
        var tmp = {'red': randomArr, 'blue': '', 'way': '直选', 'betNum': 1, 'money': 2}
        this.$store.commit('insertBuyArray', tmp)
        this.$refs.buyList.addOneData(tmp)
      } else {
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
  }
}
</script>

<style scoped>

</style>
