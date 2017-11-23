function MenuBuilder() {

  // Compiles a menu model from individual menu
  // registrations into a tree structure
  let tree = null;
  this.getTree = () => {

    if (tree) {

      return tree;
    }

    let cats = {};
    items.forEach((item) => {

      if (!cats[item.title]) {

        cats[item.title] = item;
      } else {

        let cat = cats[item.title];

        if (item.items) {

          cat.items = tree((cat.items || []).concat(item.items));
        }
      }
    });

    tree = Object.values(cats);
    return tree;
  };

  this.getItems = () => {

    return items;
  };

  // Adds a menu item with all its children
  let items = [];
  this.addItems = (val) => {

    if (Array.isArray(val)) {

      items = items.concat(val);
    } else {

      items.push(val);
    }

    return this;
  }
}

export default MenuBuilder;
