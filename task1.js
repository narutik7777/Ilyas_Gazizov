function splitAndMerge (str, sp) {
    var devideSpace = str.split(' ');

    var devideCharacters = devideSpace.map(function(word) {
        return word.split('')
    });

    var mergeCharacters = devideCharacters.map(function(char) {
        return char.join(sp);
    });
    var newSentence = mergeCharacters.join(' ');
    return newSentence
}




