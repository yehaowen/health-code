import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hname : '',
    hID : ''
  },
  mutations: {
    updateUserInfo(state,userinfo){
      state.hname = userinfo.hname;
      state.hID = userinfo.hID;
      // console.log(state.hname,state.hID);
    }
  },
  actions: {
  },
  modules: {
  }
})
