function jiaodizhu (info) {

}
function chupaizhihuan (info, active) { // 确定出牌后，处理牌的逻辑
  info.desk.active = active;
  info.desk.deathList.push(active);
  let cards = info.desk.cards;
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < active.length; j++) {
      if (cards[i].id === active[j].id) cards.splice(i, 1);
    }
  }
  return info;
}

module.exports.jiaodizhu = jiaodizhu;
module.exports.chupaizhihuan = chupaizhihuan;
