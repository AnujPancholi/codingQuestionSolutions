/*
    leetcode
    category: "Algorithms"
    problem title: "Plus One"
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i=digits.length-1,carryOver=1;
    while(carryOver>0){
        if(i===-1){
            digits.unshift(0);
            i++;
        }
        digits[i]+=carryOver;
        carryOver=Math.floor(digits[i]/10);
        digits[i] = digits[i]%10;
        i--;
    }
    return digits;
};