/*
    leetcode
    category: "Algorithms"
    problem title: "Intersection of Two Arrays II"
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    const baseMap = nums1.reduce((nMap,num) => {
        nMap.set(num,(nMap.get(num) || 0) + 1);
        return nMap;
    },new Map());
    
    return nums2.reduce((intersection,num) => {
        const existingCount = baseMap.get(num);
        if(existingCount){
            intersection.push(num);
            baseMap.set(num,existingCount-1);
        }
        return intersection;
    },[])
    
};