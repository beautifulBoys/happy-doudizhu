var cards = require('../lib/cards.js');
var robot = require('../lib/robot.js');
var desk_func = require('../lib/desk_func.js');

function chupaiLog (cards, active, index) {
  var b = '';
  var c = '';
  for (var i = 0; i < cards.length; i++) {
    b += cards[i].text.toString() + ' ';
  }
  for (var j = 0; j < active.length; j++) {
      c += active[j].text.toString() + ' ';
  }
  console.log(index + '号玩家牌：' + b);
  console.log(index + '号玩家出牌：' + c);
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
  let index = info.commonInfo.chupaiIndex === 0 ? 2 : info.commonInfo.chupaiIndex -1;
  chupaiLog(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards, index);
  setTimeout(function () {
    let tipArr = robot.robot(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards);
    if (tipArr.length > 0) {
      info.commonInfo.activeCards = tipArr[0];
      info.list[info.commonInfo.chupaiIndex].desk.active = info.commonInfo.activeCards;
      chupaiLog(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards, info.commonInfo.chupaiIndex);
      info.list[info.commonInfo.chupaiIndex].desk.cards = shiftCards(info.list[info.commonInfo.chupaiIndex].desk.cards, info.commonInfo.activeCards); // 所出牌（active）将被扣出牌列
      if (info.commonInfo.chupaiIndex === 2) info.commonInfo.chupaiIndex = 0;
      else info.commonInfo.chupaiIndex++;
    } else {
      info.list[info.commonInfo.chupaiIndex].desk.active = [];
      info.list[info.commonInfo.chupaiIndex].control.activeType = 2;
      if (info.commonInfo.chupaiIndex === 2) info.commonInfo.chupaiIndex = 0;
      else info.commonInfo.chupaiIndex++;
    }
    socket.emit('chu-pai', info);   // 向自己推送  查看提示出牌的组合
  }, 2000);

};