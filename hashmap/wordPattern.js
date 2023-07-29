/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    var words = s.split(' ')

    if(pattern.length != words.length) return false

    var mapPattern_Words = new Map()
    var mapWords_Pattern = new Map()

    for (var i in pattern){
        if( mapPattern_Words.has(pattern[i]) && mapPattern_Words.get(pattern[i]) != words[i] ) return false
        if( mapWords_Pattern.has(words[i]) && mapWords_Pattern.get(words[i]) != pattern[i] ) return false
        mapPattern_Words.set(pattern[i], words[i])
        mapWords_Pattern.set(words[i], pattern[i])
    }

    return true
};

var pattern = 'aaaa'
var s = 'dog cat cat cat'
console.log(wordPattern(pattern, s))