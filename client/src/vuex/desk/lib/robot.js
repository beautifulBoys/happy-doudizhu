/*
这个文件是机器人文件，以后会分为不同的模块
*/
function robot (arr, active) { // 机器人
  if (active) {

  } else { // 不出牌 (过)

  }
}
const cardTypeMap = {
  err: '错误',
  0: '单',
  1: '对',
  2: '顺子',
  3: '三带一',
  4: '三带一对',
  5: '四带二',
  6: '三个X',
  7: '飞机',
  8: '连对',
  9: '炸弹',
  10: '王炸',
  11: '四带两对'
};
function sortSmall (arr) {
  return arr.sort((a, b) => {
    return a.value - b.value;
  });
}
function fanchaCardType (str) {
  return cardTypeMap[str];
}
function judgeCardType (active) { // 判断出的是什么类型的牌
  var length = active.length;
  var type = null;
  if (length === 1) {
    type = 0;
  } else if (length === 2) {
    if (obj.is_dui(active)) type = 1;
    else if (obj.is_wangzha(active)) type = 10;
    else console.log('判断类型出错了', active);
  } else if (length === 3) {
    type = 6;
  } else if (length === 4) {
    if (obj.is_sandaiyi(active)) type = 3;
    else if (obj.is_zhadan(active)) type = 9;
    else console.log('判断类型出错了', active);
  } else if (length === 5) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_sandaiyidui(active)) type = 4;
    else console.log('判断类型出错了', active);
  } else if (length === 6) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_feiji(active)) type = 7;
    else if (obj.is_sidaier(active)) type = 5;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else if (length === 7) {
    if (obj.is_shunzi(active)) type = 2;
    else console.log('判断类型出错了', active);
  } else if (length === 8) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_feiji(active)) type = 7;
    else if (obj.is_liandui(active)) type = 8;
    else if (obj.is_sidailiangdui(active)) type = 11;
    else console.log('判断类型出错了', active);
  } else if (length === 9) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_feiji(active)) type = 7;
    else console.log('判断类型出错了', active);
  } else if (length === 10) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_liandui(active)) type = 8;
    else if (obj.is_feiji(active)) type = 7;
    else console.log('判断类型出错了', active);
  } else if (length === 11) {
    if (obj.is_shunzi(active)) type = 2;
    else console.log('判断类型出错了', active);
  } else if (length === 12) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_feiji(active)) type = 7;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else if (length === 13) {
    if (obj.is_shunzi(active)) type = 2;
    else console.log('判断类型出错了', active);
  } else if (length === 14) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else if (length === 15) {
    if (obj.is_shunzi(active)) type = 2;
    else console.log('判断类型出错了', active);
  } else if (length === 16) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_feiji(active)) type = 7;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else if (length === 17) {
    if (obj.is_shunzi(active)) type = 2;
    else console.log('判断类型出错了', active);
  } else if (length === 18) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else if (length === 19) {
    if (obj.is_shunzi(active)) type = 2;
    else console.log('判断类型出错了', active);
  } else if (length === 20) {
    if (obj.is_shunzi(active)) type = 2;
    else if (obj.is_feiji(active)) type = 7;
    else if (obj.is_liandui(active)) type = 8;
    else console.log('判断类型出错了', active);
  } else {
    console.log('判断类型出错了 else , 该算法有可能错误', active);
    type = 'err';
  }
  return {type: type, text: fanchaCardType(type)};
}
var obj = {
  is_dui: function (arr) {
    return arr.length === 2 && arr[0].value === arr[1].value;
  },
  is_wangzha: function (arr) {
    arr = sortSmall(arr);
    return arr.length === 2 && arr[0].value === 17 && arr[1].value === 18;
  },
  is_sandaiyi: function (arr) {
    return arr.length === 4 && !this.is_zhadan(arr);
  },
  is_zhadan: function (arr) {
    return arr.length === 4 && arr[0].value === arr[1].value && arr[1].value === arr[2].value && arr[2].value === arr[3].value;
  },
  is_shunzi: function (arr) {
    arr = sortSmall(arr);
    function fn (a, b) {
      return ++a === b;
    }
    var sign = true;
    for (var i = 0, j = arr.length - 1; i < j; i++) {
      if (!fn(arr[i].value - 0, arr[i + 1].value - 0)) {
        sign = false;
        break;
      }
    }
    return sign;
  },
  is_sandaiyidui: function (arr) {
    return arr.length === 5 && !this.is_shunzi(arr);
  },
  is_sidaier: function (arr) { // 待优化
    if (arr.length !== 6) return false;
    var a = {};
    for (var i = 0; i < arr.length; i++) { // {5:4, 8:1, 9:1}
      if (a[arr[i].value]) a[arr[i].value]++;
      else {
        a[arr[i].value] = 1;
      }
    }
    var count = 0; // 必须只有三种数字
    var is4 = false; // 有一种必须为4张
    var daier = true; // 带的两个都为单牌
    for (var j in a) {
      count++;
      if (a[j] === 4) is4 = true;
      else {
        if (a[j] !== 1) daier = false;
      }
    }
    return is4 && daier && count === 3;
  },
  is_sidailiangdui: function (arr) {
    if (arr.length !== 8) return false;
    var a = {};
    for (var i = 0; i < arr.length; i++) { // {5:4, 8:2, 9:2}
      if (a[arr[i].value]) a[arr[i].value]++;
      else {
        a[arr[i].value] = 1;
      }
    }
    var count = 0; // 必须只有三种数字
    var is4 = false; // 有一种必须为4张
    var daier = true; // 带的两个都为对子
    for (var j in a) {
      count++;
      if (a[j] === 4) is4 = true;
      else {
        if (a[j] !== 2) daier = false;
      }
    }
    return is4 && daier && count === 3;
  },
  is_liandui: function (arr) {
    if (arr.length < 6) return false;
    var a = {};
    var b = 0;
    for (var i = 0; i < arr.length; i++) {
      if (a[arr[i].value]) a[arr[i].value]++;
      else {
        a[arr[i].value] = 1;
        b++;
      }
    }
    var sign = true;
    for (var j in a) {
      if (!(a[j] === 2)) sign = false;
    }
    if (b < 3) sign = false;
    return sign;
  },
  is_feiji: function (arr) {
    if (arr.length >= 6) {
        var a = {};
        for (var i = 0; i < arr.length; i++) { // 遍历到 a 对象上 {7:3, 8:3, 9:3, 4:1, 5:1: 6:1}
          if (a[arr[i].value]) a[arr[i].value]++;
          else {
            a[arr[i].value] = 1;
          }
        }
        var newa = []; // [6, 7, 8]
        var newb = []; // [3, 5, 9]        []
        var newc = []; // []               [33, 55, 99]
        for (var j in a) {
          if (a[j] === 3) {
            newa.push({value: j});
          } else if (a[j] === 2) {
            newb.push({value: j});
          } else {
            newc.push({value: j});
          }
        }
        if (newa.length < 2) {
          return false;
        } else {
          if (newa.length === newb.length || newa.length === newc.length || (!newb.length && !newc.length)) {
            return this.is_shunzi(newa);
          } else {
            return false;
          }
        }
    } else {
      return false;
    }
  }
};
function sortMap (arr) { // 拆牌
  let obj = {};
  // {id: '36', checked: false, alive: true, type: 'c', text: 'J', value: 11}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].value]) {
      obj[arr[i].value]++;
    } else {
      obj[arr[i].value] = 1;
    }
  }
  console.log(obj);
}

function choice () { // 选择出牌
}

module.exports = {
  judgeCardType: judgeCardType,
  robot: robot,
  sortMap: sortMap,
  choice: choice
};
