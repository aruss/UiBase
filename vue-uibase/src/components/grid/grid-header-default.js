import Vue from 'vue'

Vue.component('grid-header-default', {
  template: '<span> {{ column.title }}</span>',
  props: ['column', 'item']
})
