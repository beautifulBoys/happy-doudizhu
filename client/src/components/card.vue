<template>
  <div class="card-box" :class="{small: type === 'small', checked: item.checked && canActive}">
    <div class="card" :class="{bg: !show, act: canActive}" @click="checkEvent()">
      <div class="div" v-for="item2 in card" :class="item2" v-show="show">
        <div v-if="item.type === 'k'"><!--大小王-->
          <div class="text joker" :class="{a: item.text === 'b'}" v-for="item1 in joker">{{item1}}</div>
        </div>
        <div v-if="item.type !== 'k'"><!--四色牌-->
          <div class="text" :class="item.type">{{item.text}}</div>
          <img src="../images/card_icon_a.png" class="img" v-if="item.type === 'a'"/>
          <img src="../images/card_icon_b.png" class="img" v-if="item.type === 'b'"/>
          <img src="../images/card_icon_c.png" class="img" v-if="item.type === 'c'"/>
          <img src="../images/card_icon_d.png" class="img" v-if="item.type === 'd'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
  红心： a
  黑心： b
  梅花： c
  方块： d
*/
  export default {
    props: ['item', 'show', 'type', 'canActive'],
    data () {
      return {
        joker: ['J', 'O', 'K', 'E', 'R'],
        card: ['fleft', 'fright'],
        checked: false
      };
    },
    methods: {
      checkEvent () {
        if (this.canActive) {
          this.item.checked = !this.item.checked;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .card-box {
    width: 28px;
    height: 110px;
    display: inline-block;
    text-align: center;
    z-index: 100;
    &.checked {
      margin-top: -20px;
    }
    .card {
      width: 80px;
      height: 100%;
      border: 1px solid #999;
      border-radius: 5px;
      background: #fff;
      text-align: left;
      padding: 5px 0;
      box-sizing: border-box;
      &.act {
        &:active {
          background: #ddd;
        }
      }
      &.bg {
        background: url(../images/card_bg.png) no-repeat;
        background-size: 70px;
      }
      .div {
        width: 28px;
        height: 100%;
        text-align: center;
        font-size: 20px;
        &.fleft {
          float: left;
        }
        &.fright {
          float: right;
          transform: rotate(180deg);
        }
        .img {
          width: 15px;
        }
        .text {
          width: 100%;
          height: 25px;
          font-size: 25px;
          font-family: Arial;
          &.joker {
            font-size: 16px;
            line-height: 16px;
            height: 16px;
            font-weight: 500;
          }
          &.a {
            color: #ff0303;
          }
          &.b {
            color: #000;
          }
          &.c {
            color: #000;
          }
          &.d {
            color: #ff0303;
          }
        }
      }
    }
    &.small {
      width: 18px;
      height: 30px;
      transform: scale(0.6);
      .card {
        width: 70px;
        height: 90px;
      }
    }
  }
</style>
