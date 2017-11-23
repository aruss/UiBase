<template>
  <div class="uib-portlet">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">

@import "../app/less/variables.less";

.uib-portlet {
  padding: 20px;
  border: 1px solid rgba(54, 64, 74, 0.05);
  border-radius: 5px;
  margin-bottom: 20px;
  background-clip: padding-box;
  background-color: @white;
}

</style>
