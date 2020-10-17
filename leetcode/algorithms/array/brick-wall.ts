/*
    leetcode
    category: "Algorithms"
    problem title: "Brick Wall"
*/

function leastBricks(wall: number[][]): number {
    const sumCounts: Map<number,number> = new Map<number,number>();
    
    let i: number = 0;
    
    const sums: number[] = Array.from({length: wall.length},(v,x) => 0);
    
    let maxSum: number = 0,maxSumCount: number = 0,wallWidth: number = wall[0].reduce((sum,num) => sum+num,0);
    
    while(i<wall.length){
        // console.log(wall[i]);
        let j: number = 0;
        while(j<wall[i].length){
            sums[i]+=wall[i][j];
            const countForCurrentSum: number = (sumCounts.get(sums[i]) || 0)+1;
            sumCounts.set(sums[i],countForCurrentSum);
            if(countForCurrentSum>maxSumCount && sums[i]!=wallWidth){
                maxSumCount = countForCurrentSum;
                maxSum = sums[i];
            }
            ++j;
        }
        // console.log(i);
        ++i;
        
    }
    
    // console.log(sumCounts)
    // console.log(maxSumCount);
    return wall.length - maxSumCount;
    
    

};