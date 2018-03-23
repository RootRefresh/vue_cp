<template>
    <div id="add-bet" class="clearfix">
      <div class="bet-div">
      <button @click="addBySelf">自选一注</button>
      <button @click="addByComputer">机选一注</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'addBet',
  methods: {
    addBySelf () {
      this.$router.go(-1)
    },
    addByComputer () {
      this.$emit('randomOneBet')
    }
  }
}
</script>

<style scoped>
  #add-bet{
    position: fixed;
    top: 1.706rem;
    z-index: 2;
    height: 1.2rem;
    background: #cdcdcd;
    width: 100%;
  }
.bet-div{
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
button{
    margin: auto 0.266rem;
    height: 0.666rem;
    width: 1.866rem;
    background: #fff;
}
</style>
