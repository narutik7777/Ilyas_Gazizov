
function smallest() {

    var arr = Array.prototype.slice.call(arguments, 0);

       var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min)  min = arr[i];
            }
return min
}



function greatest() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }

    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max)  max = arr[i];
    }
return max;

}


console.log(smallest(2, 0.1, -5, 100, 3));
console.log(greatest(2, 0.1, -5, 100, 3));