/*
    leetcode
    category: "Algorithms"
    problem title: "Majority Element II"
*/

interface Candidate {
    value?: number;
    count?: number;
}

function majorityElement(nums: number[]): number[] {
    
    const qCount = Math.floor(nums.length/3)
    
    const candidates: Candidate[] = [{
        value: null,
        count: 0
    },{
        value: null,
        count: 0
    }]
    
    for(const num of nums){
        
        const candidateForNum: Candidate | undefined = candidates.find(c => c.value===num)
        
        if(candidateForNum){
            candidateForNum.count++;
        } else {
            const firstZeroCandidate: Candidate | undefined = candidates.find(c => c.count===0)
            if(firstZeroCandidate){
                firstZeroCandidate.value = num;
                firstZeroCandidate.count = 1;
            } else {
                candidates.forEach(c => {
                    c.count--;
                })
            }
        }
        
    }
    
    candidates.forEach(c => {
        c.count=0
    })
    
    nums.forEach(num => {
        candidates.forEach(c => {
            if(c.value===num){
                ++c.count;
            }
        })
    })
    
    return candidates.reduce((result: number[],c: Candidate) => {
        if(c.count>qCount){
            result.push(c.value);
        }
        return result;
    },<number[]>[])

};