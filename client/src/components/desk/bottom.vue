<template>
  <div class="bottom">
    <div class="left">
      <div class="bea"></div>
      <div class="text">{{info.mine.user.money}}</div>
      <div class="add">
        <div class="box">+</div>
      </div>
    </div>
    <div class="right">聊天</div>
    <div class="center">
      <div class="icon">
        <div class="box">倍</div>
      </div>
      <div class="text">{{info.mine.desk.times}}</div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapState({
        info: state => state.desk.info
      }),
      ...mapGetters([])
    }
  };
</script>
<style lang="less"scoped>
  .bottom {
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    padding: 4px 15px;
    box-sizing: border-box;
    font-size: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    .left {
      width: 130px;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 15px;
      color: #fbd68c;
      font-weight: 700;
      line-height: 28px;
      font-size: 0;
      box-shadow: 0 0 5px rgba(49, 37, 28, 0.5) inset;
      border: 1px solid #444;
      text-align: center;
      box-sizing: border-box;
      float: left;
      display: flex;
      div {
        font-size: 24px;
        &.bea {
          width: 25px;
          height: 100%;
          background: url(../../images/huanledou.png) no-repeat center center;
          background-size: 25px;
        }
        &.text {
          flex: 1;
          text-shadow: 3px 3px 3px rgba(49, 37, 28, 0.5);
        }
        &.add {
          width: 28px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: -3px;
          margin-top: -1px;
          color: #fff;
          font-weight: 800;
          .box {
            width: 28px;
            height: 28px;
            background: linear-gradient(-10deg, #1ae00a, #11a809, #0e9206, #11a809, #1ae00a);
            border-radius: 15px;
            font-size: 28px;
            line-height: 25px;
            text-align: center;
            box-shadow: 2px 2px 5px rgba(49, 37, 28, 0.5);
            &:active {
              transform: scale(0.9);
            }
          }
        }
      }
    }
    .center {
      width: 120px;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 15px;
      color: #fbd68c;
      font-weight: 700;
      line-height: 28px;
      font-size: 24px;
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
        width: 30px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -3px;
        .box {
          width: 25px;
          height: 25px;
          border-radius: 15px;
          border: 2px solid #fff;
          background: #cc5919;
          color: #fff;
          font-size: 18px;
          line-height: 23px;
        }
      }
    }
    .right {
      width: 60px;
      height: 100%;
      border-radius: 15px;
      background: linear-gradient(-10deg, #1ae00a, #11a809, #0e9206, #11a809, #1ae00a);
      font-size: 16px;
      float: right;
      color: #fff;
      font-weight: 800;
      line-height: 32px;
      text-align: center;
      box-shadow: 2px 2px 5px rgba(49, 37, 28, 0.5);
      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
