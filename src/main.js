// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/app/app.vue'
import router from './router'

Vue.config.productionTip = false

// Shortcut for calling <a v-on:click.stop="$broadcast('funky')">
Vue.mixin({
  methods: {
    $broadcast: (name, data) => {

      window.$broadcast(name, data);
    }
  }
});

const bus = new Vue();
window.$broadcast = function(name, data) {

  //window.dispatchEvent(new CustomEvent(name, data));
  bus.$emit(name, data);
};

window.$on = function(name, func) {

  //window.addEventListener(name, func);
  bus.$on(name, func);
};

window.base = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});




