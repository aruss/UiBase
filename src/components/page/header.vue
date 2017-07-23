<template>
  <div class="page-header">
    <b>{{ title }}</b>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'subtitle'
  ],
}
</script>

<style lang="scss">

@import "../app/scss/variables.scss";

.page-header {
  padding-bottom: $gutter;

  b {
    font-size: 1.2em;
    font-weight: 600;
    margin: 0;
    line-height: 1em;
    letter-spacing: 0.04em;
  }

  p {
    margin-top: $gutter / 2;
    line-height: 1em;
    margin-bottom: 0;
  }
}

</style>
