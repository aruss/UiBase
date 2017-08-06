<template>
  <div>asd</div>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle',
    //'list',
    'columns',
    'hover',
    'small',
    'stripped'
  ],

  data () {
    return {
      pageCurrent: 0
    }
  },

  mounted () {
    console.log('lol?!')
  },

  computed: {

    pagesCurrent () {
      console.log('pagesCurrent')
      return Math.ceil(this.list.total / this.list.take)
    },

    pagesTotal () {
      console.log('pagesTotal')
      return this.list.skip / this.list.take + 1
    },

    itemsFrom () {
      console.log('itemsFrom')
      return this.list.skip + 1
    },

    itemsTo () {
      console.log('itemsTo')
      return Math.min(this.list.skip + this.list.take, this.list.total)
    },

    items () {
      console.log('items')
      let items = []
      /* for(let i = 0; i < this.list.items.length; i++) {

        items.push({
          key: i,
          value:  this.list.items[i]
        })
      } */

      return items
    },

    cols () {
      console.log('cols')
      let cols = []
      /* for(let i = 0; i < this.columns.length; i++) {

        let c = this.columns[i];
        cols.push({
          key: i,
          title: c.title || c.field,
          component: c.component || 'grid-row-default',
          componentHead: c.componentHead || 'grid-header-default',
          width: c.width || '*',
          align: c.align || 'left',
          value: c
        });
      } */

      return cols
    }
  },
  data () {
    return {
      list: null
    }
  },
  methods: {

  },
  components: {
    // uibPanel
    // uibPagination
  }
}
</script>


<style lang="scss">
@import "./grid.scss";
</style>
