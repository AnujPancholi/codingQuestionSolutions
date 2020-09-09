function twoSum(nums: number[], target: number): number[] {
    const complementMap: Map<number, number> = new Map<number, number>();
    let ansNums: number[] = [];
    
    for(let i:number=0;i<nums.length;++i){
        const complementIndex = complementMap.get(target - nums[i]);
        if(complementIndex!=undefined){
            ansNums.push(i,complementIndex);
            break;
        }
        complementMap.set(nums[i],i);
    }
    
    return ansNums;

};