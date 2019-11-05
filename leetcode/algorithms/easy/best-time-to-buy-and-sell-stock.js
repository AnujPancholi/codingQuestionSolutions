/*
    leetcode
    category: "Algorithms"
    problem title: "Best Time to Buy and Sell Stock"
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let differences = [];
    for(let i=0;i<prices.length-1;i++){
        differences.push(prices[i+1]-prices[i]);
    }
    let maxProf = 0,profAtIndex = 0;
    for(let i=0;i<differences.length;i++){
        profAtIndex += differences[i];
        profAtIndex = Math.max(profAtIndex,0);
        maxProf = Math.max(maxProf,profAtIndex);
    }
    return maxProf;
    
};