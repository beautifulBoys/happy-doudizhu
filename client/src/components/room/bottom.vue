<template>
  <div class="bottom">
    <!-- <div class="left">
      <div class="bean"></div>
      <div class="text">12.3万</div>
      <div class="add"></div>
    </div> -->
    <div class="left bean">
      <div class="l"></div>
      <div class="c">12321</div>
      <div class="r"></div>
    </div>
    <div class="right"></div>
    <div class="center">
      <div class="icon"></div>
      <div class="text">560</div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapState({
      }),
      ...mapGetters([])
    }
  };
</script>
<style lang="less"scoped>
  .bottom {
    width: 100%;
    height: 0.7rem;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
    padding: 0.1rem 0.3rem;
    box-sizing: border-box;
    font-size: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    .left {
      width: 2.6rem;
      height: 100%;
      float: left;
      display: flex;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 0.3rem;
      color: #ffe686;
      font-weight: 700;
      line-height: 0.44rem;
      font-size: 0.4rem;
      box-shadow: 0 0 0.1rem rgba(49, 37, 28, 0.5) inset;
      border: 1px solid #444;
      text-align: center;
      box-sizing: border-box;
      .l {
        height: 0.44rem;
        width: 0.44rem;
      }
      .r {
        height: 0.44rem;
        width: 0.44rem;
        transform: scale(1.25);
      }
      .c {
        flex: 1;
      }
      &.bean {
        flex: 1;
        .l {
          background: url(../../images/bean.png) no-repeat center center;
          background-size: 0.6rem;
        }
        .r {
          background: url(../../images/add.png) no-repeat center center;
          background-size: 0.5rem;
          &:active {
            transform: scale(1.05);
          }
        }
      }
    }
    .center {
      width: 2.4rem;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 0.3rem;
      color: #fbd68c;
      font-weight: 700;
      line-height: 0.44rem;
      font-size: 0.36rem;
      box-shadow: 0 0 0.1rem rgba(49, 37, 28, 0.5) inset;
      border: 1px solid #444;
      text-align: center;
      box-sizing: border-box;
      float: right;
      margin-right: 1.6rem;
      display: flex;
      padding-right: 0.2rem;
      .text {
        flex: 1;
        text-shadow: 0.06rem 0.06rem 0.06rem rgba(49, 37, 28, 0.5);
      }
      .icon {
        width: 0.44rem;
        height: 0.44rem;
        background: url(../../images/bei.png) no-repeat center center;
        background-size: 0.5rem;
        transform: scale(1.3);
      }
    }
    .right {
      width: 1.3rem;
      height: 100%;
      float: right;
      border-radius: 0.3rem;
      background: url(../../images/chat.png) no-repeat center center;
      background-size: 1.2rem;
      transform: scale(1.15);

      &:active {
        transform: scale(1);
      }
    }
  }
</style>
