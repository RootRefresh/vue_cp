import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buyDic: {},
    betArray: []
  },
  mutations: {
    setBuyDic (state, d) {
      state.buyDic.red = d.red
      state.buyDic.blue = d.blue
      state.buyDic.betNum = d.betNum
      state.buyDic.money = d.money
    },
    setArray (state, a) {
      state.betArray = a
    }
  }
})
