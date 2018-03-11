<template>
   <div class="top clearfix">
     <button class="float_left" @click="back">返回</button>
     <p class="float_left">双色球</p>
   </div>
</template>

<script>
export default {
  name: 'custom-nav',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/home.css';
  .top{
    top: 0;
    z-index: 9;
    width: 100%;
    height: 64px;
    background-color: #00B478;
    position: fixed;
  }
  .float_left{
    float: left;
  }
  button{
    margin: 20px 0 auto 15px;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 14px;
  }
  p{
    margin-top: 18px;
    margin-left: 30%;
    color: #F6F6F6;
    font-weight: bold;
    font-size: 18px;
  }
</style>
