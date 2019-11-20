/*
    leetcode
    category: "Algorithms"
    problem title: "First Unique Character in a String"
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let uniqueCharObj = {},nonUniqueCharObj = {};
    for(let i=0;i<s.length;i++){
        if(nonUniqueCharObj[s[i]]){
            continue;
        }
        
        if(uniqueCharObj.hasOwnProperty(s[i])){
            nonUniqueCharObj[s[i]]=true;
            delete uniqueCharObj[s[i]]
        } else {
            uniqueCharObj[s[i]]=i;
        }
    }
    let indices = Object.values(uniqueCharObj);
    return indices.length ? Math.min(...indices) : -1;
    
};