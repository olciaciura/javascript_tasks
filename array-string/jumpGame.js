/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    var max_i = nums[0]

    for(i = 0; i < nums.length; i++) {       
        if(max_i >= nums.length - 1) {
            return true;
        } 
        if(nums[i] + i > max_i) {
            max_i = nums[i] + i;
        }
        else if(i > max_i || (i == max_i && nums[i] == 0)) {
            return false;
        }
    }
};

var nums = [3,2,1,0,4]
console.log(`Answer: ${canJump(nums)}`);