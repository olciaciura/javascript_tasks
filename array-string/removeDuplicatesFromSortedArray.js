/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var number = 1;
    var last = nums[0]
    for(i = 1; i < nums.length; i++){
        if(nums[i] != last){
            nums[number] = nums[i];
            last = nums[i];
            number++
        }
    }
    return number;
};


nums = [1,1,2]
console.log(removeDuplicates(nums), nums)