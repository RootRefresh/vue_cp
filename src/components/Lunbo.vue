<template>
  <div>
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
  name: 'lunbo',
  data () {
    return {
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
