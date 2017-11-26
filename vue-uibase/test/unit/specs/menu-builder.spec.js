import MenuBuilder from '@/menu-builder.js';

describe('MenuBuilder', () => {

  it('merge items', () => {

    let menu = new MenuBuilder();

    menu.addItem({
      name: 'menu',
      items: [{
        name: 'application',
        items: [{
          name: 'examples',
          items: [{
            name: 'all-in-one',
          }]
        }]
      }]
    });

    menu.addItem({
      name: 'menu',
      items: [{
        name: 'application',
        items: [{
          name: 'examples',
          items: [{
              name: 'foo',
              before: 'all-in-one'
            },
            {
              name: 'bar',
              after: 'all-in-one'
            }
          ]
        }]
      }]
    });

    menu.addItems([{
      name: 'menu',
      items: [{
        name: 'application',
        items: [{
          name: 'buz',
          before: 'examples',
          items: [{
            name: 'pop'
          }]
        }, {
          name: 'biz',
          after: 'examples',
          items: [{
            name: 'pip'
          }]
        }]
      }]
    }, {
      name: 'progress'
    }]);

    menu.addItem({
      name: 'buz',
      after: 'bar',
    }, 'menu/application/examples');

    var expected = '[{"name":"menu","items":[{"name":"application","items":[{"name":"buz","before":"examples","items":[{"name":"pop"}]},{"name":"examples","items":[{"name":"foo","before":"all-in-one"},{"name":"all-in-one"},{"name":"bar","after":"all-in-one"},{"name":"buz","after":"bar"}]},{"name":"biz","after":"examples","items":[{"name":"pip"}]}]}]},{"name":"progress"}]';
    expect(JSON.stringify(menu.getItems())).to.equal(expected);
    expect(JSON.stringify(menu.getItems())).to.equal(expected);

  });
});
