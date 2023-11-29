var summaryRanges = function(nums) {
    
    if(nums.length === 0) return []

    var min = nums[0]
    var max = nums[0] - 1

    var res = []

    nums.forEach(element => {
        if (element == max + 1)
            max += 1
        else{
            if (max != min)
                var range = min + '->' + max
            else
                var range = String(min)
                
            res.push(range)
            min = element
            max = element
        }
    });
    if (max != min)
        var range = min + '->' + max
    else
        var range = String(min)
        
    res.push(range)

    return res
};

var nums = [0,2,3,4,6,8,9]
console.log(summaryRanges(nums));