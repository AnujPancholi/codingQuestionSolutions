
/*
	leetcode
	category: "Algorithms"
	problem title: "Remove Duplicates from Sorted Array II"
*/


function removeDuplicates(nums: number[]): number {
    const ALLOWED_REPITITION: number = 2;
    
    let builder: number = -1, fetcher: number = 0,repCount = 1;
        while(fetcher<nums.length){
            if(nums[builder]===nums[fetcher]){
                if(repCount<ALLOWED_REPITITION){
                    ++builder;
                    nums[builder]=nums[fetcher];
                }
                ++repCount;
            } else {
                repCount=1;
                builder++;
                nums[builder]=nums[fetcher];
            }
            ++fetcher;
        }
          
    return builder+1;
    

};