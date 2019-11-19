/*
    leetcode
    category: "Algorithms"
    problem title: "Find the Difference"
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let letterObj = {};
    for(let i=0;i<s.length;i++){
        if(!letterObj[s[i]]){
            letterObj[s[i]]=1;
        } else {
            letterObj[s[i]]++;
        }
    }
    for(let i=0;i<t.length;i++){
        if(letterObj[t[i]]){
            letterObj[t[i]]--;
            if(letterObj[t[i]]===0){
                delete letterObj[t[i]];
            }
        } else {
            return t[i];
        }
    }
    
};