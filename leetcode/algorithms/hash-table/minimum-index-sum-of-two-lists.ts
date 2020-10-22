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
    
    const nameEntriesMap: Map<number,Array<any>> = new Map<number,Array<any>>();
    
    let minSum: number = list1.length+list2.length;
    list2.forEach((name,index) => {
        const mapEntry = l1Map.get(name);
        
        if(typeof mapEntry === "number"){
            nameEntriesMap.set(mapEntry+index,(nameEntriesMap.get(mapEntry+index) || []).concat(name));
            if(minSum>mapEntry+index){
                minSum = mapEntry+index;
            }
        }
    })
    
    // console.log(nameEntries);
    
    
    return nameEntriesMap.get(minSum) || [];


};