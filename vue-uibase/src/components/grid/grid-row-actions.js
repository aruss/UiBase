import Vue from 'vue'

Vue.component('grid-row-actions', {
  template: '<div><button class="btn btn-success btn-sm" v-for="action in actions"' +
    ' :key="action.key" v-on:click="clicked($event, action, item)"><i :class="action.icon"></i></button></div>',
  props: ['column', 'item'],
  computed: {
    actions() {

      let actions = [];
      for (let i = 0; i < this.column.actions.length; i++) {

        actions.push(Object.assign({
          key: i,
          icon: 'fa fa-remove'
        }, this.column.actions[i]));
      }

      return actions;
    }
  },
  methods: {
    clicked(e, action, item) {

      e.stopPropagation();
      if (action && action.method) {
        action.method.call(this, e, item);
      }
    }
  }
})
