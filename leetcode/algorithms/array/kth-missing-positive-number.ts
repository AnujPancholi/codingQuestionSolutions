/*
	leetcode
	category: "Algorithms"
	problem title: "Kth Missing Positive Number"
*/


function findKthPositive(arr: number[], k: number): number {
    let missingCount: number = 0;
    let i: number = 0, result: number = 0, lastNumber: number = 0;
    
    while(i<arr.length){
        
        const nextMissingCount: number = missingCount + arr[i] - lastNumber  - 1;
        
        if(nextMissingCount>=k){
            break;
        }
        
        lastNumber = arr[i];
        missingCount = nextMissingCount;
        
        
        ++i;
    }
    
    return lastNumber + (k - missingCount);
};