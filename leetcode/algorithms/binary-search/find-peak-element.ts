function findPeakElement(nums: number[]): number {
    
    let targetIndex = -1;
    let l=0,h=nums.length-1;
    
    while(h>=l){
        const m = l + ~~((h-l)/2);
        
        if((m>0 ? nums[m-1] : Number.MIN_SAFE_INTEGER)<nums[m] && (m<nums.length-1 ? nums[m+1] : Number.MIN_SAFE_INTEGER)<nums[m]){
            targetIndex = m;
            break;
        } else if(nums[m+1]>nums[m]){
                l=m+1;
        } else {
            h=m-1;
        }
    }
    
    return targetIndex;

};