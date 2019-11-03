/*
    leetcode
    category: "Algorithms"
    problem title: "Single Number"
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const masterSet = new Set();
    nums.forEach((num) => {
        if(masterSet.has(num)){
            masterSet.delete(num);
        } else {
            masterSet.add(num);
        }
    })
    return Array.from(masterSet)[0];
};