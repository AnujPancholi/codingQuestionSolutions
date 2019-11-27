/*
    leetcode
    category: "Algorithms"
    problem title: "Isomorphic Strings"
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mappingObj={},reverseMappingObj={};
    for(let i=0;i<s.length;i++){
        if((mappingObj[s[i]] && mappingObj[s[i]]!=t[i]) || (reverseMappingObj[t[i]] && reverseMappingObj[t[i]]!=s[i])){
            return false;
        } else {
            mappingObj[s[i]]=t[i];
            reverseMappingObj[t[i]]=s[i];
        }   
    }
    return true;
    
};