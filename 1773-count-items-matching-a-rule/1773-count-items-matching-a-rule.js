/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let matches = 0
    let output= []
    for (let [item, [type,color,name]] of items.entries()){
        if (ruleKey=="type"&& ruleValue== type){
            output.push(items[item])
        }
        if (ruleKey=="color"&& ruleValue== color){
            output.push(items[item])
        }if (ruleKey=="name"&& ruleValue== name){
            output.push(items[item])
        }
        matches = output.length
    }
    return matches
    
    // THis solution is valid usage of ES9 destructuring, For Of loop and 
    
};