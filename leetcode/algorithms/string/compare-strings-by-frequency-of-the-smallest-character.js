/*
    leetcode
    category: "Algorithms"
    problem title: "Compare Strings by Frequency of The Smallest Character"
*/


/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

const getFreq = (str) => {
    const charArr = str.split("");
    const minChar = String.fromCharCode(Math.min(...charArr.map(c => c.charCodeAt(0))));
    return charArr.reduce((count,c) => {
        return c===minChar ? count+1 : count;
    },0);
}

var numSmallerByFrequency = function(queries, words) {
    return queries.reduce((resArr,q) => {
        resArr.push(words.reduce((n,w) => {
            if(getFreq(w)>getFreq(q)){
                ++n;
            }
            return n;
        },0));
        return resArr;
    },[]);
};