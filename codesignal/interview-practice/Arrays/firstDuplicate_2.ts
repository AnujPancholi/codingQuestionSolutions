/*
    codesignal
    category: "interview-practice/Arrays"
    problem title: "firstDuplicate"
*/

function firstDuplicate(a: number[]): number {
    
    let result: number = -1;
    
    for(const i of a){
        if(a[Math.abs(i)-1]<0){
            result = Math.abs(i);
            break;
        }
        a[Math.abs(i)-1]*=-1;
    }
    
    return result

}
