/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var triplets = [];
    nums.sort(function(a, b) {return a - b})
    console.log(nums)
    nums.forEach((num, index) => {
        var left = 0;
        var right = nums.length - 1
        while (left < right) {
            if(left != index && right != index){
                var sum = nums[left] + nums[right] + num
                if (sum == 0){
                    var triplet = [nums[left], num, nums[right]]
                    if ( !triplets.some(arr => arr.length === triplet.length && arr.every((value, index) => value === triplet[index]))){
                        triplets.push(triplet)
                    }
                    left ++
                }
                else if (sum < 0){
                    left++
                }
                else {
                    right --
                }
            }
            else if(left == index){
                left++
            }
            else{
                right --
            }
        }
    })
    return triplets
};


var nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))