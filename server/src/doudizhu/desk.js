var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var cards = require('./lib/cards.js');
var robot = require('./lib/robot.js');
var desk_func = require('./lib/desk_func.js');

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
      info.mine.desk.deskId = 12;
      info.mine.desk.role.index = 0; // 叫地主顺序
      info.mine.desk.role.type = 1; // 角色类型
      info.mine.desk.role.text = '地主'; // 角色类型解释说明
      info.mine.desk.cards_fu = newCardArr[info.mine.desk.role.index];

      info.first.desk.deskId = 12;
      info.first.desk.role.index = 1; // 叫地主顺序
      info.first.desk.role.type = 0; // 角色类型
      info.first.desk.role.text = '农民'; // 角色类型解释说明
      info.first.desk.cards = newCardArr[info.first.desk.role.index];
      info.first.user = {
        id: 22,
        name: '醉生梦死',
        money: 20130
      };

      info.first.desk.deskId = 12;
      info.first.desk.role.index = 2; // 叫地主顺序
      info.first.desk.role.type = 0; // 角色类型
      info.first.desk.role.text = '农民'; // 角色类型解释说明
      info.second.desk.cards = newCardArr[info.second.desk.role.index];
      info.second.user = {
        id: 23,
        name: '望穿秋水',
        money: 53330
      };
      info.other = newCardArr[3];
      socket.emit('desk-and-cards', info);
    });
    // 叫地主
    socket.on('jiao-di-zhu', function (info) {
      socket.emit('jiao-di-zhu-success', info); // 向自己推送
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
