/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = ''

    for( i = 0; i < strs[0].length; i++){
        var letter = strs[0].charAt(i)
        for( j = 0; j < strs.length; j++){
            if( strs[j].charAt(i) != letter ){
                return prefix
            }
        }
        prefix += letter
    }
    return prefix
};

var strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs));