/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
  let left = 1;
  let right = x;
  let mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else if ((mid + 1) > x / (mid + 1)) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
};