/*
    leetcode
    category: "Algorithms"
    problem title: "Longest Palindrome"
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charSet = new Set();
    let longestPalinLength=0;
    for(let i=0;i<s.length;++i){
        if(charSet.has(s[i])){
            charSet.delete(s[i]);
            longestPalinLength+=2;
        } else {
            charSet.add(s[i]);
        }
    }
        
    if(charSet.size!=0){
        ++longestPalinLength;
    }
    
    return longestPalinLength;
    
};