import Vue from 'vue'

Vue.component('grid-row-link', {
  template: '<router-link :to="{ name: column.route, params: { id: item[column.idField] }}">{{ item[column.field] }} {{ item["id"] }}</router-link>',
  props: ['column', 'item']
})
