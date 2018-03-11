<template>
  <div class="clearfix">
    <button class="btn clear_btn" @click="clear"></button>
    <button class="btn next_btn">下一步</button>
  </div>
</template>

<script>
export default {
  name: 'selectBar',
  methods: {
    clear () {
      this.$emit('clearBallSelect')
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/home.css';
  div{
    border-top-width: 1px;
    border-top-color: #999999;
    border-top-style: solid;
    height: 50px;
    background-color: #F6F6F6;
  }
  .clear_btn{
    background:url("../assets/image/clear.png");
    background-size: 20px 30px;
    width: 20px;
    height: 30px;
    border: none;
    margin: 10px 0 0 20px;
  }
  .next_btn{
    float: right;
    width: 75px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
    background-color: #00B478;
    color: white;
    font-size: 15px;
  }
</style>
