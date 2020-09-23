/*
    leetcode
    category: "Algorithms"
    problem title: "K-diff Pairs in an Array"
*/

function findPairs(nums: number[], k: number): number {
    const numSet: Set<number> = new Set<number>();
    const duplicateSet: Set<number> = new Set<number>();
    
    const uniqueNums = Array.from(new Set<number>(nums));
    
    let count: number = 0;
    if(k===0){
        for(const num of nums){
            if(numSet.has(num) && !duplicateSet.has(num)){
                ++count;
                duplicateSet.add(num);
            }
            numSet.add(num);
        }
    } else if (k<0){
        return 0;
    } else {
        for(const num of uniqueNums){
            if(numSet.has(num+k)){
                ++count;
            }
            if(numSet.has(num-k)){
                ++count;
            }
            numSet.add(num);
        }
    }
    
    
    return count;
};