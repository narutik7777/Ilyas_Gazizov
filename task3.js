"use strict";

function toCamelCase(str) {
    //console.log(str, 'testing')
    if (str === '') {
        return '';
    } else {
        var containmentArea = [];
        var splitString = str.replace(/[^A-Z0-9]/ig, "_").split("_");

        var firstElement = containmentArea.push(splitString.splice(0, 1));

        for (var word in splitString) {
            var splitWords = splitString[word].split('');
            var capitalLetter = splitWords[0].toUpperCase();
            splitWords.splice(0, 1, capitalLetter);
            var joinedWord = splitWords.join('');
            containmentArea.push(joinedWord);
            var newSentence = containmentArea.join('');
        }

        return containmentArea.join('');
    }
}


