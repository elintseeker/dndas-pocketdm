import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'D&D Adventure System - Pocket DM'
      },
      component: function () {
        return import('./views/Tools.vue');
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      }
    },
    {
      path: '/sequenceofplay',
      name: 'seqplayref',
      meta: {
        title: 'Sequence of Play',
        description: 'Standard player turn reference'
      },
      component: function () {
        return import('./views/tools/sequenceplay.vue');
      }
    },
    {
      path: '/d20diceroller',
      name: 'd20roller',
      meta: {
        title: 'd20 Dice Roller',
        description: 'Simple d20 dice roller'
      },
      component: function () {
        return import('./views/tools/diceroller.vue');
      }
    },
    {
      path: '/hitpointtracker',
      name: 'hptracker',
      meta: {
        title: 'Hero Hit Point Tracker',
        description: 'Hit Point Tracker for your heroes (4 max)'
      },
      component: function () {
        return import('./views/tools/hptracker.vue');
      }
    },
    {
      path: '/houserules',
      name: 'houserules',
      meta: {
        title: 'House Rules',
        description: 'House rules for the D&D Adventure System, pick one or apply them all on your next adventure.'
      },
      component: function () {
        return import('./views/homebrew/houserules.vue');
      }
    },
    {
      path: '/gauntlet',
      name: 'gauntlet',
      meta: {
        title: 'The Gauntlet',
        description: 'Boss Rush, D&D Adventure System Style'
      },
      component: function () {
        return import('./views/homebrew/gauntlet.vue');
      }
    },
    {
      path: '/herogen',
      name: 'herogen',
      meta: {
        title: 'What hero should I play today?',
        description: 'What will you be today?'
      },
      component: function () {
        return import('./views/tools/herogen.vue');
      }
    },
    {
      path: '/monstergen',
      name: 'monstergen',
      meta: {
        title: 'Monster Encounter Generator',
        description: 'Generate a monster token for that tile, event, or encounter'
      },
      component: function () {
        return import('./views/tools/monstergen.vue');
      }
    },
    {
      path: 'treasuregen',
      name: 'treasuregen',
      meta: {
        title: 'Treasure Generator',
        description: 'Generate a treasure token for that monster, tile, or encounter'
      },
      component: function () {
        return import('./views/tools/treasuregen.vue');
      }
    },
    {
      path: '/adventuregen',
      name: 'adventuregen',
      meta: {
        title: 'Adventure Generator',
        description: 'Adventure generator - Play once or string a couple as a campaign'
      },
      component: function () {
        return import('./views/tools/adventuregen.vue');
      }
    },
    {
      path: '/endless',
      name: 'endless',
      meta: {
        title: 'Endless Dungeon Rules',
        description: 'Endless Dungeon Rules - Get in, but how long will you last?'
      },
      component: function () {
        return import('./views/homebrew/adventureendless.vue');
      }
    },
    {
      path: '/keeper',
      name: 'keeper',
      meta: {
        title: 'Keeper Rules',
        description: 'Keeper - A variant where a player controls the monsters and encounters'
      },
      component: function () {
        return import('./views/homebrew/keeper.vue');
      }
    }
  ]
});
