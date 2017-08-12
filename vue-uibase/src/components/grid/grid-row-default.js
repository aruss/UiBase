import Vue from 'vue'

Vue.component('grid-row-default', {
  template: '<span>{{ item[column.field] }}</span>',
  props: ['column', 'item']
})

window.vue1 = Vue; 