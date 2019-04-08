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
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      }
    },
    {
      path: '/houserules',
      name: 'House Rules',
      component: function () { 
        return import('./views/Houserules.vue');
      }
    },
    {
      path: '/diceroller',
      name: 'd20 Dice Roller',
      component: function () { 
        return import('./views/Diceroller.vue');
      }
    }
  ]
});
