/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Index Sum of Two Lists"
*/

function getElementToIndexHashmap(list: any[]){
    const hashMap: Map<any,number> = new Map<any,number>();
    
    list.forEach((item,index) => {
        hashMap.set(item,index);
    })
    
    return hashMap;
}

function findRestaurant(list1: string[], list2: string[]): string[] {
    
    const l1Map: Map<any,number> = getElementToIndexHashmap(list1);
    
    interface NameEntry {
        name: any,
        indexSum: number
    }
    
    const nameEntries: NameEntry[] = [];
    
    list2.forEach((name,index) => {
        const mapEntry = l1Map.get(name);
        
        if(typeof mapEntry === "number"){
            nameEntries.push({
                name: name,
                indexSum: index+mapEntry
            })
        }
    })
    
    nameEntries.sort((n,m) => n.indexSum-m.indexSum);
    
    const minSum: number = nameEntries[0].indexSum;
    let i: number = 0;
    
    const commonNames: any[] = [];
    
    while(i<nameEntries.length){
        if(nameEntries[i].indexSum>minSum){
            break;
        }
        commonNames.push(nameEntries[i].name);
        ++i;
    }
    
    // console.log(nameEntries);
    
    
    return commonNames;


};