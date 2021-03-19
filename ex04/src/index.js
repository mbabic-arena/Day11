// Create a monitorListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];

// End of monitorsListArray array

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  // Only change code below this line
  var monitorsList = [];
  var count = 0;
  for (var i of monitorsListArray) {
    count++;
    monitorsList.push([i, count]);
  }
  return monitorsList;
  // Only change code above this line
}
console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;
