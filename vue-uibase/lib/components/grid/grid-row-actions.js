import Vue from 'vue';

Vue.component('grid-row-actions', {
  template: '<div><button class="btn btn-success btn-sm" v-for="action in column.actions" :key="action" v-on:click="action.method(item, $event)"><i class="fa fa-remove"></i></button></div>',
  props: ['column', 'item']
});



