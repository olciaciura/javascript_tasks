/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var word_len = words[0].length
    var len = words.length * word_len
    var starting_indexes = []
    
    words = words.map(word => word.split('').sort().join(''))
    words.sort()

    console.log(words)

    for( i = len; i <= s.length; i++){
        var substring = s.slice(i - len, i)
        var temp = []

        for(j = word_len; j <= len; j = j + word_len){
            var word = substring.slice(j - word_len, j).split('').sort().join('')
            if(!words.includes(word)) break
            temp.push(word)
        }
        temp.sort()
        if(temp.join('') == words.join('')){
            starting_indexes.push(i - len)
        }
        console.log(`substring: ${substring}, temp: ${temp}`)
    }
    return  starting_indexes
};

var s = "abababab"
var words = ["ab", "ab", "ab"]
console.log(findSubstring(s, words))