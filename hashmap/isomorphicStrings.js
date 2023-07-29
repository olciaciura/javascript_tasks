/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if(s.length != t.length) return false

    var mapS_T = new Map()
    var mapT_S = new Map()

    for (var i in s){
        if( mapS_T.has(s[i]) && mapS_T.get(s[i]) != t[i] ) return false
        if( mapT_S.has(t[i]) && mapT_S.get(t[i]) != s[i] ) return false
        mapS_T.set(s[i], t[i])
        mapT_S.set(t[i], s[i])
    }

    return true
};

var s = 'foo'
var t = 'boo'
console.log(isIsomorphic(s, t))