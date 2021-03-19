// Create a temps array here
var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

// End of temps array
function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];

  // Only change code below this line
  var sum = 0;
  var count = 0;
  for (i = 0; i < newTemps.length; i++) {
    for (j = 0; j < newTemps[i].length; j++) {
      sum += newTemps[i][j];
      count += 1;
    }
    var result = sum / count;
    averageDayTemp.push(result);
    count = 0;
    sum = 0;
  }
  // Only change code above this line
  return averageDayTemp;
}

console.log(myArrayFunction(temps)); // Change this line
module.exports = myArrayFunction;
