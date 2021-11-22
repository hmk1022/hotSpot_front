import Vue from "vue";
import Vuex from "vuex";
import { spotStore } from "@/store/spot";

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: false,
  state: { test: "test" },
  mutations: {},
  actions: {},
  modules: {
    spotStore: spotStore,
  },
});

export default store;
