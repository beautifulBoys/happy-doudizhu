<template>
  <div class="screen" v-show="show">
    <div class="box">
      <div class="close" @click="$emit('close')">
        <div class="close-main">×</div>
      </div>
      <div class="main">
        <div class="main-top">设 置</div>
        <div class="main-bottom">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['show']
  };
</script>

<style lang="less" scoped>
@import "../lib/css/1px.less";
  .screen {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 80%;
      height: 80%;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 0.2rem;
      padding: 0.1rem 0.2rem;
      box-sizing: border-box;
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.4);
      .close {
        width: 0.64rem;
        height: 0.64rem;
        background: #fff;
        position: absolute;
        top: -0.28rem;
        right: -0.28rem;
        padding: 0.04rem;
        box-sizing: border-box;
        border-radius: 100%;
        box-shadow: 0 0 0.08rem rgba(0, 0, 0, 0.8);
        &:active {
          transform: scale(0.9);
        }
        .close-main {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          background: linear-gradient(180deg, rgb(240, 154, 118, 0.2), rgb(187, 64, 6));
          line-height: 0.46rem;
          text-align: center;
          font-size: 0.56rem;
          color: #fff;
        }
      }
      .main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        .main-top {
          height: 0.7rem;
          text-align: center;
          color: #fff;
          text-shadow: 0.04rem 0.04rem 0.1rem rgba(0, 0, 0, 0.2);
          font-size: 0.4rem;
          font-weight: 700;
          line-height: 0.56rem;
        }
        .main-bottom {
          flex: 1;
          background: rgb(249, 246, 238);
          border-radius: 0 0 0.14rem 0.14rem;
        }
      }
    }
  }
</style>
