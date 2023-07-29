/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    // var ransomNoteMap = new Map()
    var magazineMap = new Map()

    for (var letter of magazine){
        const counter = magazineMap.get(letter) || 0
        magazineMap.set(letter, counter + 1)
    }
    // console.log(magazineMap)

    for (var letter of ransomNote){
        if(!magazineMap.has(letter) || magazineMap.get(letter) <= 0) return false
        // const counter = ransomNoteMap.get(letter) || 0
        magazineMap.set(letter, magazineMap.get(letter) - 1)
    }
    // console.log(ransomNoteMap)
    // for ( var [key, value] of ransomNoteMap){
    //     if (magazineMap.get(key) < value || !magazineMap.has(key)) return false
    // }
    return true
};

var ransomNote = 'aa'
var magazine = 'aab'

console.log(canConstruct(ransomNote, magazine))