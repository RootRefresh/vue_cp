<template>
  <div class="top">
    <p class="">彩票</p>
  </div>
</template>
<script>
export default {
  name: 'homeTop',
  data: () => ({
  })
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
  p {
    text-align: center;
    height: 64px;
    font-size: 26px;
    line-height: 64px;
    color: white;
    font-weight: bold;
  }
</style>
