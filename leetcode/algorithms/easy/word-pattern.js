/*
    leetcode
    category: "Algorithms"
    problem title: "Word Pattern"
*/


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const words = str.split(' ');
    const charToWordMapping = {};
    const wordToCharMapping = {};
    if(pattern.length!=words.length){
        return false;
    }
    for(let i=0;i<pattern.length;i++){
        console.log(charToWordMapping,wordToCharMapping);
        if((charToWordMapping[pattern[i]] && charToWordMapping[pattern[i]]!=words[i]) || (wordToCharMapping[words[i]] && wordToCharMapping[words[i]]!=pattern[i])){
            return false;
        } else if(!charToWordMapping[pattern[i]]){
            charToWordMapping[pattern[i]] = words[i];
            wordToCharMapping[words[i]]=pattern[i];
        }
    }
    return true;
    
};