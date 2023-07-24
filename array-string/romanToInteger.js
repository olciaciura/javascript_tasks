/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var i = 0;

    var dict = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    var index = 0

    while(s){
        var char_index = s.indexOf(Object.keys(dict)[index])
        if(char_index !== -1){
            if(char_index > 0){
                i -= dict[s[0]]
            }
            i += dict[s[char_index]]
            s = s.slice(char_index + 1)
        }
        else{
            index++
        }
    }
    return i
};

var s = "MCMXCIV"
console.log(romanToInt(s))