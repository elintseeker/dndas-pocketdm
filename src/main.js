import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const pageTitle = to.name;
  const defaultTitle = ' - DnD Adventure System Pocket DM'; // page title

  document.title = pageTitle + ' ' + defaultTitle;
  next();
});

new Vue({
  router,
  store,
  render: function (h) { return h(App); }
}).$mount('#app');