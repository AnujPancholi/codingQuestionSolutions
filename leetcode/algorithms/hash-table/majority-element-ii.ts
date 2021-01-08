/*
    leetcode
    category: "Algorithms"
    problem title: "Majority Element II"
*/

function majorityElement(nums: number[]): number[] {
    
    const countMap: Map<number, number> = new Map<number,number>();
    const target: number = Math.floor(nums.length/3)
                                      
    const resultSet: Set<number> = new Set<number>();
    
    for(const num of nums){
        const count = (countMap.get(num) || 0)+1;
        countMap.set(num,count);
        
        if(count>target){
            resultSet.add(num);
        }
    }
    
    
    return Array.from(resultSet);
    

};