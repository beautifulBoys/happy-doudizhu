var cards = require('../lib/cards.js');
module.exports = function (socket, info) {
  var newCardArr = cards.distribute();
  
  for (let i = 0, list = info.list; i < list.length; i++) {
    if (list[i].weizhiIndex === i) list[i].desk.cards = newCardArr[i];
  }
  info.commonInfo.diPaiInfo.cards = newCardArr[3];
  socket.emit('desk-and-cards', info);
};