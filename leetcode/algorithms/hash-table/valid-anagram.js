/*
    leetcode
    category: "Algorithms"
    problem title: "Valid Anagram"
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


const getCharMap = (str) => {
    const charMap = new Map();
    for(let i=0;i<str.length;++i){
        charMap.set(str[i],(charMap.get(str[i]) || 0)+1);
    }
    return charMap;
}

var isAnagram = function(s, t) {
    const sMap = getCharMap(s);
    const tMap = getCharMap(t);
    
    let isValidAnagram = true;
    if(sMap.size===tMap.size){
        for(const [c,count] of sMap.entries()){
            if(!tMap.has(c) || tMap.get(c)!=count){
                isValidAnagram = false;
                break;
            }
        }
    } else {
        isValidAnagram = false;
    }
    
    return isValidAnagram;
    
};