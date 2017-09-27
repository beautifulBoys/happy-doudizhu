import {create, deal} from './lib/create.js';
import sort from './lib/sort.js';

import io from 'socket.io-client';
// import jiaodizhufunc from './desk_func/jiaodizhu.js';
// import robot from './desk_func/robot.js';

export default {
  state: {
    httpServer: null,
    start: false,
    deskStatus: ['start', 'search', 'fapai', 'jiaodizhu', 'chupai', 'jieshu'],
    timeObj: {
      chupai: 20,
      yaobuqi: 3
    },
    info: { // 整体传输info对象
      commonInfo: {
        deskId: 144,
        activeCards: [],
        chupaiIndex: 0,
        commonTimes: 15,
        jiaodizhuArr: [],
        diPaiInfo: { // 底牌
          cards: []
        }
      },
      list: [
        {
          cardIndex: 0, // 发牌的顺序 (此值为服务器判断基准，也是全局的唯一区别id )
          weizhiIndex: 0, // 本机显示位置的顺序 (这个值用于将自己置于第一视角，在本地自己进行转置处理 )
          role: {
            type: -1, // 角色类型
            text: '' // 角色类型解释说明
          },
          user: {
            id: 21,
            name: '深藏blue',
            money: 20580
          },
          desk: {
            active: [],
            cards: [],
            cards_fu: [],
            deathList: [],
            isMingPai: false,
            jiaoDiZhu: -1,
            jiaoDiZhuFourth: -1
          }
        },
        {
          cardIndex: 1,
          weizhiIndex: 1,
          role: {
            type: -1, // 角色类型
            text: '' // 角色类型解释说明
          },
          user: {
            id: 22,
            name: '百里藏锋',
            money: 1860
          },
          desk: {
            active: [],
            cards: [],
            cards_fu: [],
            deathList: [],
            isMingPai: false,
            jiaoDiZhu: -1,
            jiaoDiZhuFourth: -1
          }
        },
        {
          cardIndex: 2,
          weizhiIndex: 2,
          role: {
            type: -1, // 角色类型
            text: '' // 角色类型解释说明
          },
          user: {
            id: 23,
            name: '远古天魔蟒',
            money: 60000
          },
          desk: {
            active: [],
            cards: [],
            cards_fu: [],
            deathList: [],
            isMingPai: false,
            jiaoDiZhu: -1,
            jiaoDiZhuFourth: -1
          }
        }
      ]
    },
    ready: false
  },
  getters: {
    cardsCount (state) {
      return [state.info.list[0].desk.cards.length, state.info.list[1].desk.cards.length, state.info.list[2].desk.cards.length];
    }
  },
  mutations: {
    create (state) { // 创建扑克、洗牌、发牌、排序
      var arr = create();
      deal(state.mine.card, arr[0], () => { // 发牌动画
        setTimeout(() => {
          state.mine.card = sort(state.mine.card);
          state.ready = true;
        }, 500);
      });
      deal(state.first.card, arr[1], () => {
        state.first.card = sort(state.first.card);
      });
      deal(state.second.card, arr[2], () => {
        state.second.card = sort(state.second.card);
      });
      state.third = arr[3];
    },
    updateTimes (state, id, n) {},
    saveHttpServer (state, httpServer) {
      state.httpServer = httpServer;
      // state.deskStatus.shift();
      client(state, httpServer);
    },
    bujiaoEvent (state) {
      state.info.list[0].desk.jiaoDiZhu = 1;
      state.httpServer.emit('jiao-di-zhu', state.info);
    },
    jiaodizhuEvent (state) {
      state.info.list[0].desk.jiaoDiZhu = 1;
      state.httpServer.emit('jiao-di-zhu', state.info);
    },
    buchuEvent (state) {
      state.info.mine.desk.chupaiObj.textShow = true;
      state.httpServer.emit('chu-pai', state.info);
    },
    chupaiEvent (state) {
      let mine = state.info.list[0];
      mine.desk.active = [];

      var mineNew = [];
      var playCards = [];
      for (let i = 0; i < mine.desk.cards.length; i++) {
        if (mine.desk.cards[i].checked) {
          mine.desk.cards[i].alive = false;
          playCards.push(mine.desk.cards[i]);
        } else {
          mineNew.push(mine.desk.cards[i]);
        }
      }

      mine.desk.cards = mineNew;
      mine.desk.active = playCards.reverse();
      mine.desk.deathList.push(mine.desk.active);
      state.info.commonInfo.chupaiIndex++;
      state.info.commonInfo.activeCards = mine.desk.active;
      // console.log(robot.judgeCardType(state.info.mine.desk.active)); // 测试判断出牌类型
      state.httpServer.emit('chu-pai', state.info);
    }
  },
  actions: {
    startEvent ({ commit }) {
      let httpServer = io.connect('http://10.209.96.67:3002');
      commit('saveHttpServer', httpServer);
    }
  }
};

function client (state, httpServer) {
  httpServer.on('connectSuccess', () => {
    console.log('连接成功');
    httpServer.emit('user', state.info);
  });
  httpServer.on('desk-and-cards', (info) => { // 分桌并发牌
    // state.start = true;
    for (let i = 0; i < 3; i++) {
      info.list[i].desk.cards = sort(info.list[i].desk.cards);
    }
    state.info = info;
    state.deskStatus.shift();
    state.deskStatus.shift();
    state.deskStatus.shift();
    console.log('desk-and-cards', info);

    // deal(state.info.mine.desk.cards, info.mine.desk.cards_fu, () => {
    //   setTimeout(() => {
    //     state.info.mine.desk.cards = sort(state.info.mine.desk.cards);
    //     state.deskStatus.shift();
    //   }, 500); // 此处可以写一个排序动画
    // });
  });
  httpServer.on('jiao-di-zhu', (info) => { // 叫地主 -- 收到的回复

  });
  httpServer.on('jiao-di-zhu-success', (info) => { // 叫地主 -- 收到的回复
    state.info = info;
    state.deskStatus.shift();
  });
  httpServer.on('chu-pai', (info) => { // 出牌
    state.info = info;
  });
}
