/*
    leetcode
    category: "Algorithms"
    problem title: "Subarray Sum Equals K"
*/

function subarraySum(nums: number[], k: number): number {
    let count: number = 0;
    
    let sumsEndingAtIndex: number[] = [];
    
    nums.forEach((num) => {
        sumsEndingAtIndex = sumsEndingAtIndex.map(s => {
            const retSum = s+num
            if(retSum===k){
                ++count;
            }
            return retSum;
        }).concat(num);
        if(num===k)++count;
    })
    
    return count;
}