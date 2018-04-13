<template>
  <uib-panel :title="title" :subtitle="subtitle" class="grid">

    <div class="form-group row">
        <label class="col-2 col-form-label">Text</label>
        <div class="col-10">
            <input type="text" class="form-control" value="Some text value...">
        </div>
    </div>
  </uib-panel>
</template>

<script>
import uibPanel from '../panel/panel.vue'

require('./grid-row-checkbox.js')
require('./grid-row-link.js')

export default {
  props: ['data', 'title', 'subtitle'],
  computed: {
    rows () {
      return this.data.rows
    },
    columns () {
      return this.data.columns.map((c) => {
        c.rowComponent = c.rowComponent || 'uib-grid-row-default'
        c.headerComponent = c.headerComponent || 'uib-grid-header-default'

        return c
      })
    }
  },
  components: {
    uibPanel
  }
}
</script>


<style lang="scss">
@import "./grid.scss";
</style>
