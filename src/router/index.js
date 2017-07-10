import Vue from 'vue';
import Router from 'vue-router';

// https://router.vuejs.org/en/advanced/lazy-loading.html
const Dashboard = () => import('@/pages/dashboard/dashboard.vue');
const Identity = () => import(/* webpackChunkName: "group-identity" */ '@/pages/identity/identity.vue');
const IdentityClientList = () => import(/* webpackChunkName: "group-identity" */ '@/pages/identity/client-list.vue');
const IdentityClientDetails = () => import(/* webpackChunkName: "group-identity" */ '@/pages/identity/client-details.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/identity',
      name: 'identity',
      component: Identity
    },
    {
      path: '/identity/clients',
      name: 'identity-clients-list',
      component: IdentityClientList
    },
    {
      path: '/identity/clients/:id',
      name: 'identity-clients-details',
      component: IdentityClientDetails
    }
  ]
})
