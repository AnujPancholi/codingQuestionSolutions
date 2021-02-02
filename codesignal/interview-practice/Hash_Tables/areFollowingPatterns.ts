/*
    codesignal
    category: "interview-practice/Hash_Tables"
    problem title: "groupingDishes"
*/

function areFollowingPatterns(strings: string[], patterns: string[]): boolean {
    
    let i: number = 0,isCompliant: boolean = true;
    const patternToStringMap: Map<string,string> = new Map<string,string>();
    const stringToPatternMap: Map<string,string> = new Map<string,string>();
    
    
    while(i<strings.length){
        const existingString = patternToStringMap.get(patterns[i]);
        const existingPattern = stringToPatternMap.get(strings[i]);
        
        if((existingPattern!==undefined && existingPattern!==patterns[i]) || (existingString!==undefined && existingString!==strings[i])){
            isCompliant = false;
            break;
        }
        
        patternToStringMap.set(patterns[i],strings[i]);
        stringToPatternMap.set(strings[i],patterns[i]);
        ++i;
    }
    
    return isCompliant;
}
