<template>
  <div class="topbar">

    <div class="topbar-left">
      <div class="text-center">
        <a href="index.html" class="logo">
          <i class="icon-magnet icon-c-logo"></i>
          <span>UiBASE</span>
        </a>
        <!-- Image Logo here -->
        <!--<a href="index.html" class="logo">-->
        <!--<i class="icon-c-logo"> <img src="assets/images/logo_sm.png" height="42"/> </i>-->
        <!--<span><img src="assets/images/logo_light.png" height="20"/></span>-->
        <!--</a>-->
      </div>
    </div>

    <nav class="navbar-custom">

      <ul class="list-inline float-right mb-0">
        <li class="list-inline-item dropdown">
          <a class="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="./avatar-1.jpg" alt="user" class="rounded-circle">
          </a>
          <div class="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
            <!-- item-->
            <div class="dropdown-item">
              <h5 class="text-overflow">
                <small>Welcome ! John</small>
              </h5>
            </div>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="zmdi zmdi-account-circle"></i>
              <span>Profile</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="zmdi zmdi-settings"></i>
              <span>Settings</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="zmdi zmdi-power"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>

      <ul class="list-inline menu-left mb-0">
        <li class="float-left">
          <button v-on:click.stop="$broadcast('funky')" class="button-menu-mobile open-left">
            <i class="dripicons-menu"></i>
          </button>
        </li>

        <li class="float-left">
          <button v-on:click.stop="$broadcast('slidebaropen', { component: 'identity-client-details' })" class="button-menu-mobile open-left">
            <i class="dripicons-music"></i>
          </button>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../app/scss/variables.scss";

.topbar {
  position: fixed;
  left: 0;  
  right: 0;
  top: 0;
  z-index: 999;

  .logo {
    color: $white;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: .05em;
    line-height: $header-height;
    text-transform: uppercase;

    h1 {
      margin: 0 auto;
      text-align: center;
    }

    i {
      color: $custom; // what a hack is this shit 
    }

    .icon-c-logo {
      display: none;
    }
  }






  .topbar-left {
    float: left;
    position: relative;
    width: $sidebar-width-large;
    z-index: 1;
    background-color: $dark;
  }

  .topbar-left-sm {
    width: 180px;
  }
  .topbar-left-sm+.navbar-custom {
    margin-left: 180px;
  }

  
  .navbar-custom {
    background-color: $dark;
    border-radius: 0;
    margin-bottom: 0;
    padding: 0 10px;
    margin-left: 240px;
    min-height: 70px;

    .nav-link {
      padding: 0;
      line-height: 70px;
      color: rgba($white, 0.6);
    }

    .dropdown-toggle {
      &:after {
        content: initial;
      }
    }

    .menu-left {
      overflow: hidden;
    }
  }

  .button-menu-mobile {
    border: none;
    color: $white;
    display: inline-block;
    height: 70px;
    width: 60px;
    background-color: $dark;
    font-size: 16px;
  }

  .nav-user {
    padding: 0 12px !important;

    img {
      height: 36px;
      width: 36px;
    }
  }
}
</style>
