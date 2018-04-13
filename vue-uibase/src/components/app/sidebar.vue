<template>
  <!-- Left Sidebar Start -->
  <div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">

     <component
        :is="item.component"
        :item="item"
        v-for="item in items"
        :key="item.name"></component>

      <div class="clearfix"></div>
    </div>
    <div class="sidebar-footer">footer</div>
  </div>
  <!-- Left Sidebar End -->
</template>

<script>
import uiBase from "../../main";

function toggleSlimscroll(item) {
  if ($("#wrapper").hasClass("enlarged")) {
    $(item).css("overflow", "inherit").parent().css("overflow", "inherit");
    $(item).siblings(".slimScrollBar").css("visibility", "hidden");
  } else {
    $(item).css("overflow", "hidden").parent().css("overflow", "hidden");
    $(item).siblings(".slimScrollBar").css("visibility", "visible");
  }
}

function toggleSidebar() {
  $("#wrapper").toggleClass("enlarged");
  $("#wrapper").addClass("forced");

  if ($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
    $("body").removeClass("fixed-left").addClass("fixed-left-void");
  } else if (!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
    $("body").removeClass("fixed-left-void").addClass("fixed-left");
  }

  if ($("#wrapper").hasClass("enlarged")) {
    $(".left ul").removeAttr("style");
  } else {
    $(".subdrop").siblings("ul:first").show();
  }

  //toggleSlimscroll(".slimscrollleft");
  $("body").trigger("resize");
}

function initJquery() {
  /*if (jQuery.browser.mobile !== true) {
      $('.left.side-menu .slimscrollleft').slimScroll({
        height: 'auto',
        position: 'right',
        size: '5px',
        color: '#98a6ad',
        wheelStep: 5
      });
    }*/
}

export default {
  mounted() {

    uiBase.on("sidebar-toggle", d => {

      console.log('sidebar-toggle@sidebar');
      //toggleSidebar();
    });
  },
  computed: {
    items: function() {
      return UiBase.sidebar.getItems();
    }
  },
   data() {
    return {
      options: uiBase.options,
      context: uiBase.context
    };
  }
};
</script>

<style lang="scss">

</style>
