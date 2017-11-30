module.exports = function (uiBase) {

  // Routes
  uiBase.router.addRoutes([{
    path: '/examples/allinone',
    component: () =>
      import ('./pages/examples/allinone.vue')
  }]);


  uiBase.aside.addItem({
    name: 'menu',
    component: () =>
      import ('./components/app/aside-menu.vue'),
    items: [{
      name: 'application',
      options: {
        title: 'Application'
      },
      items: [{
        name: 'examples',
        options: {
          bold: true,
          title: 'Examples',
          icon: 'glyphicon glyphicon-stats icon text-primary-dker',
        },
        items: [{
          name: 'all-in-one',
          options: {
            title: 'All in one',
            path: '/examples/allinone'
          }
        }]
      }]
    }]
  });

  uiBase.header.addItems([{
    name: 'menu-left',
    group: 'left',
    component: () =>
      import ('./components/app/header-menu.vue'),
    items: [{
      name: 'foo',
      options: {
        icon: 'icon-user fa-fw',
        cssClass: 'hidden-xs'
      }
    }, {
      name: 'new',
      options: {
        title: 'New'
      },
      items: [{
        name: 'projects',
        options: {
          title: 'Projects'
        }
      }, {
        name: 'task',
        options: {
          title: 'Task'
        }
      }, {
        name: 'user',
        options: {
          title: 'User'
        }
      }]
    }]
  }, {
    name: 'menu-search',
    group: 'left',
    component: () =>
      import ('./components/app/header-search.vue')
   }, {
    name: 'menu-right',
    group: 'right',
    component: () =>
      import ('./components/app/header-menu.vue'),
    items: [{
      name: 'user',
      component: () =>
        import ('./components/app/header-menu-user.vue'),
      options: {
        title: 'User'
      },
      items: [{
        name: 'settings',
        options: {
          title: 'Settings',
          icon: 'glyphicon glyphicon-stats icon text-primary-dker',
        }
      }, {
        name: 'profile',
        options: {
          title: 'Profile',
          icon: 'glyphicon glyphicon-stats icon text-primary-dker',
          badge: {
            title: '30%',
            cssClass: 'bg-danger'
          }
        }
      }, {
        name: 'help',
        options: {
          title: 'Help',
          icon: 'glyphicon glyphicon-stats icon text-primary-dker',
          label: {
            title: 'new',
            cssClass: 'bg-info'
          }
        }
      }, {
        options: {
          cssClass: 'divider'
        }
      }, {
        name: 'logout',
        options: {
          title: 'Logout',
          icon: 'glyphicon glyphicon-stats icon text-primary-dker',
        }
      }]
    }]
  }]);
};
