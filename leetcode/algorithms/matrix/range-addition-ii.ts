/*
    leetcode
    category: "Algorithms"
    problem title: "Range Addition II"
*/

function maxCount(m: number, n: number, ops: number[][]): number {
    
    if(ops.length===0){
        return m*n;
    }
    let currPt: number[] = ops[0].map(val => val-1);
    
    for(let i: number = 0;i<ops.length;++i){
        currPt = [Math.min(currPt[0],ops[i][0]-1),Math.min(currPt[1],ops[i][1]-1)];
    }
    
    return (currPt[0]+1)*(currPt[1]+1);

};