<template>

  <li class="dropdown ">
    <button class="topbar-item dropdown-togglex" type="button"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src="http://placekitten.com/g/50/50" alt="user" class="rounded-circle">
    </button>
    <div class="dropdown-menu dropdown-menu-right" >
      <a class="dropdown-item" href="#"><i class="dripicons-user"></i><span>Action</span></a>
      <a class="dropdown-item" href="#"><i class="dripicons-inbox"></i><span>Another action</span></a>
      <a class="dropdown-item" href="#"><i class="dripicons-gear"></i><span>Something else here</span></a>
    </div>
  </li>
</template>

<script>

import uiBase from '../../main';

export default {
  props: [],
  data () {
    return {
      id: null,
      options: uiBase.options,
      identity: uiBase.identity
    }
  }, 
  mounted () {
    this.id = this._uid
  }
}
</script>

<style lang="scss">

 .topbar-item {
    border: none;
    color: #ffffff;
    display: inline-block;
    height: 70px;
    width: 60px;
    background-color: #36404a;
    font-size: 16px;
    cursor: pointer;   

    .rounded-circle {
      width: 36px; 
      height: 36px; 
    }
  }
 
  .dropdown-item {
    i {
      padding-right: 5px; 
    }
  }

</style>


