/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0
    var right = numbers.length - 1

    while (left < right) {
        if(numbers[left] + numbers[right] == target) {
            return [left + 1, right + 1]
        }
        if(numbers[left] + numbers[right] < target) {
            left ++
        }
        else{
            right --
        }
    }
};

var numbers = [2,7,11,15]
var target = 9
console.log(twoSum(numbers, target))