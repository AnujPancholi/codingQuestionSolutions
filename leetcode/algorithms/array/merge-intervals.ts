/*
    leetcode
    category: "Algorithms"
    problem title: "Merge Intervals"
*/

function merge(intervals: number[][]): number[][] {
    
    intervals.sort((int1,int2) => int1[0]-int2[0]);
    
    const mergedIntervals: number[][] = [];
    
    for(const [start,end] of intervals){
        if(mergedIntervals.length===0){
            mergedIntervals.push([start,end]);
        } else {
            const lastInterval: number[] = mergedIntervals[mergedIntervals.length-1];
            if(lastInterval[1]>=start && lastInterval[1]<end){
                lastInterval[1] = end;
            } else if(lastInterval[1]<start) {
                mergedIntervals.push([start,end]);
            }
        }
    }
    
    return mergedIntervals;

};