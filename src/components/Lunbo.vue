<template>
  <div class="bfc">
    <swiper class="box-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="image in images" :key="image.key">
          <img v-bind:src=image alt="">
        </swiper-slide>
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
      },
      images: ['http://img.xiacaidd.com/iqucai/images/add/2016080322204935.jpg',
        'http://img.xiacaidd.com/iqucai/images/add/2016080322211817.jpg',
        'http://img.xiacaidd.com/iqucai/images/add/2016080322213796.jpg',
        'http://img.xiacaidd.com/iqucai/images/add/2016080322220746.jpg'
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.bfc{
  margin-top: 55px;
  /*overflow: hidden;*/
  /*position: relative;*/
}
.swiper-container{
    width: 100%;
    height: 200px;
}
.swiper-slide{
    background: orange;
}
</style>
