/*
	leetcode
	category: "Algorithms"
	problem title: "Rank Transform of an Array"
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArr = [...arr];
    
    sortedArr.sort((a,b) => a-b);
    
    const rankMap = {};
    let rank=0, currentRankHolder=null;
    
    for(let i=0;i<sortedArr.length;++i){
        if(currentRankHolder===null || sortedArr[i]>currentRankHolder){
            ++rank;
            currentRankHolder=sortedArr[i];
            rankMap[currentRankHolder] = rank;
        }
    }
    
    return arr.map(i => rankMap[i]);
};