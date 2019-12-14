/*
    leetcode
    category: "Algorithms"
    problem title: "Length of Last Word"
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length<0){
        return 0;
    }
    let len = s.length-1;
    let i=len;
    while(s[i]===' '){
        i--;
        len--;
    }
    while(s[i]!=' ' && i>=0){
        i--;
    }
    return len-i;  
};