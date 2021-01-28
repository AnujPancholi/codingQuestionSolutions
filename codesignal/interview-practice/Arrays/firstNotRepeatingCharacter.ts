/*
    codesignal
    category: "interview-practice/Arrays"
    problem title: "firstNotRepeatingCharacter"
*/

function firstNotRepeatingCharacter(s: string): string {
    let result: string = "_"
    
    const singleSet: Set<string> = new Set<string>(), repeatingSet: Set<string> = new Set<string>();
    
    for(let i: number = 0;i<s.length;++i){
        if(!repeatingSet.has(s[i])){
            if(singleSet.has(s[i])){
                singleSet.delete(s[i]);
                repeatingSet.add(s[i]);
            } else {
                singleSet.add(s[i]);
            }
        }
    }
    
    for(const c of singleSet){
        result = c;
        break;
    }
    
    return result;

}
