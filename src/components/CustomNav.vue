<template>
   <div class="top clearfix">
       <!--<div class="back-btn">-->
           <button class="back-btn float_left" @click="back">返回</button>
       <!--</div>-->
     <p class="center-title" v-if="showTitle">{{this.$store.state.myTitle}}</p>
     <p class="center-title" v-if="!showTitle" @click="navClick">测试</p>
   </div>
</template>

<script>
export default {
  name: 'custom-nav',
  data () {
    return {
      navShow: false
    }
  },
  methods: {
    back () {
      console.log(window.history.length)
      // window.history.length > 1
      //   ? this.$router.go(-1)
      //   : this.$router.push('/')
      this.$router.go(-1)
    },
    navClick () {
      this.navShow = !this.navShow
      this.$emit('navClick', this.navShow)
    }
  },
  props: ['showTitle'],
  created () {

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
    /*display: flex;
    justify-content: center;*/
  }
  .center-title{
      display: flex;
      justify-content: center;
      overflow: hidden;
  }
  .back-btn{
      /*display: inline;*/
  }
  .float_left{
    position: absolute;
  }
  button{
    margin: 0.533rem 0 auto 0.4rem;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 0.373rem;
    width: 0.8rem;
  }
  p{
/*margin-left: 30%;*/
    color: #F6F6F6;
    font-weight: bold;
    font-size: 0.48rem;
    line-height: 1.706rem;
    height: 1.706rem;
  }
</style>
