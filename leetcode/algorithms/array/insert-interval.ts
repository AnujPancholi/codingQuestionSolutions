/*
    leetcode
    category: "Algorithms"
    problem title: "Insert Interval"
*/

function getIntervalIndex(intervals: number[][], start: number): number{
    
    if(intervals.length===0){
        return 0;
    }
    
    let low: number = 0,high: number = intervals.length-1;
    let targetIndex: number = -1;
    
    while(high-low>1){
        let mid: number = Math.floor((high+low)/2);
        if(intervals[mid][0]<=start && intervals[mid][1]<start){
            return mid;
        } else if(intervals[mid][0]>start){
            high=mid;
        } else {
            low=mid;
        }
    }
    
    if(intervals[high][0]<start){
        targetIndex = high+1;
    } else if(intervals[low][0]>start){
        targetIndex = low;
    } else {
        targetIndex = high;
    }
    
    return targetIndex;
    
    
    
}


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


function insert(intervals: number[][], newInterval: number[]): number[][] {
    const insertionIndex = getIntervalIndex(intervals,newInterval[0]);
    
    // console.log(insertionIndex);
    
    intervals.splice(insertionIndex,0,newInterval);
    
    
    return merge(intervals);

};