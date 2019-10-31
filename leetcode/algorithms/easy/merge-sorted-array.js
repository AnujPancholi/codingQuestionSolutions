/*
    leetcode
    category: "Algorithms"
    problem title: "Merge Sorted Array"
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const getIndexToInsert = (arr,num) => {
    let low=0,high = arr.length-1;
    let mid;
    while(high-low>1){
        mid=Math.floor((high+low)/2);
        if(arr[mid]===num){
            return mid;
        } else if(arr[mid]<num){
            low=mid;
        } else {
            high=mid
        }
    }
    if(num>=arr[high]){
        return high+1;
    } else if(low>0 && num<=arr[low]){
        return low-1;
    } else if(num>arr[low]){
        return high;
    } else {
        return low;
    }
}

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m);
    if(n===0) {
        return null;
    }
    nums2.forEach(num => {
        let insertIndex = getIndexToInsert(nums1,num);
        nums1.splice(insertIndex,0,num);
    })
    
    return null;
};