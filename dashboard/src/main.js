import UiBase from 'vue-uibase';
// const UiBase = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase');

// Install here your plugins
UiBase.addRoute([{
  path: '/examples/dashboard',
  component: () => import('./pages/examples/dashboard.vue')
}/*, {
  path: '/examples/list',
  component: () => import('./pages/examples/list.vue')
}, {
  path: '/examples/details',
  component: () => import('./pages/examples/details.vue')
}*/]);

UiBase.aside.addItems({
  title: 'Application',
  items: [{
    title: 'Examples',
    icon: 'glyphicon glyphicon-stats icon text-primary-dker',
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
  },{
    title: 'Foo',
    icon: 'glyphicon glyphicon-stats icon text-primary-dker',
    items: [{
      title: 'Bar',
      path: '/foo/bar'
    }]
  }]
});

UiBase.initialize();
