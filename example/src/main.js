import Vue from 'vue';
import UiBase from 'vue-uibase';
//const UiBase = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase');

// Install here your plugins
UiBase.routerBuilder.addRoute({
    path: '/foo',
    component: () => import('./pages/examples/list.vue')
  });

UiBase.menuBuilder.addItem({
    path: '/foo',
    component: () => import('./pages/examples/list.vue')
  });

UiBase.initialize();
