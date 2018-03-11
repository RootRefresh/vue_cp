<template>
  <div class="">
    <ul class="clearfix">
      <li v-for="(item, index) in items" :key="item.id" @click="click(item, index)">
        <img v-bind:src=item.image>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      items: [{
        cls: 'home',
        name: '购彩',
        push: '/',
        image: require('../assets/image/goucai_h.png')
      },
      {
        cls: 'found',
        name: '发现',
        push: '/found',
        image: require('../assets/image/find.png')
      },
      {
        cls: 'user',
        name: '我的',
        push: '/user',
        image: require('../assets/image/my.png')
      }
      ],
      normal_images: [
        require('../assets/image/goucai.png'),
        require('../assets/image/find.png'),
        require('../assets/image/my.png')
      ],
      high_images: [
        require('../assets/image/goucai_h.png'),
        require('../assets/image/find_h.png'),
        require('../assets/image/my_h.png')
      ],
      cur: 0
    }
  },
  methods: {
    click (item, index) {
      this.items[this.cur].image = this.normal_images[this.cur]
      item.image = this.high_images[index]
      this.cur = index
    }
  },
  props: ['idx'],
  created () {
    this.cur = this.idx
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
div{
  height: 2.75rem;
}
  ul{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-top: 0.15625rem;
    height: 2.59375rem;
    font-size: 0.5625rem;
    background: #e3e3e3;
    border-top: 2px #dcdcdc solid;
  }
  li{
    float: left;
    width: 33.3%;
    overflow: hidden;
    text-align: center;
  }
  li:before {
    display: block;
    font-family: 'icons';
    line-height: 1.5625rem;
    font-size: 1.4375rem;
    color: #777;
  }
  li .home:before{
    content: ' ';
  }
  li .found:before{
    content: ' ';
  }
  li .user:before{
    content: ' ';
  }
  img{
    /*display: block;*/
    width: 35px;
    height: 35px;
  }
</style>
