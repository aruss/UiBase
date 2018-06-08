<template>
   <footer class="app-footer">
      <div>
        <span>© 2018 company</span>
      </div>
      <div class="ml-auto">
        v0.0.0
      </div>
    </footer>
</template>

<script>
import uiBase from "../../main";

export default {
  mounted() {
    
  }  
};
</script>


<style lang="scss">
@import "./scss/common.scss";

.app-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 $spacer;
  color: $footer-color;
  background: $footer-bg;
  @include borders($footer-borders);
}

</style>