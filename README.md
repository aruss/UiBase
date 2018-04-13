# UiBase


## Components

## Events

- `sidebartoggle` Toggles the sidebars open/close state

### Broadcasting events

  from HTML
```
  <button v-on:click.stop="$broadcast('someevent', { foo: 'bar' })">
    <i class="dripicons-plus"></i>
  </button>
```
  or inside of a component
```
  this.$broadcast('someevent', { foo: 'bar' })
```



https://github.com/vuejs-templates/webpack