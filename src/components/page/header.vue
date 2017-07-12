<template>
  <div class="uib-page-header">
    <h4>{{ title }}</h4>
    <p>{{ subtitle }}</p>
  </div>
</template>
<!--
style="overflow: hidden; outline: none;"
style="overflow: hidden; outline: none;"
-->
<script>

export default {
  props: ['title', 'subtitle'],
}
</script>

<style lang="scss">

@import "../app/scss/variables.scss";

/* Right sidebar */
.uib-page-header {
  padding-bottom: $gutter;

  h4 {
    font-size: 1.2em;
    font-weight: 600;
    margin: 0;
    line-height: 1em;
  }

  p {
    margin-top: $gutter / 2;
    line-height: 1em;
    margin-bottom: 0;
  }
}

</style>
