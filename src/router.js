import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'DnD Adventure System - Pocket DM'
      },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About DnDAS PocketDM'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      }
    },
    {
      path: '/tools',
      // name: 'Tools',
      pageTitle: 'Tools',
      component: function () {
        return import('./views/Tools.vue');
      },
      children: [
        {
          path: 'sequenceofplay',
          name: 'seqplayref',
          meta: {
            title: 'Sequence of Play',
            description: 'The player turn reference'
          },
          component: function () {
            return import('./views/tools/sequenceplay.vue');
          }
        },
        {
          path: 'd20diceroller',
          name: 'd20roller',
          meta: {
            title: 'd20 Dice Roller',
            description: 'd20 dice roller'
          },
          component: function () {
            return import('./views/tools/diceroller.vue');
          }
        },
        {
          path: 'houserules',
          name: 'houserules',
          meta: {
            title: 'House Rules',
            description: 'Some house rules for the D&D Adventure System, pick one or apply them all on your next adventure.'
          },
          component: function () {
            return import('./views/tools/houserules.vue');
          }
        },
        {
          path: 'herogen',
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
          path: 'monstergen',
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
          path: 'adventuregen',
          name: 'adventuregen',
          meta: {
            title: 'Adventure Generator',
            description: 'Adventure generator - play once or string a couple as a campaign'
          },
          component: function () {
            return import('./views/tools/adventuregen.vue');
          }
        },
        {
          path: 'endless',
          name: 'endless',
          meta: {
            title: 'Endless Dungeon Rules',
            description: 'Endless Dungeon Rules - Get in, how long will you last?'
          },
          component: function () {
            return import('./views/tools/adventureendless.vue');
          }
        },
        {
          path: '',
          name: 'tools',
          meta: {
            title: 'Tools',
            description: 'Tools for your D&D Adventure System Board Game'
          },
          component: function () {
            return import('./views/tools/nav.vue');
          }
        }
      ]
    }
  ]
});
