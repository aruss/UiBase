<template>
  <nav>
    <ul class="pagination"
      :class="{
        'pagination-sm': small
      }">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li  v-for="pageIndex in total"  class="page-item"><a class="page-link" href="#">{{ pageIndex }}</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [
    'small',
    'subtitle',
    'current',
    'total'
  ]
}
</script>

<style lang="scss">

@import "../app/scss/variables.scss";

.panel {
  padding: $gutter;
  margin-bottom: $gutter;
  border: 1px solid rgba(54, 64, 74, 0.05);
  border-radius: 5px;
  background-clip: padding-box;
  background-color: $white;

  b {
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 1.2em;
    font-weight: 600;
    margin: 0;
    line-height: 1em;
  }

  p {
    margin-top: $gutter / 2;
    line-height: 1em;
    margin-bottom: $gutter;
  }
}

</style>
