import UiBase from 'vue-uibase';
// const UiBase = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase');

// Install here your plugins
UiBase.router.addRoute({
    path: '/examples/dashboard',
    component: () =>
      import ('./pages/examples/dashboard.vue')
  }
  /*, {
    path: '/examples/list',
    component: () => import('./pages/examples/list.vue')
  }, {
    path: '/examples/details',
    component: () => import('./pages/examples/details.vue')
  }*/
);

UiBase.aside.addItems([{
  name: 'dashboard',
  before: 'all-in-one',
  options: {
    title: 'Dashboard',
    path: '/examples/dashboard'
  }
}, {
  name: 'list',
  options: {
    title: 'List',
    path: '/examples/list'
  }
}, {
  name: 'details',
  options: {
    title: 'Details',
    path: '/examples/details'
  }
}], 'menu/application/examples');

UiBase.header.addItem({
  name: 'custom',
  options: {
    title: 'Custom'
  }
}, 'menu-left/new');

UiBase.header.addItem({
  name: 'custom',
  before: 'logout',
  options: {
    title: 'Custom'
  }
}, 'menu-right/user');


// Add dummy nodes
for(var i = 0; i < 4; i++) {

  for(var j = 0; j < 10; j++) {

    UiBase.aside.addItems([{
        name: 'foo',
        options: {
          title: 'Foo',
        },
        items: [{
          name: 'examples' + i,
          options: {
            title: 'Examples ' + i,
            icon: 'glyphicon glyphicon-stats icon text-primary-dker',
          },
          items: [{
            name: 'all-in-one-' + j,
            options: {
              title: 'All in one ' + j,
              path: '/examples/allinone-' + j
            }
          }]
        }]
      }], 'menu');
  }
}

/*UiBase.aside.addItems([{
  name: 'aside-thingy1',
  component: () =>
    import ('./components/aside-thingy.vue'),
  before: 'menu'
}, {
  name: 'aside-thingy2',
  component: () =>
    import ('./components/aside-thingy.vue'),
  after: 'menu'
}]);*/

UiBase.initialize();
