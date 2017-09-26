<template>
  <div class="second">
    <div class="left">
      <div class="mingpai">
        <template v-for="item in listItem.desk.cards"  v-if="listItem.desk.isMingPai">
          <li-card :item="item" :show="true" type="small"></li-card>
        </template>
        <div style="width: 30px"></div>
      </div>
      <div class="control-box">
        <div class="size">
          <img src="../../images/card_bg.png"/>
          <div class="text">{{cardsCount[2]}}</div>
        </div>
        <div>
          <template v-for="item in listItem.desk.active">
            <li-card :item="item" :show="true" type="small"></li-card>
          </template>
        </div>
        <div class="control">
          <div class="tip" v-show="tipShow">不出</div>
          <!-- <li-clock style="float: right" :second="countDown" v-model="clockStatus"></li-clock> -->
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../images/nongmin2.png"/>
      <div class="user">
        <div class="name">{{listItem.user.name}}</div>
        <div class="text">{{listItem.user.money}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import Card from '../card.vue';
  import Clock from './clock.vue';
  export default {
    components: {
      'li-card': Card,
      'li-clock': Clock
    },
    data () {
      return {
        clockStatus: false,
        countDown: 12,
        tipShow: true
      };
    },
    computed: {
      ...mapState({
        listItem: state => state.desk.info.list[2]
      }),
      ...mapGetters(['cardsCount']),
      ...mapMutations([])
    }
  };
</script>
<style lang="less" scoped>
  .second {
    flex: 1;
    height: 100%;
    background-size: 100px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    .right {
      width: 100px;
      font-size: 0;
      img {
        width: 100%;
        margin-top: 20px;
      }
      .user {
        width: 50px;
        text-align: center;
        margin-top: 10px;
        background: rgba(0,0,0,0.2);
        border-radius: 20px 0 0 20px;
        padding: 2px 10px 2px 15px;
        font-size: 12px;
        float: right;
        color: #fff;
        .text {
          color: #fbd68c;
          font-size: 10px;
        }
      }
    }
    .left {
      flex: 1;
      font-size: 0;
      .mingpai {
        height: 60px;
        width: 100%;
      }
      .control-box {
        width: 100%;
        height: 100px;
        padding-right: 10px;
        box-sizing: border-box;
        position: relative;
        .size {
          width: 25px;
          height: 30px;
          background: red;
          position: absolute;
          top: 60px;
          right: -10px;
          .text {
            width: 100%;
            height: 100%;
            line-height: 30px;
            text-align: center;
            font-size: 16px;
            color: #fff;
            font-weight: 900;
            margin-top: -30px;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .control {
          width: 100%;
          height: 50px;
          text-align: right;
          .tip {
            color: #ffcc33;
            font-size: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
          }
        }
      }
    }
  }
</style>
