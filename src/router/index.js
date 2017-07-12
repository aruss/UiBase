import Vue from 'vue';
import Router from 'vue-router';

const Dashboard = () => import('@/pages/examples/dashboard.vue');
const AllInOne = () => import('@/pages/examples/allinone.vue');

// https://router.vuejs.org/en/advanced/lazy-loading.html
const mymoduleFoosList = () =>
  import(/* webpackChunkName: "group-examples" */ '@/pages/examples/list.vue');

const mymoduleFoosDetails = () =>
  import(/* webpackChunkName: "group-examples" */ '@/pages/examples/details.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/allinone',
      name: 'allinone',
      component: AllInOne
    },
    {
      path: '/mymodule/foos',
      name: 'mymodule-foos-list',
      component: mymoduleFoosList
    },
    {
      path: '/mymodule/foos/:id',
      name: 'mymodule-foos-details',
      component: mymoduleFoosDetails
    }
  ]
})
