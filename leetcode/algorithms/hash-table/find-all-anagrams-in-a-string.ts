/*
    leetcode
    category: "Algorithms"
    problem title: "Find all Anagrams in a String"
*/


function getStringMap(str: string): Map<string,number | undefined> {
    const strMap: Map<string,number | undefined> = new Map<string,number | undefined>();
    
    for(let i: number = 0;i<str.length;++i){
        strMap.set(str.charAt(i),(strMap.get(str.charAt(i)) || 0)+1);
    }

    return strMap;
}

function isAllMapCountZero(cMap: Map<string,number | undefined>): boolean {
    let resultBool: boolean = true;
    cMap.forEach((val,key) => {
        resultBool = val===0 && resultBool;
    })
    return resultBool;
}


function findAnagrams(s: string, p: string): number[] {
    const pMap: Map<string,number | undefined> = getStringMap(p);
    const indices: number[] = [];
    
    let i: number = 0,l: number = -1;
    
    while(l<p.length-1){
        ++l
        const pMapCount: number | undefined = pMap.get(s[l]);
        if(pMapCount!==undefined){
            pMap.set(s[l],pMapCount-1);
        }
    }
    
    while(l<s.length){
        // console.log(pMap);
        if(isAllMapCountZero(pMap)){
            indices.push(i);
        }
        
        if(pMap.has(s[i])){
            pMap.set(s[i],(pMap.get(s[i]) || 0)+1);
        }
        ++i;
        ++l;
        if(pMap.has(s[l])){
            pMap.set(s[l],(pMap.get(s[l]) || 0)-1);
        }
    }
    
    return indices;   

};