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

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

const getFreq = (str) => {
    const charArr = str.split("");
    const minChar = String.fromCharCode(Math.min(...charArr.map(c => c.charCodeAt(0))));
    return {
            value: minChar,
            freq: charArr.reduce((count,c) => {
            return c===minChar ? count+1 : count;
        },0)
    }
}

const FString = function(str){
    this.value = str;
    this.smallestChar = getFreq(str);
}

var numSmallerByFrequency = function(queries, words) {
    const fQueries = queries.map(q => new FString(q));
    const fWords = words.map(w => new FString(w));
    return fQueries.reduce((resArr,q) => {
        resArr.push(fWords.reduce((n,w) => {
            if(w.smallestChar.freq>q.smallestChar.freq){
                n++;
            }
            return n;
        },0));
        return resArr;
    },[]);
};