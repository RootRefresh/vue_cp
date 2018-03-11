<template>
  <div class="container">
    <customNav></customNav>
    <topTimerView></topTimerView>
    <redBallView ref="ballView"></redBallView>
    <selectBar v-on:clearBallSelect="clear"></selectBar>
  </div>
</template>

<script>
import CustomNav from './CustomNav'
import TopTimerView from './CPTopTimerView'
import RedBallView from './CPRedBallView'
import SelectBar from './CPSelectBar'
export default {
  name: 'SSQ',
  data () {
    return {
      msg: 'Welcome  dd to Your Vue.js App'
    }
  },
  methods: {
    clear () {
      this.$refs.ballView.clear()
    }
  },
  components: {
    TopTimerView,
    RedBallView,
    SelectBar,
    CustomNav
  }
}
</script>
