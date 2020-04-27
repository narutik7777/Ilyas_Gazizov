
var a =  {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(HashIntoArray(a));


function HashIntoArray () {


    var array_keys_values = new Array();

    for (var i = 0; i < array_keys_values.length; i++) {
        array_keys_values[i] = new Array(); //create two-dimensional array
    }

    for (var key in a) {
        array_keys_values.push([key, a[key]]);

    }
return  array_keys_values
}