/*
    leetcode
    category: "Algorithms"
    problem title: "Bulls and Cows"
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
    let bullIndices = new Set();
    let bulls=0,cows=0;
    for(let i=0;i<secret.length;i++){
        if(secret[i]===guess[i]){
            bulls++;
            bullIndices.add(i);
        }
    }
    secret = secret.split("").filter((num,index) => !bullIndices.has(index));
    guess = guess.split("").filter((num,index) => !bullIndices.has(index));
    let cowIterations = secret.length;
    for(let i=0;i<cowIterations;i++){
        let secretIndex = secret.indexOf(guess[i]);
        if(secretIndex>-1){
            cows++;
            secret.splice(secretIndex,1);
        }
    }
    
    return `${bulls}A${cows}B`;
    
};