/*
    leetcode
    category: "Algorithms"
    problem title: "Group Anagrams"
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getSortedString = (str) => str.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0)).join('');

var groupAnagrams = function(strs) {
    const anagramMap = strs.reduce((angMap,str) => {
        const sortedStr = getSortedString(str);
        angMap.set(sortedStr,(angMap.get(sortedStr) || []).concat(str));
        return angMap;
    }, new Map());
    
    const ansArr = [];
    for(const [sortedStr,arr] of anagramMap.entries()){
        ansArr.push(arr);
    }
    
    return ansArr;
};