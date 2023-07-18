/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if(nums.length <= 2){
        return nums.length
    }

    var number = 2;
    for(i = 2; i < nums.length; i++){
        if(nums[i] != nums[number-2]){
            nums[number] = nums[i];
            number++
        }
    }
    return number;
};

nums = [1,1]
console.log(removeDuplicates(nums), nums)