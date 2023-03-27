import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentNav: 'home',
    goTopShow: false
  },
  getters: {
    getCurrentNav: state => {
      return state.currentNav
    },
    getGoTopShow: state => {
      return state.goTopShow
    }
  },
  mutations: {
    UPDATE_CURRENT_NAV: (state, value) => {
      state.currentNav = value
    },
    UPDATE_GO_TOP_SHOW: (state, value) => {
      state.goTopShow = value
    }
  },
  actions: {

  }
})
