function largestPerimeter(nums: number[]): number {
    const sortedNums = [...nums].sort((a,b) => b-a);
    let i = 0,result = 0;
    while(i<=sortedNums.length-3){
        if(sortedNums[i+1]+sortedNums[i+2]>sortedNums[i]){
            result = sortedNums[i+1]+sortedNums[i+2]+sortedNums[i];
            break;
        }
        ++i;
    }
    return result;
};