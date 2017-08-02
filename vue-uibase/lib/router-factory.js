import Vue from 'vue';
import VueRouter from 'vue-router';
import Lazy from 'lazy.js';

Vue.use(VueRouter);

export default class RouterFactory
{
  constructor()
  {
    this.routes = [{
      name: 'home',
      path: '/',
      component: () => import('./pages/examples/allinone.vue')
    }];
  }

  createRouter()
  {
    let router = new VueRouter({
      routes: this.routes
    });

    router.afterEach((to, from) =>
    {
      window.$broadcast('routechanged', { to: to, from: from });
    });

    return router;
  }

  addRoute(route)
  {
    // TODO: check if route is already defined ...

    this.routes.push(route);
  }
}