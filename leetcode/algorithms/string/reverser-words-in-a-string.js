/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Words in a String"
*/

/**
 * @param {string} s
 * @return {string}
 */



var reverseWords = function(s) {
    return s.trim().split(' ').filter(w => w).reverse().join(' ');
};