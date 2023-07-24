/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var subarray = []
    var minLen = 0
    var actSum = 0
    var bestSubarray = []
    var bestMinLen = nums.length + 1

    var left = 0
    var right = 0
    while (right < nums.length) {
        
        while (right < nums.length && actSum < target){
            subarray.push(nums[right])
            minLen++
            actSum += nums[right]
            right++             
        }
    
        while (actSum >= target){
            if (minLen < bestMinLen){
                bestMinLen = minLen
                bestSubarray = [...subarray]
            }
            minLen --
            actSum -= subarray.shift()
            left++
            console.log(bestSubarray)
        }
        console.log(`subarray: ${subarray}, left:${left}, right:${right}, actSum: ${actSum}`)
    }
    return bestSubarray.length
};

var target = 7
var nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target, nums))