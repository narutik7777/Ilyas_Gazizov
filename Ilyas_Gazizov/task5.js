

function stringExpansion(s) {
    var num = -1;
    var newAr = [];
    var sAr = s.split("");
    newAr = sAr.map(function (element) {
        if (isNaN(element)) {
            switch (num) {
                case -1:
                    return element;
                    break;

                case 0:
                    return "";
                    break;

                default:
                    return element.repeat(num);
            }
        } else {
            num = element;
        }
    });
    return newAr.join("");
}


