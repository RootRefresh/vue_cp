<template>
    <div>
      <customNav :showTitle="false" @navClick="navClick"></customNav>
      <NavPopView v-show="showPop" @choosePlayType="choosePlayType" @dissBlackView="dissBlackView"></NavPopView>
      <topTimerView></topTimerView>
      <PL3BallView ref="ballView" @ballClick="ballClick" ></PL3BallView>
      <selectBar v-on:toBuy="toBuy" :betNum="betNum"></selectBar>
    </div>
</template>

<script>
import CustomNav from './CustomNav'
import TopTimerView from './CPTopTimerView'
import PL3BallView from './NumberType/CP3D_PL3_BallView'
import SelectBar from './CPSelectBar'
import NavPopView from './NumberType/CPPL3_NavPopView'

export default {
  name: 'PL3',
  data () {
    return {
      showPop: false,
      playType: '直选',
      betNum: 0,
      bArr: [],
      sArr: [],
      gArr: []
    }
  },
  methods: {
    navClick (show) {
      this.showPop = show
    },
    choosePlayType (playType) {
      this.playType = playType
      console.log(playType)
    },
    dissBlackView () {
      this.showPop = false
    },
    zxMoney (bArr, sArr, gArr) {
      var betNumber = bArr.length * sArr.length * gArr.length
      return betNumber
    },
    ballClick (bArr, sArr, gArr) {
      this.bArr = bArr
      this.sArr = sArr
      this.gArr = gArr
      if (this.playType === '直选') {
        this.betNum = this.zxMoney(bArr, sArr, gArr)
      }
    },
    buildData () {
      return this.bArr.join(' ') + '|' + this.sArr.join(' ') + '|' + this.gArr.join(' ')
    },
    toBuy () {
      this.$router.push({path: '/buy'})
      // var d = {'balls': this.buildData(), 'type': this.playType, 'betNum': this.betNum}
    }
  },
  components: {
    CustomNav,
    TopTimerView,
    PL3BallView,
    SelectBar,
    NavPopView
  }
}
</script>

<style scoped>

</style>
