function reverseString(str) {
return  str.split(' ')
    .map(function (el) {
          return el.split ('').reverse().join('');
    })
    .join(' ');
}


console.log(reverseString(" A fun little challenge! "));