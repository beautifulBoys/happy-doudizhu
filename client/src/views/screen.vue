<template>
  <div class="screen">
    <div class="bg">
      <img class="img" src="../images/bg.jpg"/>
    </div>
    <div class="box">
      <li-header></li-header>
      <div class="body">
        <div class="way-box">
          <div class="scroll-box">
            <div class="line" v-for="(item, index) in config">
              <div class="item-box" v-for="(item1, index1) in item.list">
                <div :class="[{active: (index === active[0] && index1 === active[1])}, item1.class, 'item']" @click="choiceRoomEvent(index, index1)">
                  <div class="other">
                    <img src="../images/buxipai_icon.png" v-if="item.type === 1"/>
                    <div class="title">{{item1.title}}</div>
                    <div class="score">
                      <span class="left">底分</span>
                      <span class="right">{{item1.score}}</span>
                    </div>
                    <div class="bottom">欢乐豆：{{item1.desc}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="start" style="left: calc(50% - 70px)">快速开始</div>
      </div>
      <!-- <screen-footer></screen-footer> -->
    </div>
  </div>
</template>

<script>
  import header from '../components/header.vue';
  import footer from '../components/screen/footer.vue';
  export default {
    components: {
      'li-header': header,
      'screen-footer': footer
    },
    data () {
      return {
        config: [
          {
            type: 0,
            text: '洗牌',
            list: [
              {title: '新手场', class: 'color0', score: 8, desc: '1000 ~ 10万', active: false},
              {title: '初级场', class: 'color1', score: 20, desc: '2000 ~ 30万', active: false},
              {title: '普通场', class: 'color2', score: 48, desc: '8000 以上', active: false},
              {title: '中级场', class: 'color3', score: 120, desc: '3 万以上', active: false},
              {title: '高级场', class: 'color4', score: 320, desc: '8 万以上', active: false},
              {title: '顶级场', class: 'color5', score: 800, desc: '20 万以上', active: false}
            ]
          },
          {
            type: 1,
            text: '不洗牌',
            list: [
              {title: '新手场', class: 'color0', score: 8, desc: '1000 ~ 10万', active: false},
              {title: '初级场', class: 'color1', score: 20, desc: '2000 ~ 30万', active: false},
              {title: '普通场', class: 'color2', score: 48, desc: '8000 以上', active: false},
              {title: '中级场', class: 'color3', score: 120, desc: '3 万以上', active: false},
              {title: '高级场', class: 'color4', score: 320, desc: '8 万以上', active: false},
              {title: '顶级场', class: 'color5', score: 800, desc: '20 万以上', active: false}
            ]
          }
        ],
        active: [0, 0]
      };
    },
    methods: {
      choiceRoomEvent (index, index1) {
        this.active = [index, index1];
        this.$router.push({path: '/room'});
      }
    }
  };
</script>

<style lang="less" scoped>
  .screen {
    width: 100%;
    height: 100%;
    position: relative;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .img {
        width: 104%;
        margin-top: -2%;
        margin-left: -2%;
        filter: blur(2px);
      }
    }
    .box {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-flow: column;
      .body {
        width: 100%;
        padding: 10px 30px 50px 30px;
        box-sizing: border-box;
        flex: 1;
        .way-box {
          width: 100%;
          height: 100%;
          padding: 5px 10px;
          box-sizing: border-box;
          border-radius: 7px;
          background: linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
          box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.2);
          border-image: linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255,0)) 1 1;
          border-width: 0.3px;
          border-style: solid;
          border-bottom: none;
          .scroll-box {
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column;
            overflow-x: scroll;
            font-size: 0;
            .line {
              flex: 1;
              width: 1150px;
              display: flex;
              .item-box {
                flex: 1;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                display: inline-block;
                .item {
                  width: 100%;
                  height: 100%;
                  max-height: 120px;
                  border-radius: 10px;
                  border: 2px solid #fff;
                  box-sizing: border-box;
                  font-size: 16px;
                  color: #fff;
                  .other {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    flex-flow: column;
                    img {
                      width: 60px;
                      position: absolute;
                      top: -4px;
                      left: -4px;
                    }
                  }

                  &.color0 {
                    background: linear-gradient(180deg, #add764, #3f7a11);
                  }
                  &.color1 {
                    background: linear-gradient(180deg, #2dbdac, #03655c);
                  }
                  &.color2 {
                    background: linear-gradient(180deg, #68c5e8, #196097);
                  }
                  &.color3 {
                    background: linear-gradient(180deg, #e07791, #932050);
                  }
                  &.color4 {
                    background: linear-gradient(180deg, #ebb445, #a64110);
                  }
                  &.color5 {
                    background: linear-gradient(180deg, #a56ebc, #572a8c);
                  }
                  &:active {
                    transform: scale(0.9);
                  }
                  &.active {
                    border: 4px solid #ffd400;
                  }
                  .title {
                    width: 100%;
                    line-height: 45px;
                    text-align: center;
                    font-size: 25px;
                    color: rgba(255,255,255,1);
                    text-shadow: 0 0 4px rgba(0,0,0,0.6);
                  }
                  .score {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .left {
                      text-align: center;
                      background: rgba(255,255,255,0.35);
                      padding: 3px 7px;
                      line-height: 20px;
                      font-size: 13px;
                      color: rgba(255,255,255,0.9);
                      border-radius: 15px 0 0 15px;
                    }
                    .right {
                      text-align: center;
                      width: 40px;
                      background: rgba(255,255,255,0.2);
                      padding: 3px 7px;
                      line-height: 20px;
                      border-radius: 0 15px 15px 0;
                    }
                  }
                  .bottom {
                    width: 100%;
                    flex: 1;
                    background: rgba(0,0,0,0.3);
                    margin-top: 8px;
                    border-radius: 0 0 10px 10px;
                    color: rgba(255,255,255,0.7);
                    font-size: 13px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
              }
            }
          }
        }
        .start {
          width: 120px;
          height: 60px;
          position: fixed;
          bottom: -10px;
          margin: 0 auto;
          border-radius: 70px 70px 0 0;
          line-height: 60px;
          text-align: center;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          box-shadow: 0 -5px 10px rgba(0,0,0,0.1);
          background: linear-gradient(180deg, rgb(255,255,52), rgb(219,118,8));
          &:active {
            transform: scale(0.9);
          }
        }
      }
    }

  }
</style>
