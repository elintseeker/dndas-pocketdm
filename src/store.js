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
    },
    heroskills: {
      CR: true,
      WoA: false,
      LoD: false
    },
    hp: {
      heroes: 1,
      hero1: 8,
      hero2: 0,
      hero3: 0,
      hero4: 0,
      // classes: {
      //   cleric: {
      //     name: "Cleric", basehp: 8
      //   },
      //   fighter: {
      //     name: "Fighter/Paladin", basehp: 10
      //   },
      //   mage: {
      //     name: "Sorcerer/Wizard", basehp: 6
      //   },
      //   rogue: {
      //     name: "Ranger/Rogue", basehp: 8
      //   }
      // }
    }
  },
  mutations: {

  },
  actions: {

  }
});
