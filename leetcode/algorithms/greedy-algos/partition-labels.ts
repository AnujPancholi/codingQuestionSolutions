/*
    leetcode
    category: "Algorithms"
    problem title: "Partition Labels"
*/


function getCharSpansMap(str: string): Map<string, Array<number>>{
    const charSpan: Map<string, Array<number>> = new Map<string, Array<number>>();
    for(let i: number = 0;i<str.length;++i){
        const existingEntry: Array<number> | undefined = charSpan.get(str.charAt(i));
        if(existingEntry===undefined){
            charSpan.set(str.charAt(i), [i]);
        } else if(existingEntry.length===1){
            existingEntry.push(i);
        } else {
            existingEntry[1] = i;
        }
    }

    return charSpan;
}

function partitionLabels(S: string): number[] {
    const charSpanMap = getCharSpansMap(S);
    const ansArr: number[][] = [];
    // console.log(charSpanMap);
    
    charSpanMap.forEach((val,key) => {
        const fitterSpan: number[] | undefined = ansArr.find((arr) => (
            arr[1]>val[0]
        ))
        
        if(fitterSpan===undefined){
            ansArr.push(val);
        } else if(val.length>1 && val[1]>fitterSpan[1]) {
            fitterSpan[1] = val[1];
        }
    })
    // console.log(ansArr);
    
    return ansArr.map((arr) => ((arr[1]-arr[0]) || 0)+1);

};