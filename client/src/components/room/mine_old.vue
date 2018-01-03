<template>
  <div class="mine">
    <div class="left">
      <img src="../../images/dizhu.png"/>
      <div class="user"><span>{{info.mine.user.name}}</span></div>
    </div>

    <div class="right">
      <template v-for="item in card">
        <li-card :item="item" :show="true" :canActive="true"></li-card>
      </template>
      <div style="width: 50px"></div>
    </div>

    <div class="control">
      <div class="control-position">
        <div class="play-card" v-show="info.mine.desk.chupaiObj.cardShow">
          <template v-for="item in active">
            <li-card :item="item" :show="true" type="small"></li-card>
          </template>
          <div style="width: 30px"></div>
        </div>
        <div class="play-tip" v-show="info.mine.desk.chupaiObj.textShow">
          <div class="control-text">不出</div>
        </div>
        <div class="play-control" v-show="!info.mine.desk.chupaiObj.textShow">
          <div class="control-box-btn" v-show="deskStatus[0] === 'start'">
            <div class="btn width" @click="startEvent(5)">明牌开始<span class="span"> X5</span></div>
            <div class="btn width blue" @click="startEvent(1)">开始游戏</div>
          </div>
          <div class="control-box-btn" v-show="deskStatus[0] === 'jiaodizhu' && (info.jiaodizhuIndex === 0 || info.jiaodizhuIndex === 4)">
            <div class="btn" @click="bujiaoEvent()">不叫</div>
            <div class="btn" @click="jiaodizhuEvent()">叫地主</div>
            <!-- <div class="btn" @click="qiangdizhuEvent()">抢地主</div> -->
            <!-- <li-clock style="margin-top:15px;" :second="timeObj.chupai" v-model="clockStatus" @timeOut="timeOutEvent()"></li-clock> -->
          </div>
          <div class="control-box-btn" v-show="deskStatus[0] === 'chupai' && info.mine.desk.chupaiObj.status">
            <div class="btn"@click="buchuEvent()">不出</div>
            <div class="btn" @click="tipEvent()">提示</div>
            <div class="btn" @click="chupaiEvent()">出牌</div>
            <!-- <li-clock style="margin-top:15px;" :second="timeObj.chupai" v-model="clockStatus" @timeOut="timeOutEvent()"></li-clock> -->
          </div>

        </div>
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
        controlShow: true
      };
    },
    computed: {
      ...mapState({
        card: state => state.desk.info.mine.desk.cards,
        active: state => state.desk.info.mine.desk.active,
        deskStatus: state => state.desk.deskStatus,
        info: state => state.desk.info,
        timeObj: state => state.desk.timeObj
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
  .mine {
    width: 100%;
    height: 40%;
    display: flex;
    position: relative;
    .left {
      width: 100px;
      min-width: 100px;
      font-size: 0;
      img {
        width: 100%;
      }
      .user {
        width: 100%;
        text-align: center;
        margin-top: 4px;
        span {
          background: rgba(0,0,0,0.2);
          border-radius: 10px;
          padding: 2px 15px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -30px;
    }
    .control {
      position: absolute;
      left: 0;
      top: -45%;
      width: 100%;
      height: 40px;
      .control-position {
        width: 90%;
        height: 100%;
        margin-left: 10%;
        position: relative;
        .play-card {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .play-control {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          .control-box-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            &.text {
              padding-top: 15px;
              color: #ffcc33;
              font-size: 28px;
              font-weight: bold;
              text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
            }
            .btn {
              width: 90px;
              height: 35px;
              background: linear-gradient(180deg, #f2d903, #e6ba01, #d59300, #c15e03);
              text-align: center;
              border-radius: 18px;
              line-height: 35px;
              font-size: 20px;
              color: #fff;
              font-weight: 900;
              text-shadow: 0 0 2px rgba(0,0,0,0.5);
              box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
              margin: 20px 20px 0 0;
              &.width {
                width: 140px;
                &.blue {
                  background: linear-gradient(180deg, #09d1eb, #09a3e9, #0175c2, #005da3);
                }
                .span {
                  font-size: 16px;
                }
              }
              &:active {
                transform: scale(0.9);
              }
            }
          }
        }
        .play-tip {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          padding-top: 16px;
          .control-text {
            color: #ffcc33;
            font-size: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
            text-align: center;
          }
        }
      }
    }
  }
</style>
