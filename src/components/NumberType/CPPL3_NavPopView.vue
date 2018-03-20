<template>
    <div>
      <div class="navPopView">
        <button class="btn" v-for="n in 3" :key="n" @click="btnClick(n)">{{tags[n-1]}}</button>
      </div>
      <div class="blackView" @click="dissBlackView">
      </div>
    </div>
</template>

<script>
export default {
  name: 'navPopView',
  data () {
    return {
      tags: ['直选', '组选三', '组选六']
    }
  },
  methods: {
    btnClick (type) {
      var playType = ''
      switch (type) {
        case 1:
          playType = '直选'
          break
        case 2:
          playType = '组选三'
          break
        case 3:
          playType = '组选六'
          break
      }
      this.$emit('choosePlayType', playType)
    },
    dissBlackView () {
      this.$emit('dissBlackView')
    }
  }
}
</script>

<style scoped>
  @import url("../../assets/css/home.css");
  .navPopView{
    position: fixed;
    top: 1.706rem;
    height: 1.066rem;
    background: #ebebeb;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
.blackView{
    z-index: 10;
    position: fixed;
    top: 2.772rem;
    bottom: 0;
    background: #333;
    height: 100%;
    width: 100%;
    opacity: 0.3;
}
button {
    color: #333;
    font-size: 0.373rem;
    height: 0.533rem;
    width: 2.133rem
}
</style>
