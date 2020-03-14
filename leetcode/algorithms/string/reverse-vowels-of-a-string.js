/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Vowels of a String"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const vowels = [],consonants = [],vowelIndices = [];
    for(let i=0;i<s.length;i++){
        if(vowelSet.has(s[i])){
            vowels.push(s[i]);
            vowelIndices.push(i);
        } else {
            consonants.push(s[i]);
        }
    }
    vowels.reverse();
    let newString="",v=0,c=0;
    for(let i=0;i<s.length;i++){
        if(vowelIndices[v]===i){
            newString+=vowels[v];
            ++v;
        } else {
            newString+=consonants[c];
            ++c;
        }
    }
    return newString;
};