<template>
  <div>
    <p>1注 共2元</p>
    <button>付款</button>
    <button>合买</button>
  </div>
</template>

<script>
export default {
  name: 'money-bar'
}
</script>

<style scoped>
div{
    position: fixed;
    bottom: 0;
    height: 1.333rem;
    background: #F6F6F6;
    width: 100%;
}
p{
    float: left;
    margin-left: 0.2rem;
    margin-top: 0.266rem;
    font-size: 0.4rem;
}
button{
    float: right;
    margin: 0.333rem 0.133rem;
    width: 1.066rem;
    height: 0.533rem;
}

</style>
