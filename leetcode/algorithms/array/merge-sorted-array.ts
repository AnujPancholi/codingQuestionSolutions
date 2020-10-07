/*
    leetcode
    category: "Algorithms"
    problem title: "Merge Sorted Array"
*/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let arrWalker: number = 0,totalLength=m;
    // n.forEach()
    nums2.forEach((num) => {
        while(nums1[arrWalker]<num && arrWalker<totalLength){
            ++arrWalker
        }
        let i: number = arrWalker, temp1: number = num,temp2: number = num;
        while(i<nums1.length && i<totalLength+1){
            temp2 = nums1[i];
            nums1[i] = temp1;
            temp1 = temp2;
            ++i;
        }
        totalLength++;
    })
};