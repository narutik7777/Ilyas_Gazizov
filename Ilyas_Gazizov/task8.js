

    function sum(){
        if(!arguments){
            return NaN;
        }
        var inputArray = Array.prototype.slice.call(arguments);
        return (function getSum(ind){
            if(ind === inputArray.length)
                return 0;
            return inputArray[ind] + getSum(ind + 1);
        })(0)
    }



console.log(sum(1,2,3));













