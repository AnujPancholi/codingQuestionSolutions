/*
    leetcode
    category: "Algorithms"
    problem title: "Number of 1 bits"
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let hammingWeight = 0;
    while(n>0){
        if(n%2!=0){
            ++hammingWeight;
        }
        n=Math.floor(n/2);
    }
    return hammingWeight;
};