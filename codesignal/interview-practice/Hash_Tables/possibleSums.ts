/*
    codesignal
    category: "interview-practice/Hash_Tables"
    problem title: "possibleSums"
*/

function getAllSums(num: number, quant: number): number[]{
    return Array.from({length: quant},(v,i) => ((i+1)*num));
}

function getPossibleSums(coins: number[],quantity: number[], i: number, j: number): Set<number> {
    
    if(i===j){
        return new Set<number>(getAllSums(coins[i], quantity[i]));
    }
    
    
    const restSet = getPossibleSums(coins, quantity, i+1, j);
    
    const newSums: Set<number> = new Set<number>();
    for(const n of restSet.values()){
        for(let k=1;k<=quantity[i];++k){
            newSums.add(n+(k*coins[i]));
            newSums.add(k*(coins[i]));
        }
    }
    
    return new Set([...Array.from(newSums),...Array.from(restSet)])
}


function possibleSums(coins: number[], quantity: number[]): number {
    
    return getPossibleSums(coins, quantity, 0, coins.length-1).size;
    
}
