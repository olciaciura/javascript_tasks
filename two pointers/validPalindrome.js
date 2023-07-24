/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    var s_normalize = s.toLowerCase().match(/[a-z0-9]/g)
    if (!s_normalize) return true

    for (i = 0; i <= s_normalize.length/2; i++) {
        if(s_normalize[i] != s_normalize[s_normalize.length - i - 1]) return false
    }
    return true
};

var s = " "
console.log(isPalindrome(s))