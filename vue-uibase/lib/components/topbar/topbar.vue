<template>
  <div class="topbar">

    <div class="topbar-logo">
      <div class="text-center">
        <a href="/" class="logo">
          <i class="icon-magnet icon-c-logo"></i>
          <span>UiBASE</span>
        </a>
      </div>
    </div>

    <div class="topbar-content">

      <ul class="menu-left">
        <li>
           <button type="button" class="btn"
            v-on:click.stop="$broadcast('sidebartoggle')"><i class="dripicons-menu"></i></button>
        </li>
      </ul>

      <ul class="menu-right">
        <li>
          <div class="dropdown ">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="./avatar-1.jpg" alt="user" class="rounded-circle">
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#"><i class="ti-home"></i><span>Action</span></a>
              <a class="dropdown-item" href="#"><i class="ti-home"></i><span>Another action</span></a>
              <a class="dropdown-item" href="#"><i class="ti-home"></i><span>Something else here</span></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "./topbar.scss";
</style>
