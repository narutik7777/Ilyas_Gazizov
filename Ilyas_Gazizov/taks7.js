"use strict";

function transform(Array) {
    return Array.map(function (value) {
        return function () {
            return value;
        };
    });
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());