/*
    leetcode
    category: "Algorithms"
    difficulty: "easy"
    problem title: "Roman to Integer"
*/


/**
 * @param {string} s
 * @return {number}
 */

const symbolValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000   
}

var romanToInt = function(s) {
    let value = 0,lastLetterValue = null;
    for(let i=0;i<s.length;i++){
        let currentLetterValue = symbolValues[s[i]];
        if(lastLetterValue && lastLetterValue<currentLetterValue){
            value+=currentLetterValue-(2*lastLetterValue);
        } else{
            value+=currentLetterValue;
        }
        lastLetterValue=currentLetterValue;
    }
    return value;
};