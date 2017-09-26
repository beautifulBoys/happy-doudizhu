var cardList = [
  {id: '0', checked: false, alive: true, type: 'a', text: 'A', value: 14},
  {id: '1', checked: false, alive: true, type: 'a', text: '2', value: 16},
  {id: '2', checked: false, alive: true, type: 'a', text: '3', value: 3},
  {id: '3', checked: false, alive: true, type: 'a', text: '4', value: 4},
  {id: '4', checked: false, alive: true, type: 'a', text: '5', value: 5},
  {id: '5', checked: false, alive: true, type: 'a', text: '6', value: 6},
  {id: '6', checked: false, alive: true, type: 'a', text: '7', value: 7},
  {id: '7', checked: false, alive: true, type: 'a', text: '8', value: 8},
  {id: '8', checked: false, alive: true, type: 'a', text: '9', value: 9},
  {id: '9', checked: false, alive: true, type: 'a', text: '10', value: 10},
  {id: '10', checked: false, alive: true, type: 'a', text: 'J', value: 11},
  {id: '11', checked: false, alive: true, type: 'a', text: 'Q', value: 12},
  {id: '12', checked: false, alive: true, type: 'a', text: 'K', value: 13},
  {id: '13', checked: false, alive: true, type: 'b', text: 'A', value: 14},
  {id: '14', checked: false, alive: true, type: 'b', text: '2', value: 16},
  {id: '15', checked: false, alive: true, type: 'b', text: '3', value: 3},
  {id: '16', checked: false, alive: true, type: 'b', text: '4', value: 4},
  {id: '17', checked: false, alive: true, type: 'b', text: '5', value: 5},
  {id: '18', checked: false, alive: true, type: 'b', text: '6', value: 6},
  {id: '19', checked: false, alive: true, type: 'b', text: '7', value: 7},
  {id: '20', checked: false, alive: true, type: 'b', text: '8', value: 8},
  {id: '21', checked: false, alive: true, type: 'b', text: '9', value: 9},
  {id: '22', checked: false, alive: true, type: 'b', text: '10', value: 10},
  {id: '23', checked: false, alive: true, type: 'b', text: 'J', value: 11},
  {id: '24', checked: false, alive: true, type: 'b', text: 'Q', value: 12},
  {id: '25', checked: false, alive: true, type: 'b', text: 'K', value: 13},
  {id: '26', checked: false, alive: true, type: 'c', text: 'A', value: 14},
  {id: '27', checked: false, alive: true, type: 'c', text: '2', value: 16},
  {id: '28', checked: false, alive: true, type: 'c', text: '3', value: 3},
  {id: '29', checked: false, alive: true, type: 'c', text: '4', value: 4},
  {id: '30', checked: false, alive: true, type: 'c', text: '5', value: 5},
  {id: '31', checked: false, alive: true, type: 'c', text: '6', value: 6},
  {id: '32', checked: false, alive: true, type: 'c', text: '7', value: 7},
  {id: '33', checked: false, alive: true, type: 'c', text: '8', value: 8},
  {id: '34', checked: false, alive: true, type: 'c', text: '9', value: 9},
  {id: '35', checked: false, alive: true, type: 'c', text: '10', value: 10},
  {id: '36', checked: false, alive: true, type: 'c', text: 'J', value: 11},
  {id: '37', checked: false, alive: true, type: 'c', text: 'Q', value: 12},
  {id: '38', checked: false, alive: true, type: 'c', text: 'K', value: 13},
  {id: '39', checked: false, alive: true, type: 'd', text: 'A', value: 14},
  {id: '40', checked: false, alive: true, type: 'd', text: '2', value: 16},
  {id: '41', checked: false, alive: true, type: 'd', text: '3', value: 3},
  {id: '42', checked: false, alive: true, type: 'd', text: '4', value: 4},
  {id: '43', checked: false, alive: true, type: 'd', text: '5', value: 5},
  {id: '44', checked: false, alive: true, type: 'd', text: '6', value: 6},
  {id: '45', checked: false, alive: true, type: 'd', text: '7', value: 7},
  {id: '46', checked: false, alive: true, type: 'd', text: '8', value: 8},
  {id: '47', checked: false, alive: true, type: 'd', text: '9', value: 9},
  {id: '48', checked: false, alive: true, type: 'd', text: '10', value: 10},
  {id: '49', checked: false, alive: true, type: 'd', text: 'J', value: 11},
  {id: '50', checked: false, alive: true, type: 'd', text: 'Q', value: 12},
  {id: '51', checked: false, alive: true, type: 'd', text: 'K', value: 13},
  {id: '52', checked: false, alive: true, type: 'k', text: 'b', value: 18},
  {id: '53', checked: false, alive: true, type: 'k', text: 'l', value: 17}
];

function shuffle (arr) { // 洗牌
  if (!arr) arr = cardList;
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var idx = Math.floor(Math.random() * (len - i));
    var temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
}

function distribute (arr) {
  if (!arr) arr = shuffle(); // 洗牌
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

module.exports = {
  shuffle: shuffle,
  distribute: distribute
};
