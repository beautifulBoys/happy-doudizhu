<template>
  <div class="card-box"
    :class="{middle: type === 'middle', small: type === 'small', checked: item.checked && canActive}"
  >
    <div class="card" :class="{bg: !show, act: canActive}" @click="checkEvent()">
      <div class="div fleft" v-show="show" >
        <div v-if="item.type === 'k'"><!--大小王-->
          <div class="text joker" :class="{a: item.text === 'b'}" v-for="item1 in joker">{{item1}}</div>
        </div>
        <div v-if="item.type !== 'k'"><!--四色牌-->
          <div class="text" :class="item.type">{{item.text}}</div>
          <img :src="cardIconData[item.type]" class="img"/>
        </div>
      </div>
      <div class="div fright" v-if="type !== 'small'" v-show="show" >
        <div v-if="item.type === 'k'"><!--大小王-->
          <div class="text joker" :class="{a: item.text === 'b'}" v-for="item1 in joker">{{item1}}</div>
        </div>
        <div v-if="item.type !== 'k'"><!--四色牌-->
          <div class="text" :class="item.type">{{item.text}}</div>
          <img :src="cardIconData[item.type]" class="img"/>
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
  import cardIconData from '../lib/data/card.json';
  export default {
    props: ['item', 'show', 'type', 'canActive'],
    data () {
      return {
        joker: ['J', 'O', 'K', 'E', 'R'],
        cardIconData,
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
    width: 30px;
    height: 100px;
    display: inline-block;
    text-align: center;
    z-index: 100;
    &.checked {
      margin-top: -25px;
    }
    .card {
      width: 74px;
      height: 100%;
      border: 1px solid #999;
      border-radius: 5px;
      background: #fff;
      text-align: left;
      padding: 5px 0;
      box-sizing: border-box;
      &.act {
        &:active {
          background: #ccc;
        }
      }
      &.bg {
        background: url(../images/card_bg.png) no-repeat;
        background-size: 70px;
      }
      .div {
        width: 30px;
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
          width: 18px;
        }
        .text {
          width: 100%;
          height: 26px;
          font-size: 26px;
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
    &.middle {
      width: 20px;
      height: 30px;
      transform: scale(0.6);
      .card {
        width: 70px;
        height: 90px;
      }
    }
    &.small {
      width: 18px;
      height: 32px;
      transform: scale(0.6);
      .card {
        width: 50px;
        height: 60px;
      }
    }
  }
</style>
