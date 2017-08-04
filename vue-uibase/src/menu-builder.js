import Vue from 'vue';
import Lazy from 'lazy.js';

function menuBuilder() {


  function tree(items) {
    let cats = {};
    items.forEach((item) => {

      if (!cats[item.title]) {

        cats[item.title] = item;
      }
      else {

        let cat = cats[item.title];
        if (item.items) {

          cat.items = tree((cat.items || []).concat(item.items));
        }
      }
    });

    return Object.values(cats);
  }

  function addItems(list, val) {

    if (Array.isArray(val)) {

      list = list.concat(val);
    }
    else {

      list.push(val);
    }
  }

  // Sidebar
  let _sidebarItems = [];
  this.getSitebarItems = () => {

    return tree(_sidebarItems);
  }

  this.addSitebarItem = (val) => {

    addItems(_sidebarItems, val);
    return this;
  }
};

export default menuBuilder;
