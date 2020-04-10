function reverseString(str) {
var strToArray = str.split("");

var reverseArray = strToArray.reverse();

var WordArray = reverseArray.join("");

var reverseString = WordArray.toString();

return reverseString;

}

console.log(reverseString("Feel"));