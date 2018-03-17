<template>
  <div class="clearfix">
    <button class="btn clear_btn" @click="clear"></button>
    <p class="money">{{betNum}} 注 共 <span>{{money}}</span> 元</p>
    <button class="btn next_btn" @click="next">下一步</button>
  </div>
</template>

<script>
export default {
  name: 'selectBar',
  data () {
    return {
    }
  },
  methods: {
    clear () {
      this.$emit('clearBallSelect')
    },
    next () {
      this.$emit('toBuy')
    }
  },
  props: ['betNum', 'money']
}
</script>

<style scoped>
  @import '../assets/css/home.css';
  div{
    border-top-width: 1px;
    border-top-color: #999999;
    border-top-style: solid;
    height: 1.333rem;
    background-color: #F6F6F6;
  }
  .clear_btn{
    background:url("../assets/image/clear.png");
    background-size: 0.533rem 0.8rem;
    width: 0.533rem;
    height: 0.8rem;
    border: none;
    margin: 0.2rem 0 0 0.533rem;
    float: left;
  }
  .next_btn{
    float: right;
    width: 2rem;
    height: 0.8rem;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    background-color: #00B478;
    color: white;
    font-size: 0.4rem;
  }
  .money{
    float: left;
    font-size: 16px;
    margin: 0.3rem 0 0 3rem;
  }
  span{
    color: red;
  }
</style>
