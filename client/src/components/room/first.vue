<template>
  <div class="first">
    <div class="left">
      <img src="../../images/nongmin1.png"/>
      <div class="user">
        <div class="name">哈哈哈哈</div>
        <div class="text">234万</div>
      </div>
    </div>
    <div class="right">
      <div class="mingpai">
        <template v-for="item in mingpai">
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
        tipShow: true,
        mingpai: [
          {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
          {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
          {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
          {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
          {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
          {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
          {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
          {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
          {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16}
        ],
        active: [
          {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
          {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
          {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3}
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
  .first {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    margin-right: 1rem;
    .left {
      width: 1.8rem;
      font-size: 0;
      img {
        width: 90%;
        margin-top: 0.2rem;
      }
      .user {
        width: 1rem;
        text-align: center;
        margin-top: 0.1rem;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0 0.4rem 0.4rem 0;
        padding: 0.04rem 0.3rem 0.04rem 0.2rem;
        font-size: 0.24rem;
        color: #fff;
        .text {
          color: #fbd68c;
          font-size: 0.2rem;
        }
      }
    }
    .right {
      flex: 1;
      font-size: 0;
      .mingpai {
        height: 1.2rem;
        width: 100%;
      }
      .control-box {
        width: 100%;
        height: 2rem;
        box-sizing: border-box;
        position: relative;
        .size {
          width: 0.5rem;
          height: 0.6rem;
          background: red;
          position: absolute;
          top: 1.4rem;
          left: -0.2rem;
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
