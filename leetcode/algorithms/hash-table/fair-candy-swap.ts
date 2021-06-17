function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const sums = [aliceSizes.reduce((sum,x) => sum+x,0),bobSizes.reduce((sum,x) => sum+x,0)]
    const half: number = Math.floor((sums[0]+sums[1])/2);
    
    const aset = aliceSizes.reduce((set,x) => {
        set.add(x);
        return set;
    },new Set<number>())
    let targetNums: Array<number> = [];
    for(const num of bobSizes){
        if(aset.has(half - (sums[1]-num))){
            targetNums = [half - (sums[1]-num),num]
        }
    }
    return targetNums
    
    
    
    
};