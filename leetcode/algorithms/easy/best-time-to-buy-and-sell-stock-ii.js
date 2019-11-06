/*
    leetcode
    category: "Algorithms"
    problem title: "Best Time to Buy and Sell Stock II"
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i=0;i<prices.length-1;i++){
        maxProfit+=Math.max(0,prices[i+1]-prices[i]);
    }
    return maxProfit;
};