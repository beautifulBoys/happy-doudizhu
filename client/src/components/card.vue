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
    width: 0.6rem;
    height: 2rem;
    display: inline-block;
    text-align: center;
    z-index: 100;
    &.checked {
      margin-top: -0.5rem;
    }
    .card {
      width: 1.48rem;
      height: 100%;
      border: 1px solid #999;
      border-radius: 0.1rem;
      background: #fff;
      text-align: left;
      padding: 0.1rem 0;
      box-sizing: border-box;
      &.act {
        &:active {
          background: #ccc;
        }
      }
      &.bg {
        background: url(../images/card_bg.png) no-repeat;
        background-size: 1.4rem;
      }
      .div {
        width: 0.6rem;
        height: 100%;
        text-align: center;
        font-size: 0.4rem;
        &.fleft {
          float: left;
        }
        &.fright {
          float: right;
          transform: rotate(180deg);
        }
        .img {
          width: 0.36rem;
        }
        .text {
          width: 100%;
          height: -0.52rem;
          font-size: -0.52rem;
          font-family: Arial;
          &.joker {
            font-size: 0.32rem;
            line-height: 0.32rem;
            height: 0.32rem;
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
      width: 0.4rem;
      height: 0.6rem;
      transform: scale(0.6);
      .card {
        width: 1.4rem;
        height: 1.8rem;
      }
    }
    &.small {
      width: 0.36rem;
      height: 0.64rem;
      transform: scale(0.6);
      .card {
        width: 1rem;
        height: 1.2rem;
      }
    }
  }
</style>
