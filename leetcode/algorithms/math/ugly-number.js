/*
    leetcode
    category: "Algorithms"
    problem title: "Ugly Number"
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num===0){
        return false;
    }
    const uglyPrimeFactors = [5,3,2];
    for(let i=0;i<uglyPrimeFactors.length;i++){
        let p=1;
        while(num%Math.pow(uglyPrimeFactors[i],p)===0){
            ++p;
        }
        num = num/Math.pow(uglyPrimeFactors[i],p-1);
        if(num===1){
            return true;
        }
    }
    return false;
    
};