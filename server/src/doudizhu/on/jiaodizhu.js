
function judge (socket, info) {
  let index = 0;
  let list = info.list;
  let mapObj = {};
  for (let i = 0; i < list.length; i++) {
    if (list[i].desk.jiaoDiZhu !== -1) index++;
  }
  if (index === 3) {
    let i = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].desk.jiaoDiZhu === 1) i++;
    }
    if (i === 0) { // 重新发牌
      
    } else if (i === 1) { // 确认地主

    } else if (i === 2) { // 第四次叫地主

    } else if (i === 3) { // 第四次叫地主

    } else {
      console.log('这里出错了，请检查');
    }
  }
  info.commonInfo.jiaodizhuInfo.index = index;
  if (index) {

  }
}

module.export = function (socket, info) {
  judge(socket, info);
  socket.emit('jiao-di-zhu-success', info);
};