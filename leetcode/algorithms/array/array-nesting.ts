/*
	leetcode
	category: "Algorithms"
	problem title: "Array Nesting"
*/

function arrayNesting(nums: number[]): number {
    
    let maxSize: number = 0;
    
    const inCycleSet: Set<number> = new Set<number>();
    
    nums.forEach((num,index) => {
        let currCount: number = 0,w: number = index;
        while(!inCycleSet.has(nums[w])){
            inCycleSet.add(nums[w]);
            w = nums[w];
            ++currCount;
        }
        if(currCount>maxSize){
            maxSize=currCount;
        }
    })
    
    return maxSize;

};