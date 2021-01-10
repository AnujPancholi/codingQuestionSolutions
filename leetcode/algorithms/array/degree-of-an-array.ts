/*
	leetcode
	category: "Algorithms"
	problem title: "Degree of an Array"
*/

interface IndexObj {
    count: number;
    low: number;
    high: number;
}

function findShortestSubArray(nums: number[]): number {
    
    const indexMap: Map<number,IndexObj> = new Map<number,IndexObj>();
    
    let i: number = 0;
    while(i<nums.length){
        const currEntry: IndexObj = indexMap.get(nums[i]);
        
        if(!currEntry){
            indexMap.set(nums[i],{
                count: 1,
                low: i,
                high: i
            })
        } else {
            ++currEntry.count;
            currEntry.high = i;
        }
        
        ++i;
    }
    
    const arr: IndexObj[] = [];
    indexMap.forEach((obj,num) => {
        arr.push(obj);
    })
    
    arr.sort((a,b) => b.count-a.count);
    
    const maxCount: number = arr[0].count;
    i=0;
    let minLength: number = Infinity;
    while(i<arr.length && arr[i].count===maxCount){
        if((arr[i].high-arr[i].low+1)<minLength){
            minLength=(arr[i].high-arr[i].low)+1;
        }
        ++i;
    }
    
    return minLength

};