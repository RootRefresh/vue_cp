<template>
  <div id="betNumberBar">
    <div class="flex">
        <div>
          <span>投</span> <input type="text" v-model="termNumber"> <span>期</span>
        </div>
        <div>
          <span>投</span> <input type="text" v-model="multiNumber" @input="inputFunc"> <span>倍</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'bet-number-bar',
  data () {
    return {
      termNumber: 1,
      multiNumber: 1
    }
  },
  methods: {
    inputFunc () {
      this.$emit('multiChange', this.multiNumber)
    }
  }
  // props: ['termNumber', 'multiNumber']
}
</script>

<style scoped>
#betNumberBar{
  position: fixed;
  bottom: 1.333rem;
  height: 0.533rem;
  background: #E3E3E3;
  width: 100%;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 0.533rem;
}
input {
    width: 1.333rem;
    text-align: center;
}
</style>
