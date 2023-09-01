var twoSum = function(nums, target) {

    var numbers = new Map()
    for (index in nums){
        var element = nums[index]
        if(numbers.has(nums))
            return [numbers.get(element), index]
        if(numbers.has(target - element))
            return [numbers.get(target - element), index]
        numbers.set(element, index)
    }
};

var nums = [3,2,4]
var target = 6
console.log(twoSum(nums, target))