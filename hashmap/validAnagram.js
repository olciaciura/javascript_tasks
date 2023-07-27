/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false

    var map = new Map();

    for( var letter of s){
        const counter = map.get(letter) || 0
        map.set(letter, counter + 1)
    }

    for( var letter of t){
        if(!map.has(letter) || map.get(letter) <= 0) return false 
        map.set(letter, map.get(letter) - 1)
    }

    return !Array.from(map.values()).some(elem => elem > 0)
};

var s = 'catt'
var t = 'tac'
console.log(isAnagram(s, t))