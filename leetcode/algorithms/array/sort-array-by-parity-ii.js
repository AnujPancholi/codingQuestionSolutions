/*
	leetcode
	category: "Algorithms"
	problem title: "Sort Array By Parity II"
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    
    const arrs = [...A].sort((a,b) => a-b).reduce((arrs,num) => {
        arrs[num%2].push(num);
        return arrs;
    },[[],[]]);
    
    return Array.from({length: A.length},(x,i) => arrs[i%2].shift());
    
};