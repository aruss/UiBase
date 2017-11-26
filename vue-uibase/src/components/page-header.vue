<template>
  <div class="bg-light lter b-b wrapper-md">
    <h1 class="m-n font-thin h3">{{ title }}</h1>
    <span v-if="subtitle">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle'
  ]
}
</script>

<style lang="less">
</style>
