/*
    leetcode
    category: "Algorithms"
    problem title: "Hamming Distance"
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a = x^y;
    console.log(a);
    let bits = 0;
    while(a>0){
        bits += a%2;
        a = Math.floor(a/2);
    }
    return bits;
};