<template>
  <div class="room">
    <div class="background">
      <img class="img" src="../images/bg.jpg"/>
    </div>
    <div class="desk">
      <div class="body">
        <div class="header">
          <div class="left">
            <div class="back" @click="$router.go(-1)"></div>
            <div class="time">21:08</div>
          </div>
          <div class="center">
            <template v-for="item in active">
              <li-card :item="item" :show="true" type="small"></li-card>
            </template>
          </div>
          <div class="right">
            <div class="tuoguan"></div>
            <div class="huanzhuo"></div>
            <div class="shezhi" @click="settingShow = true"></div>
          </div>
        </div>
        <div class="top-box">
          <div class="top" v-show="true">
            <room-first></room-first>
            <room-second></room-second>
          </div>
        </div>
        <room-mine></room-mine>
      </div>
      <div class="bottom-box">
        <room-bottom></room-bottom>
      </div>
    </div>
    <li-model :show="settingShow" @close="modelCloseEvent"></li-model>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import firstCode from '../components/room/first.vue';
  import secondCode from '../components/room/second.vue';
  import mineCode from '../components/room/mine.vue';
  import bottomCode from '../components/room/bottom.vue';
  import Card from '../components/card.vue';
  import Model from '../components/model.vue';
  import io from '../lib/socket.io.js';
  export default {
    components: {
      'room-first': firstCode,
      'room-second': secondCode,
      'room-mine': mineCode,
      'room-bottom': bottomCode,
      'li-card': Card,
      'li-model': Model
    },
    data () {
      return {
        settingShow: false,
        active: [
          {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
          {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
          {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3}
        ]
      };
    },
    computed: {
      ...mapState({
        start: state => state.room.start,
        deskStatus: state => state.room.deskStatus
      }),
      ...mapGetters([]),
      ...mapMutations([])
    },
    mounted () {
      console.log(io);
      // this.$store.commit('create');
    },
    methods: {
      sortEvent () {
        this.$store.commit('sort');
      },
      modelCloseEvent () {
        this.settingShow = false;
      }
    }
  };
</script>
<style lang="less" scoped>
  .room {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    .background {
      width: 100%;
      height: 100%;
      .img {
        width: 100%;
      }
    }
    .desk {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-flow: column;
      background: url(../images/desk_bg.png) no-repeat center 200%;
      background-size: 100%;
      .body {
        flex: 1;
        display: flex;
        flex-flow: column;
        .header {
          height: 40px;
          width: 100%;
          display: flex;
          .left {
            width: 27%;
            padding: 0 20px;
            box-sizing: border-box;
            background: rgba(0,0,0,0.2);
            border-radius: 0 0 40px 0;
            border-bottom: 1px solid rgba(255,255,255,0.3);
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
            display: flex;
            .back {
              width: 40px;
              height: 40px;
              background: url(../images/back.png) no-repeat center center;
              background-size: 33px;
              &:active {
                transform: scale(0.9);
              }
            }
            .time {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 18px;
              color: #eee;
            }
          }
          .right {
            width: 30%;
            padding: 0 15px 0 30px;
            box-sizing: border-box;
            background: rgba(0,0,0,0.2);
            border-radius: 0 0 0 40px;
            border-bottom: 1px solid rgba(255,255,255,0.3);
            box-shadow: 0 0 5px rgba(0,0,0,0.3);
            display: flex;
            .tuoguan {
              width: 40px;
              height: 40px;
              background: url(../images/tuoguan.png) no-repeat center center;
              background-size: 35px;
              margin: 0 6px;
              &:active {
                transform: scale(0.9);
              }
            }
            .huanzhuo {
              width: 40px;
              height: 40px;
              background: url(../images/huanzhuo.png) no-repeat center center;
              background-size: 35px;
              margin: 0 6px;
              &:active {
                transform: scale(0.9);
              }
            }
            .shezhi {
              width: 40px;
              height: 40px;
              background: url(../images/shezhi.png) no-repeat center center;
              background-size: 35px;
              margin: 0 6px;
              &:active {
                transform: scale(0.9);
              }
            }
          }
          .center {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -17px;
          }
        }
        .top-box {
          flex: 1;
          display: flex;
          .top {
            width: 100%;
            height: 100%;
            display: flex;
          }
        }
      }
      .bottom-box {
        height: 35px;
        font-size: 0;
      }
    }
  }
</style>
