/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 const getTwoSumResults = (nums,k,j,target) => {
    const compSet = new Set();
    const results = [];
    let lastNum = null,i=k;
    while(i<j){
        if(i>k+1 && lastNum!=null && lastNum===nums[i]){
            ++i;
            continue;
        }
        const currComp = target - nums[i];
        if(compSet.has(currComp)){
            results.push([currComp, nums[i]]);
            lastNum = nums[i];
        }
        compSet.add(nums[i]);
        
        ++i;
    }
    
    return results;
}

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    
    const results = [];
    let lastNum = 0;
    
    for(let i = 0;i<nums.length-1;++i){
        if(i>0 && lastNum===nums[i]){
            continue;
        }
        const intermediateResults = getTwoSumResults(nums,i+1,nums.length,-1*nums[i]);
        results.push(...intermediateResults.map(r => {
            r.unshift(nums[i]);
            return r;
        }));
        lastNum = nums[i];
    }
    
    return results;
    
};