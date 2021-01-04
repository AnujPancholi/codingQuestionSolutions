/*
    leetcode
    category: "Algorithms"
    problem title: "Two Sum"
*/

function twoSum(nums: number[], target: number): number[] {
    let l: number = 0, j: number = nums.length-1;
    
    const ans: number[] = [];
    
    const modNums = nums.map((num,index) => [num,index]).sort((a,b) => a[0]-b[0]);
    
    while(j-l>0){
        const intSum: number = modNums[l][0]+modNums[j][0];
        if(intSum>target){
            j--;
        } else if(intSum<target) {
            l++;
        } else {
            ans.push(modNums[l][1],modNums[j][1])
            break;
        }
    }
    
    return ans;
    

};