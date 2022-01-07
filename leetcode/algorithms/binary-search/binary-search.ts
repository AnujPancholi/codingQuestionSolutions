function search(nums: number[], target: number): number {
    
    let targetIndex = -1, l=0,h=nums.length-1;
    
    while(h>=l){
        const m = l + ~~((h-l)/2);
        if(nums[m]===target){
            targetIndex = m;
            break;
        } else if(nums[m]>target){
            h=m-1;
        } else {
            l=m+1;
        }
    }
    
    return targetIndex;

};