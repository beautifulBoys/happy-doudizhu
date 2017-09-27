
var on_user = require('./user.js');

function judge (socket, info) {
  info.list[0].role = {
    type: 1, // 角色类型 1:地主   0:农民  -1:初始值
    text: '地主' // 角色类型解释说明
  };
  info.list[1].role = {
    type: 0, // 角色类型 1:地主   0:农民  -1:初始值
    text: '农民' // 角色类型解释说明
  };
  info.list[2].role = {
    type: 0, // 角色类型 1:地主   0:农民  -1:初始值
    text: '农民' // 角色类型解释说明
  };
  info.list[0].desk.cards = info.list[0].desk.cards.concat(info.commonInfo.diPaiInfo.cards);
  socket.emit('jiao-di-zhu-success', info);
  /*
  这部分代码用于后期建设。
  let index = 0;
  let list = info.list;

  if (info.commonInfo.jiaodizhuArr.length === 3) { // 已经是第四次叫地主了
    for (let i = 0; i < list.length; i++) {
      if (list[i].desk.jiaoDiZhuFourth !== -1) {
        info.commonInfo.jiaodizhuArr.push({
          cardIndex: list[i].cardIndex,
          value: list[i].desk.jiaoDiZhuFourth
        });
      }
    }
  } else { // 前三次叫地主
    info.commonInfo.jiaodizhuArr = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].desk.jiaoDiZhu === -1) break;
      else {
        info.commonInfo.jiaodizhuArr.push({
          cardIndex: list[i].cardIndex,
          value: 0
        });
      }
    }
  }
  let length = info.commonInfo.jiaodizhuArr.length;
  if (length > 2) {
    if (length === 3) {
      let length_true = 0;
      for (let i = 0, arr = info.commonInfo.jiaodizhuArr; i < 3; i++) {
        if (arr[i].value === 1) length_true++;
      }
      if (length_true === 1) socket.emit('jiao-di-zhu-success', info);
      else socket.emit('jiao-di-zhu', info);
    } else if (length === 4) {

    } else {
      console.log('这里出错了');
    }
  } else {
    socket.emit('jiao-di-zhu', info);
  }
  
  */
  

}

module.exports = function (socket, info) {
  judge(socket, info);
};