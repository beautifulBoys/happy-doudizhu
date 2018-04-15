<template>
  <div class="mine-box">
    <div class="control">
      <div class="start-box" v-show="false">
        <div class="btn width blue">开始游戏</div>
        <div class="btn width">名牌开始<span class="second">x4</span></div>
      </div>
      <div class="play-card" v-show="false">
        <template v-for="item in cardActList">
          <li-card :item="item" :show="true" type="middle"></li-card>
        </template>
        <div style="width: 0.6rem"></div>
      </div>
      <div class="play-control">
        <div class="control-box-btn" v-show="true">
          <div class="btn" @click="bujiaoEvent()">不叫</div>
          <div class="btn" @click="jiaodizhuEvent()">叫地主</div>
          <!-- <div class="btn" @click="qiangdizhuEvent()">抢地主</div> -->
          <!-- <li-clock style="margin-top:15px;" :second="timeObj.chupai" v-model="clockStatus" @timeOut="timeOutEvent()"></li-clock> -->
        </div>
        <div class="control-box-btn" v-show="false">
          <div class="btn"@click="buchuEvent()">不出</div>
          <div class="btn" @click="tipEvent()">提示</div>
          <div class="btn" @click="chupaiEvent()">出牌</div>
          <!-- <li-clock style="margin-top:15px;" :second="timeObj.chupai" v-model="clockStatus" @timeOut="timeOutEvent()"></li-clock> -->
        </div>
      </div>
    </div>
    <div class="mine-card">
      <div class="left">
        <img src="../../images/dizhu.png"/>
        <div class="user"><span>{{info.mine.user.name}}</span></div>
      </div>

      <div class="right" :class="{n17: cardList.length > 17}">
        <template v-for="item in cardList">
          <li-card :item="item" :show="true" type="big" :canActive="true"></li-card>
        </template>
        <div style="width: 60px"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  import Clock from './clock.vue';
  import Card from '../card.vue';
  export default {
    components: {
      'li-card': Card,
      'li-clock': Clock
    },
    data () {
      return {
        countDown: 15,
        clockStatus: false,
        noPlay: false,
        cardShow: false,
        controlShow: true,
        cardList: [
          {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
          {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
          {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
          {id: '5', checked: false, alive: true, type: 'a', text: '6', value: 6},
          {id: '6', checked: false, alive: true, type: 'a', text: '7', value: 7},
          {id: '7', checked: false, alive: true, type: 'a', text: '8', value: 8},
          {id: '8', checked: false, alive: true, type: 'a', text: '9', value: 9},
          {id: '9', checked: false, alive: true, type: 'a', text: '10', value: 10},
          {id: '10', checked: false, alive: true, type: 'a', text: 'J', value: 11},
          {id: '11', checked: false, alive: true, type: 'a', text: 'Q', value: 12},
          {id: '12', checked: false, alive: true, type: 'a', text: 'K', value: 13},
          {id: '13', checked: false, alive: true, type: 'b', text: 'A', value: 14},
          {id: '14', checked: false, alive: true, type: 'b', text: '2', value: 16},
          {id: '15', checked: false, alive: true, type: 'b', text: '3', value: 3},
          {id: '16', checked: false, alive: true, type: 'b', text: '4', value: 4},
          {id: '14', checked: false, alive: true, type: 'b', text: '2', value: 16},
          {id: '15', checked: false, alive: true, type: 'b', text: '3', value: 3}
        ],
        cardActList: [
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
        card: state => state.room.info.mine.desk.cards,
        active: state => state.room.info.mine.desk.active,
        deskStatus: state => state.room.deskStatus,
        info: state => state.room.info,
        timeObj: state => state.room.timeObj
      }),
      ...mapGetters([])
    },
    methods: {
      ...mapActions({
        startEvent: 'startEvent'
      }),
      tipEvent () {

      },
      noPlayEvent () {
        this.countDown = 0;
        this.controlShow = false;
        this.tipShow = true;
      },
      ...mapMutations({
        bujiaoEvent: 'bujiaoEvent',
        jiaodizhuEvent: 'jiaodizhuEvent',
        timeOutEvent: 'buchuEvent',
        chupaiEvent: 'chupaiEvent',
        buchuEvent: 'buchuEvent'
      })
    }
  };
</script>
<style lang="less" scoped>
  .mine-box {
    width: 100%;
    height: 35%;
    display: flex;
    flex-flow: column;
    position: relative;
    .control {
      width: 100%;
      height: 1rem;
      position: absolute;
      top: -1rem;
      left: 0;
      font-size: 0;
      .btn {
        width: 2rem;
        height: 0.8rem;
        background: linear-gradient(180deg, #f2d903, #e6ba01, #d59300, #c15e03);
        text-align: center;
        border-radius: 0.4rem;
        line-height: 0.76rem;
        font-size: 0.4rem;
        color: #fff;
        font-weight: 900;
        text-shadow: 0 0 0.04rem rgba(0, 0, 0, 0.5);
        box-shadow: 0.06rem 0.06rem 0.1rem rgba(0, 0, 0, 0.3);
        display: inline-block;
        margin: 0 0.2rem;
        .second {
          font-size: 0.32rem;
          margin: 0 0 0 0.1rem;
        }
        &.width {
          width: 2.8rem;
          &.blue {
            background: linear-gradient(180deg, #09d1eb, #09a3e9, #0175c2, #005da3);
          }
          .span {
            font-size: 0.32rem;
          }
        }
        &:active {
          transform: scale(0.9);
        }
      }
      .start-box {
        width: 6.4rem;
        height: 0.8rem;
        margin: 0.1rem auto;
      }
      .play-card {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -0.4rem;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .play-control {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0.1rem;
        left: 0;
        .control-box-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          &.text {
            padding-top: 0.3rem;
            color: #ffcc33;
            font-size: 0.56rem;
            font-weight: bold;
            text-shadow: 0.04rem 0.04rem 0.1rem rgba(0, 0, 0, 0.5);
          }

        }
      }
    }
    .mine-card {
      width: 100%;
      flex: 1;
      display: flex;
      .left {
        width: 2rem;
        min-width: 2rem;
        font-size: 0;
        img {
          width: 90%;
        }
        .user {
          width: 100%;
          text-align: center;
          margin-top: 0.08rem;
          span {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 0.2rem;
            padding: 0.04rem 0.3rem;
            font-size: 0.24rem;
            color: #fff;
          }
        }
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &.n17 {
          margin-left: -1.8rem;
        }
      }
    }
  }

</style>
