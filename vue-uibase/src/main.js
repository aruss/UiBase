
import Vue from 'vue'
import App from './components/app/app.vue'
import RouterBuilder from './router-builder.js'
import MenuBuilder from './menu-builder.js'

Vue.config.productionTip = false

// Shortcut for calling <a v-on:click.stop="$broadcast('funky')">
Vue.mixin({
  methods: {
    $broadcast: (name, data) => {
      window.$broadcast(name, data)
    }
  }
})

const bus = new Vue()
window.$broadcast = function (name, data) {
  bus.$emit(name, data)
}

window.$on = function (name, func) {
  bus.$on(name, func)
}

export default class UiBase {
  static get router () {
    return (this._routerBuilder
      ? this._routerBuilder
      : this._routerBuilder = new RouterBuilder())
  }

  static get menu () {
    return this._menuBuilder
      ? this._menuBuilder
      : this._menuBuilder = new MenuBuilder()
  }

  static initialize () {
    window.base = new Vue({
      el: '#app',
      router: this.router.buildRouter(),
      template: '<App/>',
      components: {
        App
      }
    })
  }
};
