import Vue from 'vue';
import App from './components/app/app.vue';
import RouterBuilder from './router-builder.js';
import ListBuilder from './list-builder.js';

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
  this.aside = {
    menu: new ListBuilder(this),
    components: new ListBuilder(this)
  };

  // header
  this.header = {
    menu: new ListBuilder(this),
    components: new ListBuilder(this)
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
  }
}

// Expose to window
const uiBase = window.UiBase = new UiBaseCore();

// Shortcut for calling <a v-on:click.stop="$broadcast('funky')">
Vue.mixin({
  methods: {
    $broadcast(name, data) {

      uiBase.broadcast(name, data);
    }
  }
});

// Add dev page
uiBase.addRoute([{
  path: '/examples/allinone',
  component: () => import ('./pages/examples/allinone.vue')
}]);

uiBase.aside.components.addItems({
  id: 'aside-menu',
  component: () => import ('./components/app/aside-menu.vue')
});

uiBase.aside.menu.addItems({
  title: 'Application',
  items: [{
    id: 'examples',
    title: 'Examples',
    icon: 'glyphicon glyphicon-stats icon text-primary-dker',
    items: [{
      id: 'all-in-one',
      title: 'All in one',
      path: '/examples/allinone'
    }]
  }]
});

/*
uiBase.header.addComponent({
  key: 'aside-toggle',
  component: () => import ('./components/app/header-toggle.vue'),
  data: {
    event: 'aside-toggle'
  }
});
*/

export default uiBase;

/*
  // Adds a menu entry to sidebar
  UiBase.aside.menu.addItem();

  // Adds a extra component to sidebar
  UiBase.aside.components.add();

  // Adds a header component
  UiBase.header.components.add();
*/
