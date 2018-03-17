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
      selectBlueBalls: []
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
      for (var i = 0; i < 35; i++) {
        this.redBalls.push({select: false, value: i + 1})
      }
      for (var j = 0; j < 12; j++) {
        this.blueBalls.push({select: false, value: j + 1})
      }
    }
  },
  created () {
    this.createBall()
  }
}
</script>

<style scoped>
@import url('../assets/css/home.css');
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
