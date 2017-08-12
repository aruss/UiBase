<template>
  <div class="pager">
    <div>
      <span>Page size:</span>
      <select class="form-control form-control-sm" v-model="pagesSize">
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span>Page</span>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-secondary btn-sm"
          :class="{ 'disabled': !hasPrevious }"
          v-on:click.stop="previous($event)">
          <i class="md md-keyboard-arrow-left"></i>
        </button>
        <input type="number" class="form-control form-control-sm" v-model="pagesCurrent" >
        <button type="button" class="btn btn-secondary btn-sm"
          :class="{ 'disabled': !hasNext }"
          v-on:click.stop="next($event)">
          <i class="md md-keyboard-arrow-right"></i>
        </button>
      </div>
      <span>of {{pagesTotal}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean,
    subtitle: String,
    take: Number,
    skip: Number,
    total: Number
  },

  data() {
    return {
      pagesCurrent: 1,
      pagesSize: 50
    }
  },

  watch: {
    pagesCurrent(val) {
      this.emitChange();
    },
    pagesSize(val) {
      this.emitChange();
    }
  },

  created() {

    this.pagesCurrent = Math.ceil(this.skip / this.take) + 1;
  },

  computed: {

    pagesTotal() {

      return Math.ceil(this.total / this.take);
    },

    itemsFrom() {

      return this.skip + 1;
    },

    itemsTo() {

      return Math.min(this.skip + this.take, this.total);
    },

    hasNext() {

      return this.pagesCurrent + 1 <= this.pagesTotal;
    },

    hasPrevious() {

      return this.pagesCurrent - 1 > 0;
    }
  },

  methods: {

    emitChange() {

      let take = parseInt(this.pagesSize);
      this.$emit('change', {
        take,
        skip: take * (this.pagesCurrent - 1)
      });
    },

    next() {

      if (this.hasNext) {

        this.pagesCurrent++;
      }
    },

    previous() {

      if (this.hasPrevious) {

        this.pagesCurrent--;
      }
    }
  }
}
</script>

<style lang="scss">

@import "../app/scss/variables.scss";

.pager {

  float: right;

  > div {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    font-size: .9em;


    span {
      padding-left: .5em;
      padding-right: .5em;
      line-height: 1.7em;
    }

    select {
      width: 4em;
    }

    input[type="number"] {
      width: 3em;
      border-radius: 0;
      border-left: none;
      border-right: none;
      text-align: center;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }
  }
}

</style>
