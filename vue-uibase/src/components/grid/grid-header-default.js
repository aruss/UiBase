import Vue from 'vue'

Vue.component('grid-header-default', {
  template: '<span style="cursor:pointer" v-on:click.stop="click($event, column)" :class="clss">' +
    '{{ column.title }} <i class="md" :class="{\'md-keyboard-arrow-up\': column.sort === -1, ' +
    ' \'md-keyboard-arrow-down\': column.sort === 1}"></i></span>',
  props: ['column'],
  data() { return { clss: "" }; },
  methods: {
    click(e, column) {
      this.clss = column.sort === 1 ? 'asc' : column.sort === -1 ? 'desc' : '';
      this.$emit('sort', e, column);
    }
  }
})

