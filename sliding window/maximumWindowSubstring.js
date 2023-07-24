/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    if( s.length == 1 && s == t) return s

    var bestMinLen = s.length + 1
    var bestMinSubstring = ''

    var minLen = 1
    var minSubstring = s[0]
    var usedLetters = 0
    var tempMap = new Map()

    var left = 0
    var right = 1

    var tMap = new Map()

    for (let element of t){
        const current = tMap.get(element) || 0
        tMap.set(element, current + 1)
        tempMap.set(element, 0)
    }
    // console.log(tMap)
    if(t.includes(s[0])){
        tempMap.set(minSubstring[0], 1)
        usedLetters ++
    }

    while (right < s.length){
        while (usedLetters < t.length && right < s.length){
            minSubstring += s[right]
            minLen ++
            if(t.includes(s[right])){
                if (tempMap.get(s[right]) < tMap.get(s[right])){
                    usedLetters ++
                }
                tempMap.set(s[right], tempMap.get(s[right]) + 1)
            }
            right ++
            // console.log(tempMap)
            // console.log(`aktualne okno: ${minSubstring}, usedLetters: ${usedLetters}`)
        }
        while (usedLetters == t.length){
            if(minLen < bestMinLen){
                bestMinSubstring = minSubstring
                bestMinLen = minLen
            }

            if(t.includes(minSubstring[0])){
                if (tempMap.get(minSubstring[0]) <= tMap.get(minSubstring[0])){
                    usedLetters--
                }
                tempMap.set(minSubstring[0], tempMap.get(minSubstring[0]) - 1)
            }
            minSubstring = minSubstring.slice(1, minSubstring.length)
            minLen --
            left ++
            // console.log(`best: ${bestMinSubstring}, ${bestMinLen}`)
        }
    }
    return bestMinSubstring
};

var s = 'a'
var t = 'a'
console.log(minWindow(s, t))