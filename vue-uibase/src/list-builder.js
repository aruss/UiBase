import Utils from './utils';
import Topo from './topo';

/*
item definition

  {
    // unique identifier for the component
    id: 'aside-menu',
    // method, that will load the component
    component: () => import('./components/app/aside-menu.vue'),
    // optional component options, depends on the component
    options: {

    }
  }
*/

function ListBuilder(groupKey) {

  let _sorted = null;
  let _items = [];

  this.getItems = () => {

    if (_sorted) {

      return _sorted;
    }

    const topo = new Topo();
    _items.forEach((item, i) => {

      const options = item.before || item.after || item.id ? {
        before: item.before,
        after: item.after,
        group: item.id
      } : null;
      topo.add(item, options);
    });

    _sorted = topo.nodes;
    return _sorted;
  };

  this.addItems = (items) => {

    items.forEach(this.addItem);
    return this;
  }

  this.addItem = (item) => {

    _items.push(item);
    return this;
  }
}

export default ListBuilder;



