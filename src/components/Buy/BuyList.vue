<template>
  <div id="buy-list">
    <ul>
      <li class="" v-for="item in tmp" :key="item.id">
         <!--<div class="flex-center">-->
            <div class="top-v">
              <button class="closeBtn" @click="close(item)">x</button>
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
      tmp: []
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
    close (item) {
      this.removeByValue(this.tmp, item)
    }
  },
  created () {
    var d = this.$store.state.buyDic
    var red = d.red.join(' ')
    var blue = d.blue.join(' ')
    var betNum = d.betNum
    var money = d.money
    this.tmp.push({'red': red, 'blue': blue, 'way': '单式投注', money: betNum + '注' + money + '元'})
    console.log(d)
  }
}
</script>

<style scoped>
#buy-list{
    margin-top: 0.133rem;
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
