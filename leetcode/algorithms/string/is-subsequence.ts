/*
    leetcode
    category: "Algorithms"
    problem title: "Is Subsequence"
*/

function isSubsequence(s: string, t: string): boolean {
    let j: number = 0;
    for(let i: number = 0;i<t.length;++i){
        if(t.charAt(i)===s.charAt(j)){
            j++;
        }
    }
    
    return j===s.length;
};