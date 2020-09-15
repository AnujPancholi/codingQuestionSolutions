/*
    leetcode
    category: "Algorithms"
    problem title: "Contains Duplicate II"
*/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numToIndexMap: Map<number, number> = new Map<number, number>();
    let ansBool: boolean = false;
    
    for(let i: number = 0;i<nums.length;++i){
        const existingIndex: number | undefined = numToIndexMap.get(nums[i]);
        if(existingIndex!==undefined){
            if(Math.abs(i-existingIndex)<=k){
                ansBool = true;
                break;
            } else {
                numToIndexMap.set(nums[i],i);
            }
        } else {
            numToIndexMap.set(nums[i],i);
        }
    }
    
    return ansBool;

};