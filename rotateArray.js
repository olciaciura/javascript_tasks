/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


//METHODS 1
var rotate = function(nums, k) {   
    if(nums.length < 2){
        return
    }
    k = k % nums.length 
    var temp = nums.slice(nums.length - k, nums.length)
    for(i = nums.length - 1; i >= k; i--){
        nums[i] = nums[i - k]
    }
    for(i = k - 1; i >= 0; i--){
        nums[i] = temp[i]
    }
};

//METHODS 2



//METHODS 3


var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var k = 3
rotate(nums, k)
console.log(nums)