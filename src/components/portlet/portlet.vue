<template>
  <div class="portlet">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'portlet'
}
</script>

<style lang="scss">

@import "../app/scss/variables.scss";

.portlet {
  padding: 20px;
  border: 1px solid rgba(54, 64, 74, 0.05);
  border-radius: 5px;
  margin-bottom: 20px;
  background-clip: padding-box;
  background-color: $white;
}

</style>
