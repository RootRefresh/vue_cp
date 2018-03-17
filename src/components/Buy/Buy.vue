<template>
    <div>
      <customNav></customNav>
      <p>测试</p>
      <addBet></addBet>
      <buyList :redStr="redStr" :blueStr="blueStr"></buyList>
      <betNumberBar></betNumberBar>
      <moneyBar></moneyBar>
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
      redStr: '',
      blueStr: ''
    }
  },
  methods: {
  },
  components: {
    CustomNav,
    AddBet,
    BuyList,
    BetNumberBar,
    MoneyBar
  },
  created () {
    var a = this.$store.state.betArray
    this.betString = a.join(' ')
    alert(this.betString)
  }
}
</script>

<style scoped>

</style>
