/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse String"
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // s = s.reverse();
    const l = s.length;
    for(let i=0;i<l/2;i++){
        let temp = s[i];
        s[i]=s[l-i-1];
        s[l-1-i]=temp;
    }
    
};