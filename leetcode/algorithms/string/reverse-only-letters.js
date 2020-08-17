/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Only Letters"
*/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let low=0,high=S.length-1;
    
    const charArr = S.split('');
    
    while(high>low){
        if(!((S.charCodeAt(low)>64 && S.charCodeAt(low)<91)
           ||
           (S.charCodeAt(low)>96 && S.charCodeAt(low)<123))){
            charArr[low]=S[low];
             low++;
        } else if(!((S.charCodeAt(high)>64 && S.charCodeAt(high)<91)
           ||
           (S.charCodeAt(high)>96 && S.charCodeAt(high)<123))){
            charArr[high]=S[high];
             --high;   
        } else {
            charArr[low] = S[high];
            charArr[high] = S[low];
            ++low;
            --high;
        }
        
        
    }
    
    return charArr.join('');
    
};