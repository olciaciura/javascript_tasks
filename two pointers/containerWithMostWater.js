/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0
    var right = height.length - 1
    var maxLeft = height[left]
    var maxRight = height[right]

    var water = Math.min(maxLeft * (height.length - 1), maxRight * (height.length - 1))

    while (left < right) {
        if(maxLeft < maxRight){
            left ++             
            maxLeft = Math.max(maxLeft, height[left])
        }
        else{
            right --               
            maxRight = Math.max(maxRight, height[right])
        }
        water = Math.max(water, Math.min(maxLeft, maxRight) * (right - left))
    }
    return water
};

var height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));