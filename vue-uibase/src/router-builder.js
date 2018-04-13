import Vue from 'vue'
import VueRouter from 'vue-router'

function RouterBuilder(uiBase) {

  let _routes = {};

  this.buildRouter = () => {

    // TODO: set default route if no "/" route is defined...

    let router = new VueRouter({
      routes: Object.values(_routes)
    });

    router.afterEach((to, from) => {

      uiBase.broadcast('routechanged', {
        to: to,
        from: from
      });
    });

    return router;
  };

  this.addRoutes = (routes) => {

    routes.forEach(this.addRoute);
    return this;
  };

  this.addRoute = (route) => {
    // TODO: do object validation
    // TODO: check duplicate routes

    if (_routes[route.path]) {

      // TODO: prevent webpack from removing the console.log statement
      console.error(`Route with path ${route.path} is already defined`);
    } else {

      _routes[route.path] = route;
    }
  }
};

export default RouterBuilder;
