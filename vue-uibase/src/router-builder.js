import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

function RouterBuilder(uiBase) {

  let routes = {};

  this.buildRouter = () => {

    let router = new VueRouter({
      routes: Object.values(routes)
    });

    router.afterEach((to, from) => {

      uiBase.broadcast('routechanged', {
        to: to,
        from: from
      });
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

      routes[route.path] = route;
    }
  }
};

export default RouterBuilder;
