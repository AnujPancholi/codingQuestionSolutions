/*
    leetcode
    category: "Algorithms"
    problem title: "Pascal's Triangle II"
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

const factorial = (num) => num===0 ? 1 : num*factorial(num-1);

const getTerm = (row, col) => factorial(row)/(factorial(col)*factorial(row-col));

var getRow = function(rowIndex) {
    let row = [];
    for(i=0;i<=rowIndex;i++){
        row.push(getTerm(rowIndex,i));
    }
    return row;
};