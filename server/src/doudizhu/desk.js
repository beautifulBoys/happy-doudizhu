var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var cards = require('./lib/cards.js');
var robot = require('./lib/robot.js');
var desk_func = require('./lib/desk_func.js');
var on_jiaodizhu = require('./on/jiaodizhu.js');

// var Desk = require('./schemas/desk.js'); // 数据库处理

/*
      socket.emit('a', obj); // 向自己推送
      me.broadcast.emit('b', obj); // 广播给自己以外的所有用户

      角色：0：{role: '地主', type: ''}，1:{role: '农民1', type: ''}，2:{role: '农民2', type: ''}           type：1：人   0：机器人
*/
function desk () {
  io.on('connection', function (socket) {
    console.log('有人连入');
    socket.emit('connectSuccess');
    socket.on('user', function (info) { // 获取到用户信息，洗牌、分牌、发牌
      var newCardArr = cards.distribute();
/*
    0 : {
          cardIndex: null, // 发牌的顺序
          weizhiIndex: 0, // 本机显示位置的顺序
          role: {
            index: null, // 叫地主顺序
            type: null, // 角色类型
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
            isMingPai: false
          }
        }
*/
      
      for (let i = 0, list = info.list; i < list.length; i++) {
        if (list[i].weizhiIndex === 0) list[i].desk.cards = newCardArr[0];
        if (list[i].weizhiIndex === 1) list[i].desk.cards = newCardArr[1];
        if (list[i].weizhiIndex === 2) list[i].desk.cards = newCardArr[2];
        if (i === 3) list[i].cards = newCardArr[3];
      }

      socket.emit('desk-and-cards', info);
    });
    // 叫地主
    socket.on('jiao-di-zhu', function (info) {
      on_jiaodizhu(socket, info);
    });
    // 出牌
    socket.on('chu-pai', function (info) {
      var tipArrSecond = robot.robot(info.second.desk.cards, info.mine.desk.active);
      info.second = desk_func.chupaizhihuan(info.second, tipArrSecond[0]);
      var tipArrFirst = robot.robot(info.first.desk.cards, tipArrSecond[0]);



      socket.emit('chu-pai', {cards: info.first.desk.cards, arr: tipArr});   // 向自己推送  查看提示出牌的组合
      // socket.emit('chu-pai', robot.judgeCardType(info.mine.desk.active)); // 向自己推送  查看出牌的类型
      // robot(info.first.desk.cards, info.mine.desk.active);
    });

    //监听用户退出
    socket.on('disconnect', function () {
      // 有人退出了群聊
      console.log('有人退出');
    });


  });

  http.listen(3002, function () {
    console.log('后台程序已经启动，正在监听3002端口。');
  });
}

module.exports = desk;
