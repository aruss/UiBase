<template>
  <div class="loading-bar"
    :class="{
      'hide': !active,
      'active': active
    }">
    <span class="bar"></span>
  </div>
</template>

<script>

import UiBase from '../../main';

export default {
  mounted () {

    UiBase.on('loading-toggle', (d) => {

      this.active = !this.active;
    });

    UiBase.on('loading-start', (d) => {

      this.active = true;
    });

     UiBase.on('loading-stop', (d) => {

      this.active = false;
    });
  },

  data() {

    return {
      active: false
    };
  }
}
</script>

<style lang="less">
  @import "./less/variables.less";

  .loading-bar{
    position: relative;
    margin-bottom: -@loading-bar-height;
    height: @loading-bar-height;
    .bar{
      position: absolute;
      height: 0;
      width: 100%;
      text-indent: -9999px;
      background-color: @brand-info;
      &:before{
        content: "";
        height: @loading-bar-height;
        position: absolute;
        left: 50%;
        right: 50%;
        background-color: inherit;
      }
    }

  }
  .loading-bar.active{
    -webkit-animation: changebar @loading-bar-time*3 infinite @loading-bar-time;
    -moz-animation: changebar @loading-bar-time*3 infinite @loading-bar-time;
    animation: changebar @loading-bar-time*3 infinite @loading-bar-time;
    .bar{
      -webkit-animation: changebar @loading-bar-time*3 infinite;
      -moz-animation: changebar @loading-bar-time*3 infinite;
      animation: changebar @loading-bar-time*3 infinite;
      &:before{
        -webkit-animation: movingbar @loading-bar-time infinite;
        -moz-animation: movingbar @loading-bar-time infinite;
        animation: movingbar @loading-bar-time infinite;
      }
    }
  }

  /* Moving bar */
  @-webkit-keyframes movingbar{
    0%    { left:50%; right:50% }
    99.9% { left:0%; right:0% }
    100%  { left:50%; right:50%}
  }

  @-moz-keyframes movingbar{
    0%    { left:50%; right:50% }
    99.9% { left:0%; right:0% }
    100%  { left:50%; right:50%}
  }

  @keyframes movingbar{
    0%    { left:50%; right:50% }
    99.9% { left:0%; right:0% }
    100%  { left:50%; right:50%}
  }

  /* change bar */
  @-webkit-keyframes changebar{
    0%      { background-color: @brand-info }
    33.3%   { background-color: @brand-info }
    33.33%  { background-color: @brand-warning }
    66.6%   { background-color: @brand-warning }
    66.66%  { background-color: @brand-primary }
    99.9%    { background-color: @brand-primary }
  }

  @-moz-keyframes changebar{
    0%      { background-color: @brand-info }
    33.3%   { background-color: @brand-info }
    33.33%  { background-color: @brand-warning }
    66.6%   { background-color: @brand-warning }
    66.66%  { background-color: @brand-primary }
    99.9%    { background-color: @brand-primary }
  }

  @keyframes changebar{
    0%      { background-color: @brand-info }
    33.3%   { background-color: @brand-info }
    33.33%  { background-color: @brand-warning }
    66.6%   { background-color: @brand-warning }
    66.66%  { background-color: @brand-primary }
    99.9%    { background-color: @brand-primary }
  }
</style>
