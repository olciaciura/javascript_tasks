/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    var answer = Array(nums.length).fill(1);

    for(i = 0; i < nums.length - 1; i++){
        answer[i + 1] = (answer[i] * nums[i])
    }

    var temp = 1;
    for(i = nums.length - 1; i >= 0; i--){
        answer[i] *= temp
        temp *= nums[i]
    }
    return answer
}

var nums = [1,2,3,4]
console.log(productExceptSelf(nums));