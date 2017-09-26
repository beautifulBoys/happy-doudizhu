function bujiao (state) {
  state.jiaodizhuInfo = {
    index: 0,
    mine: ,
    first: ,
    second:
  };
  state.jiaodizhuInfo.index++;


  if (state.jiaodizhuIndex === 3) {
    state.httpServer.emit('jiao-di-zhu-success', info);
  } else {
    state.httpServer.emit('jiao-di-zhu', info);
  }
}
module.exports.bujiao = bujiao;
