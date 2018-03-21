<template>
  <div id="buy-list">
    <ul>
      <li class="" v-for="(item, index) in tmp" :key="item.id">
         <!--<div class="flex-center">-->
            <div class="top-v">
              <button class="closeBtn" @click="close(item, index)">x</button>
              <span class="red-ball">{{item.red}}</span>
              <span class="blue-ball">{{item.blue}}</span>
            </div>
            <div class="bottom-v">
              <span>{{item.way}}</span>
              <span>{{item.money}}</span>
            </div>
        <!--</div>-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'buy-list',
  data () {
    return {
      tmp: [],
      originArr: [],
      totalMoney: 0,
      totalBetNum: 0,
      playType: ''
    }
  },
  methods: {
    removeByValue (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          arr.splice(i, 1)
          break
        }
      }
    },
    removeByIndex (arr, index) {
      for (var i = 0; i < arr.length; i++) {
        if (i === index) {
          arr.splice(i, 1)
          break
        }
      }
    },
    deleteOrigin (index) {
      var d = this.originArr[index]
      this.totalMoney -= d.money
      this.totalBetNum -= d.betNum
      this.changeMoneyBar()
    },
    changeMoneyBar () {
      this.$emit('changeMoneyBar', this.totalBetNum, this.totalMoney)
    },
    close (item, index) {
      this.deleteOrigin(index)
      this.removeByValue(this.tmp, item)
      this.removeByIndex(this.originArr, index)
      this.$store.commit('setBuyArray', this.originArr)
    },
    buildOneBet (d) {
      var red = ''
      var blue = ''
      if (d.red instanceof Array) {
        var sepString = this.playType === '直选' ? ' | ' : ' '
        red = d.red.join(sepString)
      } else {
        red = d.red
      }
      if (d.blue instanceof Array) {
        blue = d.blue.join(' ')
      } else {
        blue = ''
      }
      var betNum = d.betNum
      var money = d.money
      this.totalMoney += money
      this.totalBetNum += betNum
      this.tmp.unshift({'red': red, 'blue': blue, 'way': this.playType, money: betNum + '注' + money + '元'})
    },
    buildData () {
      this.originArr = this.$store.state.buyArray
      console.log('输出1', this.$store.state.buyArray, this.originArr)

      var arr = this.originArr
      for (var i = 0; i < arr.length; i++) {
        var d = arr[i]
        this.buildOneBet(d)
      }
      // this.$store.commit('setMoney', this.totalMoney)
      // this.$store.commit('setBetNumber', this.totalBetNum)
      this.changeMoneyBar()
    },
    addOneData (data) {
      this.buildOneBet(data)
      this.changeMoneyBar()
    }
  },
  created () {
    this.buildData()
    this.playType = this.$store.state.playType
  }
}
</script>

<style scoped>
#buy-list{
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    overflow: hidden;
}
.top-v{
    padding-top: 0.133rem;
}
.bottom-v
{
    margin-left: 1.133rem;
}
.red-ball{
    color: red;
    font-size:0.293rem;
    margin-left: 0.266rem;
}
.blue-ball{
    display: inline-block;
    color: #1E90FF;
    margin-left: 0.266rem;
    font-size:0.293rem;
}

.flex-v-center
{
    display: -webkit-flex;/* Safari */
    display: flex;
    align-items: center;
 }
.flex-center{
    display: -webkit-flex;/* Safari */
    display: flex;
    justify-content: flex-start;
}
.flex-item
{
    align-self: flex-end;
}
.closeBtn{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    margin-left: 0.4rem;
}
li{
    height: 1.066rem;
    background: #F6F6F6;
    border-bottom-style: solid;
    border-bottom-color: #D3D3D3;
    border-bottom-width: 0.013rem;
}
</style>
