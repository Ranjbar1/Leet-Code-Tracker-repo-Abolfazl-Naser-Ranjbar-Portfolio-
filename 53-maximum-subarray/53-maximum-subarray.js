/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let len = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  let before = 0;
  let now = 0;

  if (!len) return 0;

  for (let i = 0; i < len; i++) {
    now = Math.max(before + nums[i], nums[i]);
    max = Math.max(now, max);
    before = now;
  }

  return max;
};