var cards = require('../lib/cards.js');
var robot = require('../lib/robot.js');
var desk_func = require('../lib/desk_func.js');

function chupaiLog (cards, active, index) {
  var a = '';
  var b = '';
  for (var i = 0; i < cards.length; i++) {
    a += cards[i].text.toString() + ' ';
  }
  for (var j = 0; j < active.length; j++) {
      b += active[j].text.toString() + ' ';
  }
  console.log(index + '号玩家牌：' + a + '\n');
  console.log(index + '号玩家出牌：' + b);
}
function shiftCards (cards, active) {
  for (var i = 0; i < cards.length; i++) {
    for (var j = 0; j < active.length; j++) {
      if (cards[i].id === active[j].id) cards.splice(i, 1);
    }
  }
  return cards;
}
module.exports = function (socket, info) {
  // var tipArrSecond = robot.robot(info.second.desk.cards, info.mine.desk.active);
  // info.second = desk_func.chupaizhihuan(info.second, tipArrSecond[0]);
  // var tipArrFirst = robot.robot(info.first.desk.cards, tipArrSecond[0]);
  
  info.commonInfo.activeCards = robot.robot(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards)[0];
  info.list[info.commonInfo.chupaiIndex].desk.active = info.commonInfo.activeCards;
  chupaiLog(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards, info.commonInfo.chupaiIndex);
  info.list[info.commonInfo.chupaiIndex].desk.cards = shiftCards(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards); // 所出牌（active）将被扣出牌列
  if (info.commonInfo.chupaiIndex === 2) info.commonInfo.chupaiIndex = 0;
  else info.commonInfo.chupaiIndex++;

  info.commonInfo.activeCards = robot.robot(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards)[0];
  info.list[info.commonInfo.chupaiIndex].desk.active = info.commonInfo.activeCards;
  chupaiLog(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards, info.commonInfo.chupaiIndex);
  info.list[info.commonInfo.chupaiIndex].desk.cards = shiftCards(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards); // 所出牌（active）将被扣出牌列
  if (info.commonInfo.chupaiIndex === 2) info.commonInfo.chupaiIndex = 0;
  else info.commonInfo.chupaiIndex++;

  socket.emit('chu-pai', info);   // 向自己推送  查看提示出牌的组合
  // socket.emit('chu-pai', robot.judgeCardType(info.mine.desk.active)); // 向自己推送  查看出牌的类型
  // robot(info.first.desk.cards, info.mine.desk.active);
};