<template>
  <a href="#"
    class="nav-link dropdown-toggle waves-effect waves-light nav-user"
    data-toggle="dropdown"
    role="button"
    aria-haspopup="false"
    aria-expanded="false">
      <img src="assets/images/users/avatar-1.jpg" alt="user" class="rounded-circle">
  </a>
</template>

<script>

import uiBase from '../../main';

export default {
  props: [],
  data() {

    return {
      options: uiBase.options,
      identity: uiBase.identity
    }
  }
}
</script>

<style lang="scss">
</style>


