/*
	leetcode
	category: "Algorithms"
	problem title: "Add Digits"
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    return num<10 ? num : addDigits(num.toString().split('').reduce((acc,curr) => acc+parseInt(curr),0));
    
};