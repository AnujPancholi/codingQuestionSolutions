/*
    leetcode
    category: "Algorithms"
    problem title: "Majority Element"
*/

function majorityElement(nums: number[]): number {
    
    let candidate: number = nums[0], i: number = 1,voteCount: number = 0;
    
    while(i<nums.length){
        if(nums[i]===candidate){
            voteCount++;
        } else {
            --voteCount;
            if(voteCount===0){
                candidate = nums[i];
                voteCount=1;
            }
        }
        ++i;
    }
    
    return candidate;

};