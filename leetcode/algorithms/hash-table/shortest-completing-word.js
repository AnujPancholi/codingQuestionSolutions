/*
    leetcode
    category: "Algorithms"
    problem title: "Shortest Completing Word"
*/


/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

const getLetterMap = (str) => {
    const letterToCount = {};
    for(let i=0;i<str.length;++i){
        if(str[i].match(/[a-z]/)){
            letterToCount[str[i]] = letterToCount[str[i]] ? letterToCount[str[i]]+1 : 1;
        }
    }
    
    return letterToCount;
}

var shortestCompletingWord = function(licensePlate, words) {
    
    const sortedWords = [...words].sort((a,b) => a.length-b.length);
    
    const baseMap = getLetterMap(licensePlate.toLowerCase());
    const baseLetters = Object.keys(baseMap);
    
    
    
    let ansStr = '';
    
    for(let i=0;i<sortedWords.length;++i){
        const wordMap = getLetterMap(sortedWords[i]);
        
        let isMatch = true;
        
        for(let j=0;j<baseLetters.length && isMatch;++j){
            if(!wordMap[baseLetters[j]] || baseMap[baseLetters[j]]>wordMap[baseLetters[j]]){
                isMatch=false;
            }
        }
        
        
        if(isMatch){
            ansStr=sortedWords[i];
            break;
        }
    }
    
    return ansStr;
    
    
    
};