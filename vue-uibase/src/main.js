import Vue from 'vue';
import App from './components/app/app.vue';
import RouterBuilder from './router-builder.js';
import MenuBuilder from './menu-builder.js';

Vue.config.productionTip = false;
Vue.config.devtools = true;

function UiBaseCore() {

  this.global = {
    isAsideFolded: false,
    isHeaderFixed: true
  };
  this.vue;

  // router
  let router = new RouterBuilder(this);
  this.addRoute = (val) => {

    router.addRoute(val);
  };

  // sidebar
  let asideMenu = new MenuBuilder(this);
  this.aside = {
    addItems: asideMenu.addItems,
    getTree: asideMenu.getTree
  };

  // header
  let headerComponents = [];
  this.header = {
    addComponent: (component) => {

      headerComponents.push(component);
    },
    getComponents: () => {

      return headerComponents;
    }
  };

  // bus
  let bus = new Vue();
  this.broadcast = (name, data) => {

    console.log("boradcasting", name, data);
    bus.$emit(name, data);
  }

  this.on = function (name, func) {

    bus.$on(name, func);
  };

  this.initialize = () => {

    this.vue = new Vue({
      el: '#app',
      router: router.buildRouter(),
      template: '<App/>',
      components: {
        App
      }
    });

    // Add dev page
    uiBase.addRoute([{
      path: '/examples/allinone',
      component: () => import ('./pages/examples/allinone.vue')
    }]);

    uiBase.header.addComponent({
      key: 'aside-toggle',
      component: () => import ('./components/app/header-toggle.vue'),
      data: {
        event: 'aside-toggle'
      }
    });

    // Shortcut for calling <a v-on:click.stop="$broadcast('funky')">
    Vue.mixin({
      methods: {
        $broadcast(name, data) {

          uiBase.broadcast(name, data);
        }
      }
    });

  }
}

// Expose to window
const uiBase = window.UiBase = new UiBaseCore();

export default uiBase;

/*
  // Adds a menu entry to sidebar
  UiBase.aside.addItem();

  // Adds a extra component to sidebar
  UiBase.aside.addComponent();

  // Adds a header component
  UiBase.header.addComponent();
*/
