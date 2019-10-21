/*
	leetcode
	category: "Algorithms"
	difficulty: "Easy"
	problem title: "Two Sum"
*/


var twoSum = function(nums, target) {
    let compToIndexMap = {};
    for(let i=0;i<nums.length;i++){
        if(compToIndexMap[nums[i]]){
            return [compToIndexMap[nums[i]],i];
        } else {
            compToIndexMap[(target-nums[i])] = i;
        }
    }
};