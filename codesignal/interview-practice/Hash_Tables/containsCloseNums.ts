/*
    codesignal
    category: "interview-practice/Hash_Tables"
    problem title: "containesCloseNums"
*/

function containsCloseNums(nums: number[], k: number): boolean {
    const numberToIndicesMap: Map<number, number> = new Map<number,number>();
    let result: boolean = false;
    for(let i:number = 0;i<nums.length;++i){
        const existingIndex: number | undefined = numberToIndicesMap.get(nums[i]);
        if(typeof(existingIndex)==='number' && (i - existingIndex)<=k){
            result = true;
            break;
        }
        numberToIndicesMap.set(nums[i],i);
    }
    
    return result;

}
