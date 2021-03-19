// Only change code below this line
var array1 = ["hello", "hey"];
var array1 = ["hello", "Hello"];
var array2 = ["zyxwvutsrqponmlkjihgfedcba", "qrst"];
var array3 = ["Mary", "Army"];
var array4 = ["Mary", "Aarmy"];
var array5 = ["Alien", "line"];
var array6 = ["floor", "for"];
var array7 = ["hello", "neo"];
var array8 = ["voodoo", "no"];
var array9 = ["ate", "date"];
var array10 = ["Tiger", "Zebra"];
var array11 = ["Noel", "Ole"];

function myMutation(arr) {
  var strOneArray = arr[0].toLowerCase().split("");
  var strTwoArray = arr[1].toLowerCase().split("");

  var result = true;

  for (var i = 0; i < strTwoArray.length; i++) {
    result = result && strOneArray.includes(strTwoArray[i]);
  }
  return result;
}
myMutation(array1);
// Only change code above this line

console.log(myMutation(array1));
console.log(myMutation(array2));
console.log(myMutation(array3));
console.log(myMutation(array4));
console.log(myMutation(array5));
console.log(myMutation(array6));
console.log(myMutation(array7));
console.log(myMutation(array8));
console.log(myMutation(array9));
console.log(myMutation(array10)); //Change this line
module.exports = myMutation;
