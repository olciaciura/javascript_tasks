/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    var k = 0;
    while (i + k < nums.length){
        if (nums[i] === val){
            k++;
            nums[i] = nums[nums.length - k]
        }
        else{
            i++;
        }
    }
    return i
};

var nums = [2]
var val = 2
console.log(removeElement(nums, val))
