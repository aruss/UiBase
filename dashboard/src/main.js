import UiBase from 'vue-uibase';

// const UiBase = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase');

// Install here your plugins
UiBase.router.addRoute([{
  path: '/examples/dashboard',
  component: () => import('./pages/examples/dashboard.vue')
}, {
  path: '/examples/list',
  component: () => import('./pages/examples/list.vue')
}, {
  path: '/examples/details',
  component: () => import('./pages/examples/details.vue')
}]);

UiBase.menu.addSitebarItem({
  title: 'Application',
  items: [{
    title: 'Examples',
    icon: 'dripicons-graph-line',
    items: [{
      title: 'Dashboard',
      path: '/examples/dashboard'
    }, {
      title: 'List',
      path: '/examples/list'
    }, {
      title: 'Details',
      path: '/examples/details'
    }]
  }]
});

UiBase.initialize();
