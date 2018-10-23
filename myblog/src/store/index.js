import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import router_url from './modules/router_url'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{},
  modules: {
    user,
    router_url
  },
  mutations,
  actions,
  getters
})

export default store