<template>
    <div>
      <customNav @navBack="back" :title="playType" :showTitle="false" @navClick="navClick"></customNav>
      <NavPopView v-show="showPop" @choosePlayType="choosePlayType" @dissBlackView="dissBlackView"></NavPopView>
      <topTimerView></topTimerView>
      <PL3BallView ref="ballView" :zx-show="zxShow" @ballClick="ballClick" ></PL3BallView>
      <selectBar @clearBallSelect="clear" v-on:toBuy="toBuy" :betNum="betNum"></selectBar>
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
      gArr: [],
      zxShow: true
    }
  },
  methods: {
    clear () {
      this.betNum = 0
      this.bArr = []
      this.sArr = []
      this.gArr = []
      this.$refs.ballView.clear()
    },
    navClick (show) {
      this.showPop = show
    },
    back () {
      this.$store.commit('setPlayType', '直选')
    },
    choosePlayType (playType) {
      if (playType !== this.playType) {
        this.$store.commit('setBuyArray', [])
        this.$refs.ballView.clear()
        this.playType = playType
        playType === '直选' ? this.zxShow = true : this.zxShow = false
      }
    },
    dissBlackView () {
      this.showPop = false
    },
    zxMoney (bArr, sArr, gArr) {
      var betNumber = bArr.length * sArr.length * gArr.length
      return betNumber
    },
    zx3Money (arr) {
      var l = arr.length
      if (l < 2) {
        return 0
      } else {
        return l * (l - 1)
      }
    },
    zx6Money (arr) {
      var l = arr.length
      if (l < 3) {
        return 0
      } else {
        return l * (l - 1) * (l - 2) / 6
      }
    },
    ballClick (bArr, sArr, gArr) {
      this.bArr = bArr
      this.sArr = sArr
      this.gArr = gArr
      if (this.playType === '直选') {
        this.betNum = this.zxMoney(bArr, sArr, gArr)
      } else if (this.playType === '组选三') {
        this.betNum = this.zx3Money(gArr)
      } else {
        this.betNum = this.zx6Money(gArr)
      }
    },
    buildData () {
      if (this.playType === '直选') {
        return this.bArr.join(' ') + ' | ' + this.sArr.join(' ') + ' | ' + this.gArr.join(' ')
      } else {
        return this.gArr.join(' ')
      }
    },
    toBuy () {
      this.$router.push({path: '/buy'})
      var d = {'red': this.buildData(), 'way': this.playType, 'betNum': this.betNum, 'money': 2 * this.betNum}
      this.$store.commit('pushBuyArray', d)
      this.$store.commit('setPlayType', this.playType)
    }
  },
  created () {
    this.playType = this.$store.state.playType
    if (this.playType === '') {
      this.playType = '直选'
    }
    this.playType === '直选' ? this.zxShow = true : this.zxShow = false
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
