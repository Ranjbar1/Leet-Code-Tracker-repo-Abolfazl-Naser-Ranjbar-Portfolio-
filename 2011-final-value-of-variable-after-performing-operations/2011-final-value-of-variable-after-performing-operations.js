/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let final = 0
    for (let ops of operations){
        if (ops == "X++" || ops== "++X"){
            final +=1
        }
        
        if (ops == "X--"||ops == "--X")
            final -= 1
    } 
    
    return final
    
};