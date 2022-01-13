
function intersectionReducer(nMap: Map<number,number>) {
    return (intersection: number[],n: number) => {
        const currCount: number = nMap.get(n) || 0;
        if(currCount>0){
            intersection.push(n);
            nMap.set(n,currCount-1);
        }
        return intersection;
    }
}

function intersect(nums1: number[], nums2: number[]): number[] {
    
    const [shorterArr,longerArr] = nums1.length<=nums2.length ? [nums1,nums2] : [nums2,nums1];
    
    const intMap: Map<number,number> = shorterArr.reduce((nMap,n) => nMap.set(n,(nMap.get(n) || 0)+1),new Map<number,number>());
    
    
    return longerArr.reduce(intersectionReducer(intMap),<number[]>[]);

};