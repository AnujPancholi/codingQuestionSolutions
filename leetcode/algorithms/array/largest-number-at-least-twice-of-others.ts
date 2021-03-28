/*
    leetcode
    category: "Algorithms"
    problem title: "Largest Number At Least Twice of others"
*/

function dominantIndex(nums: number[]): number {
    
    if(nums.length===1){
        return 0;
    }
    
    const numObjs = nums.map((num,index) => ({num,index})).sort((a,b) => b.num-a.num);
    
    
    return numObjs[0].num>=2*numObjs[1].num ? numObjs[0].index : -1;

};