/*
    codesignal
    category: "interview-practice/Arrays"
    problem title: "firstDuplicate"
*/

function firstDuplicate(a: number[]): number {
    
    let result: number = -1;
    
    const numSet: Set<number> = new Set<number>();
    
    for(const i of a){
        if(numSet.has(i)){
            result = i;
            break;
        }
        numSet.add(i)
    }
    
    return result;
    

}
