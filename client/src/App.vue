<template>
  <div id="app" :style="{width: width, height: height,'margin-left': left, 'margin-top': top}">
    <router-view></router-view>
  </div>
</template>

<script>
// import util from './lib/util';
export default {
  name: 'app',
  data () {
    return {
      height: '100%',
      width: '100%',
      left: '0',
      top: '0'
    };
  },
  created () {
    // var screen = util.screen();
    // this.height = screen.width + 'px';
    // this.width = screen.height + 'px';
    // this.top = ((screen.height - screen.width) / 2) + 'px';
    // this.left = (-(screen.height - screen.width) / 2) + 'px';
    // let body = document.getElementsByTagName('body')[0];
    // body.style.width = screen.width + 'px';
    // body.style.height = screen.height + 'px';
  }
};
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: red;
    // transform: rotate(90deg);
  }
</style>
