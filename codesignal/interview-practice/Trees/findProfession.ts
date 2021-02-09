/*
    codesignal
    category: "interview-practice/Trees"
    problem title: "findProfession"
*/


function findProfession(level: number, pos: number): string {
    
    const profRules = {
        'E': {
            'left': 'E',
            'right': 'D'
        },
        'D': {
            'left': 'D',
            'right': 'E'
        }
    }
    
    const levelWidth: number = Math.pow(2,level-1);
    // console.log(levelWidth)
    let l: number = 1,h: number = levelWidth, i: number=1;
    let currProfession: string = "E";
    while(i<level){
        let m: number = (l+h)/2;
        if(m>pos){
            currProfession = profRules[currProfession]['left'];
            h=Math.floor(m);
        } else {
            currProfession = profRules[currProfession]['right'];
            l = Math.floor(m+1);
        }
        
        ++i;
    }
    
    return currProfession==="E" ? "Engineer" : "Doctor";
}
