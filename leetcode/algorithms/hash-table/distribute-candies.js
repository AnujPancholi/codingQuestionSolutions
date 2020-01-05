/*
    leetcode
    category: "Algorithms"
    problem title: "Distribute Candies"
*/

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const kindSet = new Set();
    const kindsCount = candies.reduce((count,candy) => {
        if(!kindSet.has(candy)){
            ++count;
            kindSet.add(candy);
        }
        return count;
    },0);
    return Math.min(candies.length/2,kindsCount);
    
};