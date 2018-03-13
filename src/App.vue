<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  methods: {

  }
}
</script>

<style>
@import url("assets/css/home.css");
</style>
