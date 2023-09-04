var containsNearbyDuplicate = function(nums, k) {
    var duplicates = new Map()
    var index = 0

    for (let num of nums){
        if ( duplicates.has(num) ){
            if ( index - duplicates.get(num) <= k )
                return true
        }
        duplicates.set(num, index)
        index ++
    }
    return false
};

var nums = [1,2,3,1,2,3]
var k = 2
console.log(containsNearbyDuplicate(nums, k))