import Vue from 'vue';

Vue.component('grid-row-link', {
  template: '<router-link :to="{ name: column.route, params: { id: row[column.idField] }}">{{ row[column.field] }} {{ row["id"] }}</router-link>',
  props: ['column', 'row']
});


