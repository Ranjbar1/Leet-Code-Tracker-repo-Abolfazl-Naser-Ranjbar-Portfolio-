/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 let len = nums.length;
  let last = NaN;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }
  return count;
};