<template>
  <div class="header border-1px-bottom">
    <div class="back"></div>
    <div class="user-icon">
      <img src="https://raw.githubusercontent.com/beautifulBoys/beautifulBoys.github.io/master/source/tourism-circle/avatar.png"/>
    </div>
    <div class="user-info">
      <div class="name">深藏 Blue</div>
      <div class="level">27 级</div>
    </div>
    <div class="center">
      <div class="center-item bean">
        <div class="l"></div>
        <div class="c">12321</div>
        <div class="r"></div>
      </div>
      <div class="center-item diamond">
        <div class="l"></div>
        <div class="c">3453</div>
        <div class="r"></div>
      </div>
    </div>
    <div class="gift"></div>
    <div class="setting"></div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="less" scoped>
@import "../lib/css/1px.less";
  .header {
    width: 100%;
    height: 0.8rem;
    display: flex;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
    padding: 0 0.4rem;
    box-sizing: border-box;
    .border-1px-bottom(rgba(255, 255, 255, 0.3));
    .back {
      height: 100%;
      width: 0.8rem;
      background: url(../images/back.png) no-repeat center center;
      background-size: 0.66rem;
      margin-right: 0.1rem;

      &:active {
        transform: scale(0.85);
      }
    }
    .user-icon {
      padding: 0.08rem;
      box-sizing: border-box;
      height: 0.8rem;
      width: 0.8rem;
      img {
        width: 100%;
        height: 100%;
        border: 0.04rem solid #fff;
        border-radius: 0.1rem;
        box-sizing: border-box;
      }
    }
    .user-info {
      padding: 0.1rem 0 0.1rem 0.04rem;
      font-size: 0.28rem;
      .name {
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.32rem;
        text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.5);
      }
      .level {
        color: #ffde2a;
        font-size: 0.24rem;
        text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.7);
      }
    }
    .center {
      flex: 1;
      height: 0.8rem;
      display: flex;
      .center-item {
        display: flex;
        margin: 0.12rem 0.2rem;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0.3rem;
        color: #ffe686;
        font-weight: 700;
        line-height: 0.52rem;
        font-size: 0.4rem;
        box-shadow: 0 0 0.1rem rgba(49, 37, 28, 0.5) inset;
        border: 1px solid #444;
        text-align: center;
        box-sizing: border-box;
        .l, .r {
          height: 0.52rem;
          width: 0.52rem;
          transform: scale(1.2);
        }
        .c {
          flex: 1;
        }
        &.diamond {
          flex: 1;
          .l {
            background: url(../images/diamond.png) no-repeat center center;
            background-size: 0.6rem;
          }
          .r {
            background: url(../images/add.png) no-repeat center center;
            background-size: 0.6rem;
            &:active {
              transform: scale(1);
            }
          }
        }
        &.bean {
          flex: 1;
          .l {
            background: url(../images/bean.png) no-repeat center center;
            background-size: 0.6rem;
          }
          .r {
            background: url(../images/add.png) no-repeat center center;
            background-size: 0.6rem;
            &:active {
              transform: scale(1);
            }
          }
        }
      }
    }
    .gift {
      width: 0.8rem;
      height: 0.8rem;
      margin: 0 0.06rem;
      background: url(../images/gift.png) no-repeat center center;
      background-size: 0.66rem;
      &:active {
        transform: scale(0.9);
      }
    }
    .setting {
      width: 0.8rem;
      height: 0.8rem;
      margin: 0 0.06rem;
      background: url(../images/setting.png) no-repeat center center;
      background-size: 0.66rem;
      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
