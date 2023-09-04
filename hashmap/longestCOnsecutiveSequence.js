var longestConsecutive = function(nums) {
    if (nums.length < 2) return nums.length
    var map = new Map();
    
    for ( var num of nums){
        map.set(num)
    }

    var max_length = 0
    for ( var num of nums){
        if (!map.has(num - 1)){
            var temp = num
            var length = 1
            while (map.has(temp + 1)){
                length += 1
                temp = temp + 1
            }
            if (length > max_length) max_length = length
        }
    }
    return max_length
};

var nums = [0,1,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums));