<template>
  <div id="ball_bg" class="bg_color">
    <div class="ball-div clearfix">
      <button class="ball red_color btn" v-for="item in redBalls" :key="item.id" v-bind:class='{red_ball_select:item.select}' v-on:click="ballChoose(item,true)">{{item.value}}</button>
    </div>
    <div class="ball-div clearfix blue_ball_div">
      <button class="ball blue_color btn" v-for="item in blueBalls" :key="item.id" v-bind:class='{blue_ball_select:item.select}' v-on:click="ballChoose(item,false)">{{item.value}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SSQBallView',
  data () {
    return {
      select: false,
      redBalls: [],
      blueBalls: [],
      selectRedBalls: [],
      selectBlueBalls: [],
      redNumber: 0,
      blueNumber: 0
    }
  },
  methods: {
    clear () {
      for (var i = 0; i < 35; i++) {
        var red = this.redBalls[i]
        red.select = false
      }
      for (var j = 0; j < 12; j++) {
        var blue = this.blueBalls[j]
        blue.select = false
      }
      this.selectRedBalls = []
      this.selectBlueBalls = []
    },
    removeByValue (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
          arr.splice(i, 1)
          break
        }
      }
    },
    ballChoose (ball, isRed) {
      ball.select = !ball.select
      if (isRed) {
        ball.select ? this.selectRedBalls.push(ball.value) : this.removeByValue(this.selectRedBalls, ball.value)
      } else {
        ball.select ? this.selectBlueBalls.push(ball.value) : this.removeByValue(this.selectBlueBalls, ball.value)
      }
      this.$emit('ballClick', this.selectRedBalls, this.selectBlueBalls)
    },
    createBall () {
      if (this.$store.state.lotteryName === '双色球') {
        this.redNumber = 33
        this.blueNumber = 16
      } else {
        this.redNumber = 35
        this.blueNumber = 12
      }
      for (var i = 0; i < this.redNumber; i++) {
        var r = (i + 1) < 10 ? '0' + (i + 1) : (i + 1)
        this.redBalls.push({select: false, value: r})
      }
      for (var j = 0; j < this.blueNumber; j++) {
        var b = (j + 1) < 10 ? '0' + (j + 1) : (j + 1)
        this.blueBalls.push({select: false, value: b})
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
#ball_bg{
    height:13.946rem
}
.ball-div{
  overflow: hidden;
  padding: 0.4rem 0;

}
.blue_ball_div{
  border-top-color: #999;
  border-top-width: 0.5px;
  border-top-style: solid;
}
.ball{
  float: left;
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
.red_ball_select{
  color:white;
  background-color:red;
}
.blue_color{
  color:dodgerblue;
}
.blue_ball_select{
  color: white;
  background-color: dodgerblue;
}

</style>
