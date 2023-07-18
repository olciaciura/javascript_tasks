/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums){
    var prevJump = 0;
    var count = 0;
    var max_i = 0;

    nums.forEach((num, index) => {
        max_i = Math.max(max_i, index + num)
        if (index == prevJump && index < nums.length - 1){
            count++;
            prevJump = max_i;
        }
    })
    return count
}

var nums = [2,1]
console.log(`Answer: ${jump(nums)}`);