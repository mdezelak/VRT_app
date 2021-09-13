import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: {
      path: "http://localhost:3000",
    },
  },
  mutations: {
    setStateData(state, data) {
      Vue.set(state[data[0]], [data[1]], data[2]);
    },
  },
  actions: {},
  modules: {},
});
