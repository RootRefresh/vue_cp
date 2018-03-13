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
    z-index: 2;
    width: 100%;
    height: 1.706rem;
    background-color: #00B478;
    position: fixed;
  }
  p {
    text-align: center;
    height: 1.706rem;
    font-size: 0.533rem;
    line-height: 1.706rem;
    color: white;
    font-weight: bold;
  }
</style>
