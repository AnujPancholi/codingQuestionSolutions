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
    
    if(num<10){
        return num;
    } else {
        return addDigits(num.toString().split('').reduce((acc,curr) => acc+parseInt(curr),0));
    }
    
};