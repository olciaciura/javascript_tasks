/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var last_found = 0;
    for (i = 0; i < t.length; i++) {
        if(t[i] == s[last_found]) {
            last_found++;
        }        
    }
    if(last_found >= s.length) return true
    return false
};

var s = "abc"
var t = "ahbgdc"
console.log(isSubsequence(s, t))