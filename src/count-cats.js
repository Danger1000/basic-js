module.exports = function countCats(matrix) {
  let arr = [];
  let  Counter = 0;
  let cats = '^^';
    if(matrix.length) { 
    arr = matrix.reduce(function(a, b) {
      return a.concat(b);
    })
  } else {
    return 0;
  }
  arr.forEach(function (elem) {
    if (elem === cats) {
      Counter += 1;
    }
  });
  return Counter;
};
