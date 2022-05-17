/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
     return num > 0 && Math.sqrt(num) % 1 === 0;
};