/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var water = Array(height.length).fill(0)
    var water_level = height[0]

    for( i = 1; i < height.length; i++ ) {
        if( water_level > height[i]){
            water[i] = water_level - height[i]
        }
        else{
            water_level = height[i]
        }
    }
    console.log( water)
    var sum = 0;
    water_level = height[height.length - 1]
    for( i = height.length - 1; i >= 0; i--){
        if(water_level > height[i]){
            water[i] = Math.min(water_level - height[i], water[i])
        }
        else{
            water[i] = 0
            water_level = height[i]
        }
        sum += water[i]
    }
    console.log( water)
    return sum
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var left = 0
    var right = height.length - 1
    
    var leftMax = height[left]
    var rightMax = height[right]

    var water = 0

    while (left < right) {
        if(leftMax < rightMax){
            left++
            leftMax = Math.max(leftMax, height[left])
            water += leftMax - height[left]
        }
        else{
            right--
            rightMax = Math.max(rightMax, height[right])
            water += rightMax - height[right]
        }
    }
    return water
}

var height = [4,2,0,3,2,5]
console.log(trap(height))