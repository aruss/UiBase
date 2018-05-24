// UiBase theme jquery code

/**
 * Theme: Ubold Admin Template
 * Author: Coderthemes
 * Module/App: Main Js
 */

$(function () {

  window.UiBase.on("routechanged", d => {

    // TODO: Add meta info for title and scopes
    //document.title = d.to.path;
  });

  window.UiBase.on("sidebar-toggle", d => {

    $("#wrapper").toggleClass("enlarged");
  });

    var w, h, dw, dh;

    function changeptype() {
      w = $(window).width();
      h = $(window).height();
      dw = $(document).width();
      dh = $(document).height();

      //if (jQuery.browser.mobile === true) {
      //  $("body").addClass("mobile").removeClass("fixed-left");
      //}

      if (!$("#wrapper").hasClass("forced")) {
        if (w > 990) {
          $("body").removeClass("smallscreen").addClass("widescreen");
          $("#wrapper").removeClass("enlarged");
        } else {
          $("body").removeClass("widescreen").addClass("smallscreen");
          $("#wrapper").addClass("enlarged");
          $(".left ul").removeAttr("style");
        }
        if ($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
          $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
          $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }
      }
      toggle_slimscroll(".slimscrollleft");
    }

    function toggle_slimscroll() {

    }

    function debounce(func, wait, immediate) {
      var timeout, result;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
      };
    }

    $(window).resize(debounce(resizeitems, 100));
    $("body").trigger("resize");

    function resizeitems() {

      console.log("resize fuk")
      changeptype();
      // ...
    }
});
