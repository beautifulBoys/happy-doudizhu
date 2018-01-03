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
    height: 45px;
    display: flex;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 0 30px;
    box-sizing: border-box;
    .border-1px-bottom(rgba(255,255,255,0.3));
    .back {
      height: 100%;
      width: 45px;
      background: url(../images/back.png) no-repeat center center;
      background-size: 40px;
      margin-right: 5px;

      &:active {
        transform: scale(0.85);
      }
    }
    .user-icon {
      padding: 4px;
      box-sizing: border-box;
      height: 45px;
      width: 45px;
      img {
        width: 100%;
        height: 100%;
        border: 2px solid #fff;
        border-radius: 5px;
        box-sizing: border-box;
      }
    }
    .user-info {
      padding: 5px;
      font-size: 14px;
      .name {
        font-size: 16px;
        color: #fff;
        line-height: 20px;
        text-shadow: 0 0 5px rgba(0,0,0,0.5);
      }
      .level {
        color: #ffde2a;
        font-size: 12px;
        text-shadow: 0 0 5px rgba(0,0,0,0.7);
      }
    }
    .center {
      flex: 1;
      height: 45px;
      display: flex;
      .center-item {
        display: flex;
        margin: 8px 10px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        color: #ffe686;
        font-weight: 700;
        line-height: 28px;
        font-size: 20px;
        box-shadow: 0 0 5px rgba(49, 37, 28, 0.5) inset;
        border: 1px solid #444;
        text-align: center;
        box-sizing: border-box;
        .l, .r {
          height: 29px;
          width: 29px;
        }
        .c {
          flex: 1;
        }
        &.diamond {
          flex: 1;
          .l {
            background: url(../images/diamond.png) no-repeat center center;
            background-size: 40px;
          }
          .r {
            background: url(../images/add.png) no-repeat center center;
            background-size: 35px;
            &:active {
              transform: scale(0.85);
            }
          }
        }
        &.bean {
          flex: 1;
          .l {
            background: url(../images/bean.png) no-repeat center center;
            background-size: 40px;
          }
          .r {
            background: url(../images/add.png) no-repeat center center;
            background-size: 35px;
            &:active {
              transform: scale(0.85);
            }
          }
        }
      }
    }
    .gift {
      width: 45px;
      height: 45px;
      margin: 0 3px;
      background: url(../images/gift.png) no-repeat center center;
      background-size: 35px;
      &:active {
        transform: scale(0.9);
      }
    }
    .setting {
      width: 45px;
      height: 45px;
      margin: 0 3px;
      background: url(../images/setting.png) no-repeat center center;
      background-size: 35px;
      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
