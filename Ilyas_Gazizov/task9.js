function countDown (numb) {



    for (var i = numb; i >= 0; i--) {

           setTimeout(function (i)  { return function(){
              console.log(i);
           }}(i), 1000*(numb-i) );
       }




}
countDown(3)

