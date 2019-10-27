/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Elements"
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=1){
        return x;
    }
    let upper=x,lower=1;
    while(upper-lower>0.000001){
        upper = (upper+lower)/2;
        lower = x/upper;
    }
    return Math.floor(upper);
};