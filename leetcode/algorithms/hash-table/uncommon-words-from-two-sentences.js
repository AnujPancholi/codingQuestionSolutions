/*
    leetcode
    category: "Algorithms"
    problem title: "Uncommon Words From Two Sentences"
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const combArr = [];
    combArr.push(...A.split(' '),...B.split(' '));
    const wordObj = combArr.reduce((obj,word) => {
        if(!obj[word]){
            obj[word]=1;
        } else{
            ++obj[word];
        }
        return obj;
    },{});
    return Object.keys(wordObj).reduce((arr,word) => {
        if(wordObj[word]===1){
            arr.push(word);
        }
        return arr;
    },[]);
    
};