/*
    leetcode
    category: "Algorithms"
    problem title: "Jewels and Stones"
*/

function numJewelsInStones(J: string, S: string): number {
    const jSet = new Set<string>(J.split(''));
    
    let count: number = 0;
    for(let i: number = 0;i<S.length;++i){
        if(jSet.has(S.charAt(i)))++count;
    }
    return count;

};