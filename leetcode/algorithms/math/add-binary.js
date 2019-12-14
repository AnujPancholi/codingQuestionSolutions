/*
    leetcode
    category: "Algorithms"
    problem title: "Add Binary"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let i=0,carryOver=0;
    let resultStr = "";
    while(i<Math.max(a.length,b.length)){
        let currentBitA = parseInt(a[a.length-(i+1)] || 0)
        let currentBitB = parseInt(b[b.length-(i+1)] || 0)
        let calcResult = currentBitA+currentBitB+carryOver;
        switch(calcResult){
            case 0:
            case 1:
                resultStr = `${calcResult}${resultStr}`;
                carryOver=0;
                break;
            case 2:
                resultStr = `${"0"}${resultStr}`;
                carryOver=1;
                break;
            case 3:
                resultStr = `${"1"}${resultStr}`;
                carryOver=1;
                break;
        }
        i++;
    }
    if(carryOver===1){
        resultStr = `${"1"}${resultStr}`;
    }
    return resultStr;
};