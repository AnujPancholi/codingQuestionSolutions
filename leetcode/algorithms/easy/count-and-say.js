/*
    leetcode
    category: "Algorithms"
    problem title: "Count And Say"
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let cnsArray = ["1"];
    if(n===1){
        return "1";
    }
    for(let i=1;i<n;i++){
        let newArr = [],currentChar,currentCount;
        let c=0;
        while(c<cnsArray.length){
            currentChar = cnsArray[c],currentCount=1;
            let d=c+1;
            while(cnsArray[d]===currentChar && d<cnsArray.length){
                d++;
                currentCount++;
            }
            c=d;
            newArr.push(...[(currentCount).toString(),currentChar]);
        }
        cnsArray = newArr;
    }
    return cnsArray.join('');
};