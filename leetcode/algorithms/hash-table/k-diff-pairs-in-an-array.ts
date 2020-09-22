/*
    leetcode
    category: "Algorithms"
    problem title: "K-diff Pairs in an Array"
*/

function getPairString(a: number, b: number): string {
    return [a,b].sort((a,b) => a-b).join(",");
}

function findPairs(nums: number[], k: number): number {
    const pairSet: Set<string> = new Set<string>();
    const numSet: Set<number> = new Set<number>();
    if(k<0){
        return 0;
    }
    for(const num of nums){
        if(numSet.has(num+k)){
            pairSet.add(getPairString(num,num+k));
        }
        if(numSet.has(num-k)){
            pairSet.add(getPairString(num,num-k));
        }
        numSet.add(num);
    }
    
    return pairSet.size;

};