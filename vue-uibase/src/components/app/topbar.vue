<template>
    <header class="app-header navbar">
      <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
          <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
          <img class="navbar-brand-full" src="https://coreui.io/demo/img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
          <img class="navbar-brand-minimized" src="https://coreui.io/demo/img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </a>
      <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
          <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav navbar-nav d-md-down-none">
          <li class="nav-item px-3">
              <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item px-3">
              <a class="nav-link" href="#">Users</a>
          </li>
          <li class="nav-item px-3">
              <a class="nav-link" href="#">Settings</a>
          </li>
      </ul>
      <ul class="nav navbar-nav ml-auto">
          <li class="nav-item dropdown">
              <a class="nav-link nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  <img class="img-avatar" src="https://avatars0.githubusercontent.com/u/1374135?s=40&v=4" alt="admin@bootstrapmaster.com">
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">
                      <i class="fa fa-user"></i> Profile</a>
                  
                  <div class="divider"></div>
                 
                  <a class="dropdown-item" href="#">
                      <i class="fa fa-lock"></i> Logout</a>
              </div>
          </li>
      </ul>
  </header>
</template>

<script>
import uiBase from "../../main";

export default {
  mounted() {
    uiBase.topbar.getItems().forEach(item => {
      if ("right" === item.group) {
        this.itemsRight.push(item);
      } else {
        this.itemsLeft.push(item);
      }
    });
  },
  data() {
    return {
      options: uiBase.options,
      context: uiBase.context,
      itemsLeft: [],
      itemsRight: []
    };
  }
};
</script>


<style lang="scss">
@import "./scss/common.scss";

.app-header {
  position: relative;
  flex-direction: row;
  height: $navbar-height;
  padding: 0;
  margin: 0;
  background-color: $navbar-bg;
  @include borders($navbar-border);

  .navbar-brand {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $navbar-brand-width;
    height: $navbar-height;
    padding: 0;
    margin-right: 0;
    background-color: $navbar-brand-bg;
    @include borders($navbar-brand-border);

    .navbar-brand-minimized {
      display: none;
    }
  }

  .navbar-toggler {
    min-width: 50px;
    padding: $navbar-toggler-padding-y 0;

    &:hover .navbar-toggler-icon {
      background-image: $navbar-toggler-icon-hover;
    }
  }

  .navbar-toggler-icon {
    height: 23px;
    background-image: $navbar-toggler-icon;
  }

  .navbar-nav {
    flex-direction: row;
    align-items: center;
  }

  .nav-item {
    position: relative;
    min-width: 50px;
    margin: 0;
    text-align: center;

    button {
      margin: 0 auto;
    }

    .nav-link {
      padding-top: 0;
      padding-bottom: 0;
      background: 0;
      border: 0;

      .badge {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -16px;
        margin-left: 0;
      }

      > .img-avatar {
        height: $navbar-height - 20px;
        margin: 0 10px;
      }
    }
  }

  .dropdown-menu {
    padding-bottom: 0;
    line-height: $line-height-base;
  }

  .dropdown-item {
    min-width: 180px;
  }
}

// .navbar-brand {
//   color: $navbar-active-color;
//
//   @include hover-focus {
//     color: $navbar-active-color;
//   }
// }

.navbar-nav {
  .nav-link {
    color: $navbar-color;

    @include hover-focus {
      color: $navbar-hover-color;
    }
  }

  .open > .nav-link,
  .active > .nav-link,
  .nav-link.open,
  .nav-link.active {
    @include plain-hover-focus {
      color: $navbar-active-color;
    }
  }
}

.navbar-divider {
  background-color: rgba(0, 0, 0, 0.075);
}

@include media-breakpoint-up(lg) {
  .brand-minimized {
    .app-header {
      .navbar-brand {
        width: $navbar-brand-minimized-width;
        background-color: $navbar-brand-minimized-bg;
        @include borders($navbar-brand-minimized-border);

        .navbar-brand-full {
          display: none;
        }

        .navbar-brand-minimized {
          display: block;
        }
      }
    }
  }
}
</style>