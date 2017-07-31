import Vue from 'vue';
import UiBase from 'vue-uibase';

// Install here your plugins

UiBase.routerFactory.addRoute({
      name: 'home',
      path: '/foo',
      component: () => import('./pages/examples/list.vue')
    });

UiBase.initialize();
