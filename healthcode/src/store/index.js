import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hname : '',
    hID_: '',
    hphone : '',
  },
  mutations: {
    updateUserInfo(state,userinfo){
        state.hname = userinfo.uname;
        state.hID_ = userinfo.uID_;
        state.hphone = userinfo.uphone;
    }
  },
  actions: {
  },
  modules: {
  }
})
