import Vue from 'vue';
import Index from './pages/index.vue';
import router from './composables/router';

new Vue({
  router,
  render: h => h(Index)
}).$mount('#index');