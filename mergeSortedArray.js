/** 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// METHODS 1
// var merge = function(nums1, m, nums2, n) {
//     for (i = 0; i < n; i++){
//         nums1[m+i] = nums2[i]
//     }
//     nums1.sort(function(a,b) {return a-b})
// };

var merge = function(nums1, m, nums2, n) {
    if(n == 0){
        return
    }
    if(m == 0){
        for (i = 0; i < n; i++){
            nums1[m+i] = nums2[i]
        }
        return
    }

    var nums1_iter = m - 1
    var nums2_iter = n - 1
    for(i = n + m - 1; i >= 0; i--){
        if(nums1[i] == 0){
            if( nums1[nums1_iter] - nums2[nums2_iter] > 0 || nums2_iter < 0){
                nums1[i] = nums1[nums1_iter]
                nums1[nums1_iter] = 0
                nums1_iter-- 
            }
            else {
                nums1[i] = nums2[nums2_iter]
                nums2_iter-- 
            }
        }
    }
}

var nums1 = [1, 2, 3, 0, 0, 0]
merge(nums1, 3, [2, 5, 6], 3)
console.log(nums1)