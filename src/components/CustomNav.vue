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
    z-index: 2;
    width: 100%;
    height: 1.706rem;
    background-color: #00B478;
    position: fixed;
  }
  .float_left{
    float: left;
  }
  button{
    margin: 0.533rem 0 auto 0.4rem;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 0.373rem;
  }
  p{
margin-left: 30%;
    color: #F6F6F6;
    font-weight: bold;
    font-size: 0.48rem;
    line-height: 1.706rem;
    height: 1.706rem;
  }
</style>
