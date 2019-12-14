/*
    leetcode
    category: "Algorithms"
    problem title: "Two Sum II - Input Array is Sorted"
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let low = 0, high = numbers.length-1;
    for(let i=0;i<Math.floor(numbers.length/2);i++){
        let comp = target-numbers[low];
        let j;
        for(j=high;numbers[j]>comp;j--);
        high=j;
        if(numbers[high]===comp){
            return [low+1,high+1];
        }
        comp = target-numbers[high];
        for(j=low;numbers[j]<comp;j++);
        low=j;
        if(numbers[low]===comp){
            return [low+1,high+1];
        }
    }
    
};