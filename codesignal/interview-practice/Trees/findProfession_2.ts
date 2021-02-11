/*
    codesignal
    category: "interview-practice/Trees"
    problem title: "findProfession"
*/

function findProfession(level: number, pos: number): string {
    
    const elements: string[] = ['Engineer','Doctor'];
    let ptrIndex: number = 0;
    
    const levelWidth: number = Math.pow(2,level-1);
    
    let l: number = 1,h: number = levelWidth, i: number=1;
    let currProfession: string = elements[ptrIndex];
    while(i<level){
        let m: number = (l+h)/2;
        if(m>pos){
            h=Math.floor(m);
        } else {
            ptrIndex=(ptrIndex+1)%elements.length;
            currProfession = elements[ptrIndex]
            l = Math.floor(m+1);
        }
        
        ++i;
    }
    
    return currProfession;
}
