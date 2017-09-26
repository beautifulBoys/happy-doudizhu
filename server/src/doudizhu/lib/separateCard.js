

function sortSmall (arr) {
  return arr.sort((a, b) => {
    return a.value - b.value;
  });
}
// const cardTypeMap = {
//   err: '错误',
//   0: '单',
//   1: '对',        is_dui
//   2: '顺子',      is_shunzi
//   3: '三带一',    is_sandaiyi
//   4: '三带一对',  is_sandaiyidui
//   5: '四带二',    is_sidaier
//   6: '三个X',
//   7: '飞机',      is_feiji
//   8: '连对',      is_liandui
//   9: '炸弹',      is_zhadan
//   10: '王炸',     is_wangzha
//   11: '四带两对',  is_sidaier
//   12: '飞机带单',
//   13: '飞机带对'
// };
function sortValue () {

}
var funcObj = {
  dan: function (arr, obj, val) { // val 就是单牌的时候的 值
    var newArr1 = [];
    var newArr2 = [];
    for (var i in obj) {
      if (i - 0 > val) newArr1.push(i - 0);
    }
    for (var j = 0; j < newArr1.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        if (arr[k].value === newArr1[j]) {
          newArr2.push([arr[k]]);
          break;
        }
      }
    }
    return newArr2;
  },
  dui: function (arr, obj, val) { // val 就是单牌的时候的 值
    var newArr1 = [];
    var newArr2 = [];
    for (var i in obj) {
      if (obj[i] >= 2 && i - 0 > val) newArr1.push(i - 0);
    }
    for (var j = 0; j < newArr1.length; j++) {
      var o = [];
      var index = 0;
      for (var k = 0; k < arr.length; k++) {
        if (newArr1[j] === arr[k].value && newArr1[j] > val && index < 2) {
          o.push(arr[k]);
          index++;
        };
      }
      newArr2.push(o);
    }
    return newArr2;
  },
  shunzi: function (arr, obj, firVal, length) {
    let newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (k > firVal) { // 可以作为开始值 // 可以去探测是否有连续length长度的顺子存在
        let sign1 = true;
        let index = k + 0;
        for (let i = 0; i < length; i++) { // 循环length次，判断是否有该张牌
          if (obj[index]) index++;
          else sign1 = false; // 不存在就设置为false
        }
        if (sign1) { // 存在大于的连续顺子
          let newar = [];
          let aaa = k;
          for (let j = 0; j < length; j++) { // 控制长度
            for (let m = 0; m < arr.length; m++) {
              if (arr[m].value === aaa) {
                newar.push(arr[m]);
                aaa++;
                break;
              }
            }
          }
          newArr.push(newar);
        }
      }
    }
    return newArr;
  },
  sandaiyi: function (arr, obj, val) {
    var dan = [];
    for (let j in obj) {
      if (obj[j] === 1) dan.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] >= 3 && k > val) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 3) {
              newar.push(arr[w]);
              if (index === 2) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dan[0]) {
                    newar.push(arr[o]);
                    break;
                  }
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sandaiyidui: function (arr, obj, val) {
    var dui = [];
    for (let j in obj) {
      if (obj[j] === 2) dui.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] >= 3 && k > val) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 3) {
              newar.push(arr[w]);
              if (index === 2) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dui[0]) newar.push(arr[o]);
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sidaier: function (arr, obj, val) {
    var dan = [];
    for (let j in obj) {
      if (obj[j] === 1) dan.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] === 4 && k > val && dan.length > 1) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 4) {
              newar.push(arr[w]);
              if (index === 3) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dan[0] || arr[o].value === dan[1]) newar.push(arr[o]);
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sidailiangdui: function (arr, obj, val) {
    var dui = [];
    for (let j in obj) {
      if (obj[j] === 2) dui.push(j - 0);
    }
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] === 4 && k > val && dui.length > 1) {
        var newar = [];
        var index = 0;
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) {
            if (index < 4) {
              newar.push(arr[w]);
              if (index === 3) {
                for (let o = 0; o < arr.length; o++) { // 查一个单牌
                  if (arr[o].value === dui[0] || arr[o].value === dui[1]) newar.push(arr[o]);
                }
              }
              index++;
            }
          }
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  sange: function (arr, obj, val) {
    var newArr = [];
    for (let k in obj) {
      k = k - 0;
      if (obj[k] === 3 && k > val) {
        var newar = [];
        for (let w = 0; w < arr.length; w++) {
          if (arr[w].value === k) newar.push(arr[w]);
        }
        newArr.push(newar);
      }
    }
    return newArr;
  },
  feiji: function (arr, obj, val, length) {
    var a = {};
    let cou = 0;
    for (let i in obj) {
      if (obj[i] === 3 && i - 0 > val) {
        a[i] = 3;
        cou++;
      }
    }
    let newArr = [];
    if (cou > 1 && cou >= length) {
      for (let k in a) {
        k = k - 0;
        let sign = true;
        let index = k;
        for (let j = 0; j < length; j++) {
          if (a[index]) index++;
          else sign = false;
        }
        if (sign) {
          let cc = [];
          for (let hh = 0; hh < length; hh++) {
            for (let w = 0; w < arr.length; w++) {
              if (k + hh === arr[w].value) cc.push(arr[w]);
            }
          }
          newArr.push(sortSmall(cc));
        }
      }
    }
    return newArr;
  },
  feijidaidan: function (arr, obj, val, length) {
    let newArr = this.feiji(arr, obj, val, length);
    let dan = [];
    for (let j in obj) {
      if (obj[j] === 1) dan.push(j - 0);
    }
    if (dan.length >= length) {
      for (let i = 0; i < newArr.length; i++) {
        for (let y = 0; y < length; y++) {
          for (let m = 0; m < arr.length; m++) {
            if (arr[m].value === dan[y]) {
              newArr[i].push(arr[m]);
              break;
            }
          }
        }
      }
    } else newArr = [];
    return newArr;
  },
  feijidaidui: function (arr, obj, val, length) {
    let newArr = this.feiji(arr, obj, val, length);
    let dui = [];
    for (let j in obj) {
      if (obj[j] === 2) dui.push(j - 0);
    }
    if (dui.length >= length) {
      for (let i = 0; i < newArr.length; i++) {
        for (let y = 0; y < length; y++) {
          for (let m = 0; m < arr.length; m++) {
            if (arr[m].value === dui[y]) {
              newArr[i].push(arr[m]);
            }
          }
        }
      }
    } else newArr = [];
    return newArr;
  },
  liandui: function (arr, obj, val, length) {
    let dui = [];
    let o = {};
    for (let j in obj) {
      j = j - 0;
      if (obj[j] >= 2 && j > val) {
        o[j] = true;
        dui.push(j);
      }
    }
    let newArr = [];
    for (let i = 0; i < dui.length; i++) {
      let sign = true;
      let w = dui[i] + 0;
      for (let k = 0; k < length; k++) {
        if (o[w]) w++;
        else {
          sign = false;
          break;
        }
      }
      if (sign) {
        let arrItem = [];
        for (let h = 0; h < length; h++) {
          let index = 0;
          for (let e = 0; e < arr.length; e++) {
            if (arr[e].value === dui[i] + h && index < 2) {
              arrItem.push(arr[e]);
              index++;
            }
          }
        }
        newArr.push(arrItem);
      }
    }
    return newArr;
  },
  zhadan: function (arr, obj, val) {
    let o = [];
    for (let j in obj) {
      j = j - 0;
      if (obj[j] === 4 && j > val) o.push(j);
    }
    let newArr = [];
    for (let e = 0; e < o.length; e++) {
      var item = [];
      for (let k = 0; k < arr.length; k++) {
        if (arr[k].value === o[e]) {
          item.push(arr[k]);
        }
      }
      newArr.push(item);
    }
    return newArr;
  },
  wangzha: function (arr, obj) {
    let newArr = [];
    if (obj[17] && obj[18]) {
      let item = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].value === 18 || arr[i].value === 17) {
          item.push(arr[i]);
        }
      }
      newArr.push(item);
    }
    return newArr;
  }
};

module.exports = funcObj;
