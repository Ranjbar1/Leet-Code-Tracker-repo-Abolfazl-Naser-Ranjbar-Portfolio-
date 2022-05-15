/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let num = 0
    for (let char of stones){
        if (jewels.includes(char)){num++}
        
    }
    
    
    //includes and For of loops are brand new methodes and loops availeable on ES6+
    return num
};