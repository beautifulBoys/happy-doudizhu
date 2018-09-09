<template>
  <div class="second">
    <div class="left">
      <div class="mingpai">
        <template v-for="item in active">
          <li-card :item="item" :show="true" type="small"></li-card>
        </template>
        <div style="width: 0.6rem"></div>
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
      <div class="user-box">
        <img src="../../images/nongmin2.png"/>
        <div class="user">
          <div class="name">呵呵呵呵</div>
          <div class="text">32万</div>
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
    background-size: 2rem;
    box-sizing: border-box;
    position: relative;
    display: flex;
    margin-left: 1rem;
    .right {
      width: 1.8rem;
      font-size: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .user-box {
        width: 100%;
        height: 3rem;
        img {
          width: 90%;
          margin-top: 0.2rem;
        }
        .user {
          width: 1rem;
          text-align: center;
          margin-top: 0.1rem;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 0.4rem 0 0 0.4rem;
          padding: 0.04rem 0.2rem 0.04rem 0.3rem;
          font-size: 0.24rem;
          float: right;
          color: #fff;
          .name {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; // 超出行数
            overflow: hidden;
          }
          .text {
            color: #fbd68c;
            font-size: 0.2rem;
          }
        }
      }

    }
    .left {
      flex: 1;
      font-size: 0;
      margin-right: 0.6rem;
      .mingpai {
        height: 1.2rem;
        width: 100%;
        text-align: right;
      }
      .control-box {
        width: 100%;
        height: 2rem;
        padding-right: 0.2rem;
        box-sizing: border-box;
        position: relative;
        text-align: right;
        .size {
          width: 0.5rem;
          height: 0.6rem;
          background: red;
          position: absolute;
          top: 1.4rem;
          right: -0.6rem;
          .text {
            width: 100%;
            height: 100%;
            line-height: 0.6rem;
            text-align: center;
            font-size: 0.32rem;
            color: #fff;
            font-weight: 900;
            margin-top: -0.6rem;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .control {
          width: 100%;
          height: 1rem;
          text-align: right;
          .tip {
            color: #ffcc33;
            font-size: 0.5rem;
            font-weight: bold;
            text-shadow: 0.04rem 0.04rem 0.1rem rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
</style>
