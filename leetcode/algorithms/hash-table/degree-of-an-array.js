/*
    leetcode
    category: "Algorithms"
    problem title: "Degree of an Array"
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const elemMap = {};
    let topElem = -1,topElemCount=0;
    
    for(let i=0;i<nums.length;++i){
        let elemInfo=null;
        if(!elemMap[nums[i]]){
            elemInfo = [1,i,i];
            elemMap[nums[i]] = elemInfo;
        } else {
            elemInfo = elemMap[nums[i]];
            ++elemInfo[0];
            elemInfo[2]=i;
        }
        
        if(elemInfo[0]>topElemCount){
                topElem=nums[i];
                topElemCount=elemInfo[0];
            } else if(elemInfo[0]===topElemCount){
                let topElemInfo = elemMap[topElem];
                if((elemInfo[2]-elemInfo[1])<(topElemInfo[2]-topElemInfo[1])){
                    topElem = nums[i];
                    topElemCount=elemInfo[0];
                }
            }
    }
    
    return elemMap[topElem][2] - elemMap[topElem][1] + 1;
    
};