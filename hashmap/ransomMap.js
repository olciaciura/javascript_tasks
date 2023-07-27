/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    var magazineMap = new Map()

    for (var letter of magazine){
        const counter = magazineMap.get(letter) || 0
        magazineMap.set(letter, counter + 1)
    }

    for (var letter of ransomNote){
        if(!magazineMap.has(letter) || magazineMap.get(letter) <= 0) return false
        magazineMap.set(letter, magazineMap.get(letter) - 1)
    }
    return true
};

var ransomNote = ''
var magazine = ''

console.log(canConstruct(ransomNote, magazine))