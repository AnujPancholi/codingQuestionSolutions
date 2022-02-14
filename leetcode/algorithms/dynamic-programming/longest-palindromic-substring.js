/**
 * @param {string} s
 * @return {string}
 */

 const getLongestPalindrome = (s,i,j) => {
    
    while(i>=0 && j<s.length && s[i]===s[j]){
        --i;
        ++j;
    }
    
    return s.slice(i+1,j);
}

var longestPalindrome = function(s) {
    if(s.length<2){
        return s;
    }
    let i = 0;
    let maxLenStr = "";
    
    while(i<s.length-1){
        const [candidate1,candidate2] = [getLongestPalindrome(s,i,i),getLongestPalindrome(s,i,i+1)];
        const greaterStr = candidate1.length>candidate2.length ? candidate1 : candidate2;
        maxLenStr = greaterStr.length>maxLenStr.length ? greaterStr : maxLenStr;
        ++i;
    }
    
    return maxLenStr;
    
    
};