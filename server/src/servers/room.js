
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let roomList = [];

module.exports = function () {
  io.on('connection', socket => {

    //监听新上线用户
    socket.on('online', function (obj) {
      this.userId = obj.fromId - 0;
      roomList.push(socket);
      this.emit('onlined', {userId: this.userId});
    });

    //监听用户退出
    socket.on('disconnect', function () { // {userId: 1004}
      roomList = roomList.filter((item) => {
        if (item.userId - 0 === this.userId) console.log(item.userId + '退出');
        return (item.userId - 0 !== this.userId);
      });
      this.broadcast.emit('logout', {userId: this.userId});
    });

    //监听用户发布聊天内容
    socket.on('message', function (obj) { // {fromId, toId, message}
      this.emit('message', { // 对话方不在线。
        fromId: obj.toId,
        toId: obj.fromId,
        type: 2,
        message: '对方不在线，请稍后联系他'
      });
    });

  });

  let port = 3006;
  http.listen(port, function () {
    console.log('斗地主服务启动:' + port);
  });
};
