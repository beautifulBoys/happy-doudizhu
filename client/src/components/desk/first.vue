<template>
  <div class="first">
    <div class="left">
      <img src="../../images/nongmin1.png"/>
      <div class="user">
        <div class="name">{{info.first.user.name}}</div>
        <div class="text">{{info.first.user.money}}</div>
      </div>
    </div>
    <div class="right">
      <div class="mingpai">
        <template v-for="item in active">
          <li-card :item="item" :show="true" type="small"></li-card>
        </template>
        <div style="width: 30px"></div>
      </div>
      <div class="control-box">
        <div class="size">
          <img src="../../images/card_bg.png"/>
          <div class="text">17</div>
        </div>
        <div>
          <template v-for="item in active">
            <li-card :item="item" :show="true" type="small"></li-card>
          </template>
        </div>
        <div class="control">
          <div class="tip" v-show="tipShow">不出</div>
          <li-clock :second="countDown" v-model="clockStatus"></li-clock>
        </div>
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
        active: state => state.desk.info.first.desk.active,
        info: state => state.desk.info
      }),
      ...mapGetters([]),
      ...mapMutations([])
    }
  };
</script>
<style lang="less" scoped>
  .first {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    .left {
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
        border-radius: 0 20px 20px 0;
        padding: 2px 15px 2px 10px;
        font-size: 12px;
        color: #fff;
        .text {
          color: #fbd68c;
          font-size: 10px;
        }
      }
    }
    .right {
      flex: 1;
      font-size: 0;
      .mingpai {
        height: 60px;
        width: 100%;
      }
      .control-box {
        width: 100%;
        height: 100px;
        padding-left: 10px;
        box-sizing: border-box;
        position: relative;
        .size {
          width: 25px;
          height: 30px;
          background: red;
          position: absolute;
          top: 60px;
          left: -10px;
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
