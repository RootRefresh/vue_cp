<template>
  <div id=" " class="main-list clearfix">
    <div id=" " class="clearfix redBall-div">
       <p class="redBall redColor" v-for="item in items" v-bind:class='{ballSelect:item.select}' v-on:click="ballChoose(item)">{{item.value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'redBallView',
  data() {
    return {
        select: false,
        items: [
          {select: false, value: 1},
          {select: false, value: 2},
          {select: false, value: 3},
          {select: false, value: 4},
          {select: false, value: 5},
          {select: false, value: 6},
          {select: false, value: 7},
          {select: false, value: 8},
          {select: false, value: 9},
          {select: false, value: 10},
        ],
    }
  },
  methods: {
    ballChoose (item){
      item.select = !item.select;
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/home.css');
.redBall-div{
  overflow: hidden;
  border-bottom:thick solid #999;
  border-bottom-width:1px;
}
.redBall{
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
.redColor{
  color:red;
}
.ballSelect{
  color:white;
  background-color:red;
}
</style>
