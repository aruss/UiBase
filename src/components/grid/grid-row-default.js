import Vue from 'vue';

Vue.component('grid-row-default', {
  template: '<span>{{ row[column.field] }}</span>',
  props: ['column', 'row']
});
