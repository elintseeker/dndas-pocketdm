import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rolls: 0,
    rollHistory: [],
    quest: {
      game: "CR",
      type: null,
      intro: null,
      item: null,
      villain: null,
      tile: null,
      extraTile: null
    }
  },
  mutations: {

  },
  actions: {

  }
});
