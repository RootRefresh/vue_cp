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
/**{
    margin: 0;
    padding: 0;
}*/
.bfc{
  padding-top: 1.706rem;
  /*overflow: hidden;*/
  /*position: relative;*/
}
img,
.swiper-container{
    width: 100%;
    height: 4rem;
}
.swiper-slide{
    background: orange;
}
</style>
