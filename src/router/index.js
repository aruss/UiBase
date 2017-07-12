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

let router = new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/allinone',
      component: AllInOne
    },
    {
      path: '/mymodule/foos',
      component: mymoduleFoosList
    },
    {
      path: '/mymodule/foos/:id',
      component: mymoduleFoosDetails
    }
  ]
});

router.afterEach((to, from) => {

  window.$broadcast('routechanged', { to: to, from: from });
});

export default router;
