import Vue from 'vue';
import Lazy from 'lazy.js';

export default class MenuBuilder
{
  constructor()
  {
    this.items = [{
      name: 'home',
      path: '/'
    }];
  }

  computeItems()
  {
    // TODO: do somemthing special, like magic

    return this.items;
  }

  addItem(item)
  {
    // TODO: check if route is already defined ...

    this.items.push(item);
  }
}
