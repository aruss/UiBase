const Utils = require('./utils');
const Topo = require('./topo');

function ListBuilder(groupKey) {

  groupKey = groupKey = 'id';

  let _sorted = null;
  let _items = [];

  let _sort = (source) => {

    let cats = {};
    source.forEach((item) => {

      if (!cats[item[groupKey]]) {

        cats[item[groupKey]] = item;
      } else {

        let cat = cats[item[groupKey]];

        if (item.items) {

          cat.items = _sort((cat.items || []).concat(item.items));
        }
      }
    });

    return Object.values(cats);
  }

  this.getItems = () => {

    if (_sorted) {

      return _sorted;
    }

    _sorted = _sort(_items);
    return _sorted;
  };

  // Adds a menu item with all its children

  this.addItem = (val) => {

    _items.push(val);

    return this;
  }

  this.addItems = (val) => {

    _items = _items.concat(val);
  }
}

export default ListBuilder;
