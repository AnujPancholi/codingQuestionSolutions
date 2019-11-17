/*
    leetcode
    category: "Algorithms"
    problem title: "Ransom Note"
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i=0;i<ransomNote.length;i++){
        let rem = magazine.replace(ransomNote[i],"");
        if(rem===magazine){
            return false;
        }
        magazine = rem;
    }
    return true;
};