import Vue from 'vue';

Vue.component('grid-row-custom', {
  template: '<span>lol: {{ row[column.field] }}</span>',
  props: ['column', 'row']
});
