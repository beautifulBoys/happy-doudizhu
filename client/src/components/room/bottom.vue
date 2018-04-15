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
    height: 35px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    padding: 5px 15px;
    box-sizing: border-box;
    font-size: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    .left {
      width: 130px;
      height: 100%;
      float: left;
      display: flex;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 15px;
      color: #ffe686;
      font-weight: 700;
      line-height: 22px;
      font-size: 20px;
      box-shadow: 0 0 5px rgba(49, 37, 28, 0.5) inset;
      border: 1px solid #444;
      text-align: center;
      box-sizing: border-box;
      .l {
        height: 22px;
        width: 22px;
      }
      .r {
        height: 22px;
        width: 22px;
        transform: scale(1.25);
      }
      .c {
        flex: 1;
      }
      &.bean {
        flex: 1;
        .l {
          background: url(../../images/bean.png) no-repeat center center;
          background-size: 30px;
        }
        .r {
          background: url(../../images/add.png) no-repeat center center;
          background-size: 25px;
          &:active {
            transform: scale(1.05);
          }
        }
      }
      // height: 100%;
      // background: rgba(0, 0, 0, 0.4);
      // border-radius: 15px;
      // color: #fbd68c;
      // font-weight: 700;
      // line-height: 22px;
      // box-shadow: 0 0 5px rgba(49, 37, 28, 0.5) inset;
      // border: 1px solid #444;
      // text-align: center;
      // box-sizing: border-box;
      // float: left;
      // display: flex;
      // font-size: 18px;
      // .bean {
      //   width: 25px;
      //   height: 100%;
      //   background: url(../../images/bean.png) no-repeat center center;
      //   background-size: 30px;
      //   transform: scale(1.1);
      // }
      // .text {
      //   flex: 1;
      //   padding: 0 10px;
      //   text-shadow: 3px 3px 3px rgba(49, 37, 28, 0.5);
      // }
      // .add {
      //   width: 25px;
      //   height: 100%;
      //   background: url(../../images/add.png) no-repeat center center;
      //   background-size: 25px;
      //   transform: scale(1.3);
      //   &:active {
      //     transform: scale(1);
      //   }
      // }
    }
    .center {
      width: 120px;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 15px;
      color: #fbd68c;
      font-weight: 700;
      line-height: 22px;
      font-size: 18px;
      box-shadow: 0 0 5px rgba(49, 37, 28, 0.5) inset;
      border: 1px solid #444;
      text-align: center;
      box-sizing: border-box;
      float: right;
      margin-right: 80px;
      display: flex;
      padding-right: 10px;
      .text {
        flex: 1;
        text-shadow: 3px 3px 3px rgba(49, 37, 28, 0.5);
      }
      .icon {
        width: 22px;
        height: 22px;
        background: url(../../images/bei.png) no-repeat center center;
        background-size: 25px;
        transform: scale(1.3);
      }
    }
    .right {
      width: 80px;
      height: 100%;
      float: right;
      border-radius: 15px;
      background: url(../../images/chat.png) no-repeat center center;
      background-size: 60px;
      transform: scale(1.15);

      &:active {
        transform: scale(1);
      }
    }
  }
</style>
