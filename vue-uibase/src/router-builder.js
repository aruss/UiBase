import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

function routerBuilder () {

  let _routes = {};

  this.buildRouter = () => {

    let router = new VueRouter({
      routes: Object.values(_routes)
    });

    router.afterEach((to, from) => {

      window.$broadcast('routechanged', { to: to, from: from });
    });

    return router;
  };

  this.addRoute = (val) => {

    if (Array.isArray(val)) {

      val.forEach(addRoute);
    } else {

      addRoute(val);
    }

    return this;
  };

  function addRoute(route) {
    // TODO: do object validation
    // TODO: check duplicate routes

    if (addRoute[route.path]) {

      // TODO: prevent webpack from removing the console.log statement
      console.error(`Route with path ${route.path} is already defined`);
    } else {

      _routes[route.path] = route;
    }
  }
};

export default routerBuilder;
