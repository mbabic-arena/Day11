// Only change code below this line
function multiplyArrayFunction(myArray) {
  var arr = [];
  var product = 1;
  var sum = 0;

  for (var i = 0; i < myArray.length; i++) {
    for (var x = 0; x < myArray[i].length; x++) {
      product *= myArray[i][x];
      sum += myArray[i][x];
    }
  }
  arr.push(product, sum);

  return arr;
}
multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]);
// Only change code above this line

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(
  multiplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
  ])
);
// Change this line
module.exports = multiplyArrayFunction;
