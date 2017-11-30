import Vue from 'vue';
import App from './components/app/app.vue';
import RouterBuilder from './router-builder.js';
import ListBuilder from './list-builder.js';
import MenuBuilder from './menu-builder.js';

Vue.config.productionTip = false;
Vue.config.devtools = true;

function UiBaseCore() {

  // UI State, will be persisted on each change
  this.state = {
    isHeaderFixed: true,
    isAsideFixed: true,
    isAsideFolded: false,
    isAsideDock: false,
    isContainer: false
  };

  this.router = new RouterBuilder(this);
  this.aside = new MenuBuilder();
  this.header = new MenuBuilder();

  // bus
  let bus = new Vue();
  this.broadcast = (name, data) => {

    console.log("boradcasting", name, data);
    bus.$emit(name, data);
  }

  this.on = function (name, func) {

    bus.$on(name, func);
  };
  // end bus

  this.vue = null;
  this.initialize = () => {

    this.vue = new Vue({
      el: '#app',
      router: this.router.buildRouter(),
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
    },

    $toggleClass(cssClass, target) {

      $(target).toggleClass(cssClass);
    }
  }
});

require('./default-setup')(uiBase);

export default uiBase;

/*
  // Adds a menu entry to sidebar
  UiBase.aside.menu.addItem();

  // Adds a extra component to sidebar
  UiBase.aside.components.add();

  // Adds a header component
  UiBase.header.components.add();
*/
