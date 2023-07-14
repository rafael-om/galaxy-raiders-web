import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/index.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('./pages/game.vue')
  },
  {
    path: '/score',
    name: 'Score',
    component: () => import('./pages/score.vue')
  },
  // Adicione outras rotas aqui conforme necessário
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;