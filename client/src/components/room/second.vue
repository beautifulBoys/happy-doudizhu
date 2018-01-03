<template>
  <div class="second">
    <div class="left">
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
            <li-card :item="item" :show="true" type="middle"></li-card>
          </template>
        </div>
        <div class="control">
          <div class="tip" v-show="tipShow">不出</div>
          <li-clock style="float: right" :second="countDown" v-model="clockStatus"></li-clock>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../images/nongmin2.png"/>
      <div class="user">
        <div class="name">呵呵呵呵</div>
        <div class="text">32万</div>
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
        tipShow: true,
        active: [
          {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
          {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
          {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5}
        ]
      };
    },
    computed: {
      ...mapState({
      }),
      ...mapGetters([]),
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
    margin-left: 50px;
    .right {
      width: 90px;
      font-size: 0;
      img {
        width: 90%;
        margin-top: 10px;
      }
      .user {
        width: 50px;
        text-align: center;
        margin-top: 5px;
        background: rgba(0,0,0,0.4);
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
      margin-right: 30px;
      .mingpai {
        height: 60px;
        width: 100%;
        text-align: right;
      }
      .control-box {
        width: 100%;
        height: 100px;
        padding-right: 10px;
        box-sizing: border-box;
        position: relative;
        text-align: right;
        .size {
          width: 25px;
          height: 30px;
          background: red;
          position: absolute;
          top: 70px;
          right: -30px;
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
