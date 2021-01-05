/*
	leetcode
	category: "Algorithms"
	problem title: "3Sum"
*/

function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a-b);
    const triplets: number[][] = [];
    
    let i: number = 0;
    
    while(i<nums.length-2){
        const target = 0-nums[i];
        
        let l: number = i+1,h: number = nums.length-1;
        
        while(h-l>0){
            
            const intSum: number = nums[h]+nums[l];
            
            if(intSum>target){
                h--;
            } else if(intSum<target){
                l++;
            } else {
                triplets.push([nums[h],nums[l],nums[i]])
                while(l<nums.length-1 && nums[l]===nums[l+1]){
                    l++
                }
                while(h>0 && nums[h]===nums[h-1]){
                    h--;
                }
                l++;
                h--;
            }
            
        }
        
        while(i<nums.length-2 && nums[i]===nums[i+1]){
            ++i;
        }
        ++i   
    }
    
    return triplets
    

};