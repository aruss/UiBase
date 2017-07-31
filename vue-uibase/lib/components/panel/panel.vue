<template>
  <div class="panel">
    <b v-if="title">{{ title }}</b>
    <p v-if="subtitle">{{ subtitle }}</p>
    <slot></slot>
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
