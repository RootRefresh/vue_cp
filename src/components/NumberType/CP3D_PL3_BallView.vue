<template>
<div class="ball-div clearfix">
  <div v-show="zxShow" class="clearfix flex" v-for="n in 3" :key="n">
    <p class="">{{ ballTags[n - 1] }}</p>
    <div class="">
        <button class="ball btn red_color " :class='{ball_select:ball.select}' @click="ballChoose(ball)" v-for="ball in balls[n-1]"  :key="ball.id">
             {{ball.value}}
        </button>
    </div>
  </div>
  <div v-show="!zxShow" class="flex">
    <p>选号</p>
    <div class="">
      <button class="ball btn red_color " :class='{ball_select:ball.select}' @click="ballChoose(ball)" v-for="ball in balls[2]"  :key="ball.id">
        {{ball.value}}
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PL3BallView',
  data () {
    return {
      ballTags: ['百位', '十位', '个位'],
      balls: [],
      bArr: [],
      sArr: [],
      gArr: []
    }
  },
  props: ['zxShow'],
  methods: {
    createBall () {
      for (var j = 0; j < 3; j++) {
        var tmpArr = []
        for (var i = 0; i < 10; i++) {
          tmpArr.push({select: false, value: i, tag: (j * 10 + i)})
        }
        this.balls.push(tmpArr)
      }
    },
    removeByValue (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          arr.splice(i, 1)
          break
        }
      }
    },
    ballChoose (ball) {
      ball.select = !ball.select
      var tag = ball.tag
      var isSelect = ball.select
      if (tag < 10) {
        isSelect ? this.bArr.push(ball.value) : this.removeByValue(this.bArr, ball.value)
      } else if (tag < 20) {
        isSelect ? this.sArr.push(ball.value) : this.removeByValue(this.sArr, ball.value)
      } else {
        isSelect ? this.gArr.push(ball.value) : this.removeByValue(this.gArr, ball.value)
      }
      this.$emit('ballClick', this.bArr, this.sArr, this.gArr)
    },
    clear () {
      for (var j = 0; j < 3; j++) {
        var tmpArr = this.balls[j]
        for (var i = 0; i < 10; i++) {
          var ball = tmpArr[i]
          ball.select = false
        }
      }
    }
  },
  created () {
    this.createBall()
  }
}
</script>

<style scoped>
  @import url('../../assets/css/home.css');
  .ball-div{
    overflow: hidden;
    padding: 0.4rem 0;
  }
  .ball{
    text-align:center;
    vertical-align:middle;
    width:0.7rem;
    height:0.7rem;
    line-height:0.7rem;
    border: 0.013rem solid #999;
    border-radius:0.35rem;
    margin: 0.266rem;
  }
  .red_color{
    color:red;
  }
  .ball_select{
    color:white;
    background-color:red;
  }
  p{
    color: white;
    background: red;
    height: 0.533rem;
    line-height: 0.533rem;
    margin-left: 0.266rem;
    margin-top: 0.333rem;
    width: 1rem;
    text-align: center;
  }
  .flex {
      display: flex;
      justify-content: flex-start;
      /*flex-wrap: wrap;*/
      /*align-items: center;*/
  }
</style>
