/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1;
  let val = 0;
  let carry = 1;
  while (i >= 0 && carry) {
    val = digits[i] + carry;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
  }
  if (carry) digits.unshift(carry);
  return digits;};