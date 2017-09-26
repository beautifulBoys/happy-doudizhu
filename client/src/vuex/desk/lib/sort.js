
function sort (arr) {
  return arr.sort((a, b) => {
    return b.value - a.value;
  });
};

// function sortSmall (arr) {
//   return arr.sort((a, b) => {
//     return a.value - b.value;
//   });
// };

export default sort;
