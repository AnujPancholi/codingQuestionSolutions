/*
	leetcode
	category: "Algorithms"
	problem title: "Average Salary Excluding the Minimum and Maximum Salary"
*/


/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    return salary.sort((a,b) => a-b).reduce((avg,sal,index) => {
        if(index>0 && index<salary.length-1){
            avg = ((avg*(index-1))+sal)/index;
        }
        return avg;
    },0);
};