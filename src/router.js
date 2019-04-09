import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DnD Adventure System Pocket DM',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About the app'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      }
    },
    {
      path: '/encounters',
      name: 'encounters',
      meta: {
        title: 'Encounters'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Encounters.vue');
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
          },
          component: function () { 
            return import('./views/tools/houserules.vue');
          }
        },
        {
          path: '',
          name: 'tools',
          meta: {
            title: 'Tools',
          },
          component: function () { 
            return import('./views/tools/nav.vue');
          }
        }
      ]
    }
  ]
});
