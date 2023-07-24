/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var subarray = [s[0]]
    var maxLen = 1

    var left = 0
    var right = 1
    while (right < s.length) {
        
        while (s.slice(left, right).indexOf(s[right]) == -1 && right < s.length){
            right++             
        }
    
        while (s.slice(left, right).indexOf(s[right]) != -1 && left < right){
            if (right - left + 1 > maxLen){
                subarray = [...s.slice(left, right)]
                maxLen = right - left + 1
            }        
            left ++
        }
        console.log(`subarray: ${subarray}, left:${left}, right:${right}`)
    }
    if (right - left + 1 > maxLen){
        subarray = [...s.slice(left, right)]
        maxLen = right - left + 1
    } 
    return subarray.length
};

var s = "au"
console.log(lengthOfLongestSubstring(s))