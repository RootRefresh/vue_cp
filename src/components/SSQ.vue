<template>
  <div>
      <topTimerView></topTimerView>
      <redBallView></redBallView>
  </div>
</template>

<script>
import TopTimerView from './CPTopTimerView'
import RedBallView from  './CPRedBallView'

export default {
  name: 'SSQ',
  data () {
    return {
      msg: 'Welcome  dd to Your Vue.js App'
    }
  },components: {
    TopTimerView,RedBallView
  }
}
</script>
