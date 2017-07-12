<template>
  <div class="uib-panel">
    <h4 v-if="title" class="m-t-0 header-title"><b>{{ title }}</b></h4>
    <p v-if="subtitle">{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
}
</script>

<style lang="scss">

@import "../app/scss/variables.scss";

.uib-panel {
  padding: $gutter;
  margin-bottom: $gutter;
  border: 1px solid rgba(54, 64, 74, 0.05);
  border-radius: 5px;
  background-clip: padding-box;
  background-color: $white;
}

</style>
