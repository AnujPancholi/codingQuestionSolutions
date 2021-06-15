function repeatedNTimes(nums: number[]): number {
    
    const numSet: Set<number> = new Set<number>();
    let targetNum: number = -1;
    for(const num of nums){
        if(numSet.has(num)){
            targetNum = num;
            break;
        }
        numSet.add(num);
    }
    
    return targetNum

};