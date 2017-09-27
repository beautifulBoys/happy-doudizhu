var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var cards = require('./lib/cards.js');
var robot = require('./lib/robot.js');
var desk_func = require('./lib/desk_func.js');
var on_jiaodizhu = require('./on/jiaodizhu.js');
var on_user = require('./on/user.js');
var on_chupai = require('./on/chupai.js');


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
      on_user(socket, info);
    });
    // 叫地主
    socket.on('jiao-di-zhu', function (info) {
      on_jiaodizhu(socket, info);
    });
    // 出牌
    socket.on('chu-pai', function (info) {
      on_chupai(socket, info);
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
