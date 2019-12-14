/*
    leetcode
    category: "Algorithms"
    problem title: "Pascal's Triangle"
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const factorial = (num) => num===0 ? 1 : num*factorial(num-1);

const calculateTerm = (row,col) => {
    return (factorial(row)/(factorial(col)*factorial(row-col)));
}
var generate = function(numRows) {
    let pascalTriangle = [];
    for(let i=0;i<numRows;i++){
        let j=0;
        let currentRow = [];
        while(j<=i){
            currentRow.push(calculateTerm(i,j));
            j++;
        }
        pascalTriangle.push(currentRow);
    }
    return pascalTriangle;
    
};