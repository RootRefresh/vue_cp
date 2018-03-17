<template>
    <div>
      <customNav></customNav>
      <p>测试</p>
      <addBet></addBet>
      <buyList></buyList>
      <betnNumberBar></betnNumberBar>
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
  },
  methods: {
  },
  components: {
    CustomNav,
    AddBet,
    BuyList,
    BetNumberBar,
    MoneyBar
  }
}
</script>

<style scoped>

</style>
