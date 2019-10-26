/*
    leetcode
    category: "Algorithms"
    problem title: "Climbing Stairs"
*/

/**
 * @param {number} n
 * @return {number}
 */

const factorial = (n) => n===1 ? 1 : n*factorial(n-1); 

const noOfWays = (n_ones,n_twos) => {
    return factorial(n_ones+n_twos)/(factorial(n_ones===0 ? 1 : n_ones)*factorial(n_twos===0 ? 1 : n_twos));
}
var climbStairs = function(n) {
    if(n===1){
        return n;
    }
    let nOnes = n,nTwos=0,totalWays = 0;
    while((nTwos*2)<=n){
        totalWays+=noOfWays(nOnes,nTwos);
        nTwos++;
        nOnes-=2;
    }
    return totalWays;
};