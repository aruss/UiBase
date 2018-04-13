<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-sm-12">
          <h4 class="page-title">Video</h4>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Ubold</a></li>
            <li class="breadcrumb-item"><a href="#">UI Kit</a></li>
            <li class="breadcrumb-item active">Video</li>
          </ol>
      </div>
    </div>


    <div class="row">
      <div class="col-md-12">
        <div class="">
          <div class="card-box">
            <h4 class="m-t-0 header-title"><b>Toggles</b></h4>
            <p class="text-muted m-b-15 font-13">
              Some knobs to poke arround.
            </p>

            <button class="btn m-b-xs btn-default"
              v-on:click.stop="$broadcast('loading-toggle')">Toggle Loading</button>

            <button class="btn m-b-xs btn-default"
              v-on:click.stop="$broadcast('sidebar-toggle')">Toggle Sidebar</button>

            <button id="toggle-class-btn" class="btn m-b-xs btn-default"
              v-on:click.stop="$toggleClass('btn-success', '#toggle-class-btn')">Toggle Class</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//const uibPageHeader = () => import(/* webpackChunkName: "group-uibase" */ 'vue-uibase/src/components/page/header.vue')

export default {
  name: 'allinone',
  mounted () {

  },
  components: {
  //  uibPageHeader
  }
}
</script>

<style lang="scss">

</style>
