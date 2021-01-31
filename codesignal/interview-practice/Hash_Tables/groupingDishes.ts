/*
    codesignal
    category: "interview-practice/Hash_Tables"
    problem title: "groupingDishes"
*/

function groupingDishes(dishes: string[][]): string[][] {
    
    const ingMap: Map<string,Set<string>> = new Map<string,Set<string>>();
    
    for(const dishInfo of dishes){
        let i: number = 1;
        while(i<dishInfo.length){
            const existingSet = ingMap.get(dishInfo[i]);
            if(existingSet){
                existingSet.add(dishInfo[0]);
            } else {
                ingMap.set(dishInfo[i],new Set([dishInfo[0]]));
            }
            ++i;
        }
    }
    
    const result: string[][] = [];
    
    ingMap.forEach((dishSet,ing) => {
        if(dishSet.size<2){
            return;
        }
        result.push([ing,...[...dishSet].sort((a,b) => b<a ? 1 : -1)])
    })
    
    return result.sort((a,b) => b[0]<a[0] ? 1 : -1);

}
