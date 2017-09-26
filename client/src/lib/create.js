import shuffle from './shuffle';

function create () {
  let arr = shuffle(); // 洗牌
  let newArr = [[], [], [], []]; // 前三个数组为三家牌，第四个数组为三张底牌
  let index = 0;
  for (let i = 0; i < 54; i++) { // 发牌
    if (i < 51) {
      arr[i].sq = index;
      newArr[index].push(arr[i]);
      if (index !== 2) index++;
      else index = 0;
    } else {
      arr[i].sq = 3;
      newArr[3].push(arr[i]);
    }
  }
  return newArr;
}

function deal (arr, list, callback) {
  var i = 0;
  var j = list.length;
  var timer = setInterval(() => {
    arr.push(list[i]);
    if (++i === j) {
      if (callback) callback();
      clearInterval(timer);
    }
  }, 150);
}

export {create, deal};
