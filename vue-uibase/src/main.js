import Vue from 'vue';
import UiBaseCore from './uibase-core.js';
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.config.devtools = true;

// Expose to window
// TODO: Make it cleaner, it looks cheezy
export const uiBase = window.UiBase = new UiBaseCore();

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

export default uiBase;
