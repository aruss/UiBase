
import Vue from 'vue';
import App from './components/app/app.vue';
import RouterFactory from './router-factory.js';

Vue.config.productionTip = false

// Shortcut for calling <a v-on:click.stop="$broadcast('funky')">
Vue.mixin({
  methods: {
    $broadcast: (name, data) =>
    {
      window.$broadcast(name, data);
    }
  }
});

const bus = new Vue();
window.$broadcast = function (name, data)
{
  bus.$emit(name, data);
};

window.$on = function (name, func)
{
  bus.$on(name, func);
};

export default class UiBase
{
  static get routerFactory()
  {
    return this._routerFac ? 
      this._routerFac : 
      this._routerFac = new RouterFactory(); 
  }

  static initialize()
  {

    this.bus = new Vue();

    window.base = new Vue({
      el: '#app',
      router: this.routerFactory.createRouter(),
      template: '<App/>',
      components: {
        App
      }
    });
  }
};