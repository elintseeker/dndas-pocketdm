import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Helper from './helper';


Vue.config.productionTip = false;

// construct the page titles
router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;
  const defaultTitle = ' - DnD Adventure System Pocket DM'; 

  document.title = pageTitle + ' ' + defaultTitle;
  next();
});

Vue.mixin(Helper);

new Vue({
  router,
  store,
  render: function (h) { return h(App); }
}).$mount('#app');