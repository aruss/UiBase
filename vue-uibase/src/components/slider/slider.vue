
<template>
  <div class="uib-slider nicescroll"
    :class="{'--open': opened }"
    tabindex="5000">
    <h4 class="text-center">Chat</h4>
     <i class="dripicons-menu" v-on:click="close()"></i>
     <component :is="component"></component>
  </div>
</template>
<!--
style="overflow: hidden; outline: none;"
style="overflow: hidden; outline: none;"
-->
<script>
export default {
  mounted () {
    window.$on('slidebaropen', (d) => {
      this.opened = true
      this.component = d.component
    })
  },
  data () {
    return {
      opened: false,
      component: null
    }
  },
  methods: {
    close () {
      this.opened = false
    }
  },
  components: {

  }
}
</script>

<style lang="scss">

@import "../app/scss/variables.scss";

/* Right sidebar */
.uib-slider {
  -moz-transition: all 200ms ease-out;
  -webkit-transition: all 200ms ease-out;
  background-color: $white;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);
  display: block;
  float: left;
  height: $height;
  overflow-y: auto;
  position: fixed;
  transition: all 200ms ease-out;
  float: right !important;
  top: 70px;
  font-size: 0.9rem;
  background: $white !important;
  z-index: 99 !important;

  width: 60%;
  right: -60%;

  &.--open {
    right: 0%;
  }

  h4 {
    border-bottom: 1px solid $light;
    padding-bottom: 10px;
    font-size: 1.2rem;
  }
}

</style>
