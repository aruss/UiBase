// UiBase menu builder, it gathers menu item definitions softs them and
// adds default values

import Utils from './utils';
import Topo from './topo';

function MenuBuilder() {

  let _sorted = null;
  let _items = [];

  const _sort = (source) => {

    // Merge trees
    let cats = {};
    source.forEach((item) => {

      if (!cats[item.name]) {

        cats[item.name] = item;
      } else {

        let cat = cats[item.name];

        if (item.items) {

          cat.items = _sort((cat.items || []).concat(item.items));
        }
      }
    });

    // Do topological sort
    const topo = new Topo();

    Object.values(cats).forEach((item, i) => {

      const options = item.before || item.after || item.name ? {
        before: item.before,
        after: item.after,
        group: item.name,
        order: item.order
      } : null;

      topo.add(item, options);
    });

    return topo.nodes;
  };

  this.getItems = () => {

    if (_sorted) {

      return _sorted;
    }

    _sorted = _sort(_items);
    return _sorted;
  };

  const _wrap = (item, path) => {

    // create wrapper
    let tmp0 = path.split('/');
    let wrapper = {
      name: tmp0[0],
      items: []
    };
    let tmp1 = wrapper;

    for (let i = 1; i < tmp0.length; i++) {

      let tmp2 = {
        name: tmp0[i],
        items: []
      };

      tmp1.items.push(tmp2)

      tmp1 = tmp2;
    }

    tmp1.items.push(item);

    return wrapper;
  };

  let nameIdx = 0;
  const _extend = function (item) {

    // item.after
    // item.before
    // item.component = item.component || null; // set default component here...

    item.name = item.name || `item${++nameIdx}`;
    item.options = item.options || {};
    item.items = item.items || []; // empty list
    //item.group = item.group || 'default';

    if (item.items) {

      item.items.forEach(_extend);
    }

    return item;
  }

  this.addItems = (items, path) => {

    items.forEach((c) => {

      this.addItem(c, path);
    });

    return this;
  };

  this.addItem = (item, path) => {

    // TODO: validate item

    // TODO: merge with default

    _sorted = null;

    if (path) {

      item = _wrap(item, path);
    }

    item = _extend(item);
    _items.push(item);
    return this;
  }
}

export default MenuBuilder;
