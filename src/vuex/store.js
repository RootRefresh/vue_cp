import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buyDic: {},
    buyArray: [],
    totalMoney: 0,
    totalBetNum: 0,
    redCount: 0,
    blueCount: 0
  },
  mutations: {
    setBuyDic (state, d) {
      state.buyDic.red = d.red
      state.buyDic.blue = d.blue
      state.buyDic.betNum = d.betNum
      state.buyDic.money = d.money
    },
    pushBuyArray (state, dic) {
      state.buyArray.push(dic)
    },
    insertBuyArray (state, dic) {
      state.buyArray.unshift(dic)
    },
    setBuyArray (state, arr) {
      state.buyArray = arr
    },
    setMoney (state, m) {
      state.totalMoney = m
    },
    setBetNumber (state, num) {
      state.totalBetNum = num
      alert(num)
    },
    setRedCount (state, num) {
      state.redCount = num
    },
    setBlueCount (state, num) {
      state.blueCount = num
    }
  },
  actions: {
  }
})
