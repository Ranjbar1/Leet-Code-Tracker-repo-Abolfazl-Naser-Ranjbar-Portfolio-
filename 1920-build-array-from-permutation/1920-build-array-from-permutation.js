/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans =[]
    for ( let i of nums){
        ans[i]= nums[nums[i]] 
    }
    return ans
};