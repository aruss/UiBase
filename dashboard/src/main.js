import uiBase from 'vue-uibase';
// const UiBase = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase');

uiBase.router.addRoute({
  path: '/examples1/allinone',
  component: () =>
    import ('./pages/examples/allinone.vue')
});

uiBase.router.addRoute({
  path: '/examples1/example1',
  component: () =>
    import ('./pages/examples/example1.vue')
});

uiBase.router.addRoute({
  path: '/examples1/example2',
  component: () =>
    import ('./pages/examples/example2.vue')
});

uiBase.router.addRoute({
  path: '/examples2/example1',
  component: () =>
    import ('./pages/examples/example3.vue')
});

uiBase.sidebar.addItem({
  name: 'menu',
  component: () =>
    import ( /* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/app/sidebar-menu.vue'),
  items: [{
    name: 'application',
    options: {
      title: 'Application'
    },
    items: [{
      name: 'examples1',
      options: {
        bold: true,
        title: 'Examples 1',
        icon: 'glyphicon glyphicon-stats icon text-primary-dker',
      },
      items: [{
          name: 'allinone',
          options: {
            title: 'All controls',
            path: '/examples1/allinone'
          }
        },
        {
          name: 'example1',
          options: {
            title: 'Example 1',
            path: '/examples1/example1'
          }
        },
        {
          name: 'allinone2',
          options: {
            title: 'Example 2',
            path: '/examples1/example2'
          }
        }
      ]
    },{
      name: 'examples2',
      options: {
        bold: true,
        title: 'Examples 2',
        icon: 'glyphicon glyphicon-stats icon text-primary-dker',
      },
      items: [
        {
          name: 'example1',
          options: {
            title: 'Example 1',
            path: '/examples2/example1'
          }
        }
      ]
    }]
  }]
});

uiBase.topbar.addItems([{
  name: 'item1',
  group: 'left',
  component: () =>
    import ( /* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/app/topbar-item.vue')
}, {
  name: 'item2',
  group: 'left',
  component: () =>
    import ( /* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/app/topbar-search.vue')
}, {
  name: 'menu-right',
  group: 'right',
  component: () =>
    import ( /* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/app/topbar-item.vue'),
  items: [{
    name: 'user',
    //component: () =>
    //  import ( /* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/app/topbar-menu-user.vue'),
    options: {
      title: 'User'
    },
    items: [{
      name: 'profile',
      options: {
        title: 'Profile',
        icon: 'glyphicon glyphicon-stats icon text-primary-dker',
        path: '/profile'
      }
    }, {
      options: {
        cssClass: 'divider'
      }
    }, {
      name: 'logout',
      options: {
        href: '/logout',
        title: 'Logout',
        icon: 'glyphicon glyphicon-stats icon text-primary-dker',
      }
    }]
  }]
}]);

UiBase.initialize({

});
