/*
    leetcode
    category: "Algorithms"
    problem title: "Find All Numbers Disappeared in an Array"
*/

function findDisappearedNumbers(nums: number[]): number[] {
    const arr: number[] = Array.from({length: nums.length},(v,i) => i+1);
    nums.forEach(num => {
        arr[num-1]=0;
    })
    return arr.filter(n => n!==0);
};