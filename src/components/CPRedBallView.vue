<template>
  <div id="" class="bg_color">
    <div class="ball-div clearfix">
      <button class="ball red_color btn" v-for="item in redBalls" :key="item.id" v-bind:class='{red_ball_select:item.select}' v-on:click="ballChoose(item)">{{item.value}}</button>
    </div>
    <div class="ball-div clearfix blue_ball_div">
      <button class="ball blue_color btn" v-for="item in blueBalls" :key="item.id" v-bind:class='{blue_ball_select:item.select}' v-on:click="ballChoose(item)">{{item.value}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'redBallView',
  data () {
    return {
      select: false,
      redBalls: [],
      blueBalls: []
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
    ballChoose (ball) {
      ball.select = !ball.select
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
.ball-div{
  overflow: hidden;
  padding: 30px 0;

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
  width:30px;
  height:30px;
  line-height:30px;
  border: 1px solid #999;
  border-radius:15px;
  margin: 10px 10px 10px 10px
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
