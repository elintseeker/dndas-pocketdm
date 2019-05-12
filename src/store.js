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
      hitpoints: 0,
      hero: {
        cleric: {
          name: "Cleric",
          hp: 8
        },
        fighter: {
          name: "Fighter/Paladin",
          hp: 10
        },
        mage: {
          name: "Sorcerer/Wizard",
          hp: 6
        },
        rogue: {
          name: "Ranger/Rogue",
          hp: 8
        }
      }
    }
  },
  mutations: {

  },
  actions: {

  }
});
