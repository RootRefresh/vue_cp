
<template>
  <div class="hello">
    <!--<div v-swiper:mySwiper="swiperOption" @someSwiperEvent="callback" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">One</div>
            <div class="swiper-slide">Two</div>
            <div class="swiper-slide">Three</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>-->
    <swiper class="box-container" :options="swiperOption" ref="mySwiper">

    		<swiper-slide><p>One</p></swiper-slide>
    		<swiper-slide><p>Two</p></swiper-slide>
    		<swiper-slide><p>Three</p></swiper-slide>

    		<div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        preventClicks: false
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("swiper/dist/css/swiper.css");
.swiper-container{
    width: 400px;
    height: 200px;
}
.swiper-slide{
    background: orange;
}
</style>
