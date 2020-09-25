/*
    leetcode
    category: "Algorithms"
    problem title: "Set Mismatch"
*/

function findErrorNums(nums: number[]): number[] {
    
    const numSet: Set<number> = new Set<number>();
    let numSum: number = 0,duplicateNum: number = 0;
    
    nums.forEach(num => {
        if(duplicateNum===0 && numSet.has(num)){
            duplicateNum = num;
        } else {
            numSet.add(num);
        }
        numSum+=num;
    })
    
    return [duplicateNum,((nums.length*(nums.length+1))/2) - (numSum-duplicateNum)]; 
    

};