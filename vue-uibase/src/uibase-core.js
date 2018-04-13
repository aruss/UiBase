import Vue from 'vue';
import App from './components/app/app.vue';
import RouterBuilder from './router-builder.js';
import ListBuilder from './list-builder.js';
import MenuBuilder from './menu-builder.js';
import Lazy from 'lazy.js';

// const HttpClient = require('./http-client');

function UiBaseCore() {

  this.options = {};
  this.identity = {};

  this.router = new RouterBuilder(this);
  this.sidebar = new MenuBuilder();
  this.topbar = new MenuBuilder();

  // bus
  let bus = new Vue();

  this.broadcast = (name, data) => {

    bus.$emit(name, data);
  }

  this.on = function (name, func) {

    bus.$on(name, func);
  };
  // end bus

  this.vue = null;

  this.initialize = (options) => {

    // TODO: check if defined and if object

    this.options = Lazy({
        title: 'uibase'
      })
      .merge(options || {})
      .toObject();

    console.log(this.options);

    // Extract in a method and make it selectable between api call and dummy data
    //const api = new HttpClient();
    //api.get('/init').then((r) => {

      // TODO: could be replaced by vuex
      //this.identity = r.result.identity;
      //this.version = r.result.version;

      //this.options = Lazy(this.options)
      //  .merge(r.result.options)
      //  .toObject();

      this.vue = new Vue({
        el: '#app',
        router: this.router.buildRouter(),
        template: '<App/>',
        components: {
          App
        }
      });
    // }).catch((r) => {

    //  console.log(r);
    //});
  }
};

export default UiBaseCore;
