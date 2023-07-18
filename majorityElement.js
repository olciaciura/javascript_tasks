/**
 * @param {number[]} nums
 * @return {number}
 */

// METHOD 1
// var majorityElement = function(nums) {
//     nums.sort(function(a, b) {return a - b})
//     console.log(nums)
//     return nums[Math.floor(nums.length/2)]
// };

var majorityElement = function(nums){
    var count = 1;
    var majority = nums[0]
    for( i = 1; i < nums.length; i++){
        if(nums[i] != majority){
            if (count == 1){
                majority = nums[i];
            }
            else{
                count--;
            }
        }
        else{
            count++;
        }
    }
    return majority;
}

var nums = [3, 2, 3]
console.log(majorityElement(nums))