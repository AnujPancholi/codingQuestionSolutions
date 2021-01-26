/*
    codesignal
    category: "interview-practice/Arrays"
    problem title: "isCryptSolution"
*/

function getNumFromStr(str: string,cMap: Map<string,string>): string {
    return str.split('').reduce((str2,c) => {
        return `${str2}${cMap.get(c)}`;        
    },'')
   
}


function isCryptSolution(crypt: string[], solution: string[][]): boolean {
    
    const cryptMap: Map<string,string> = solution.reduce((cMap,sol) => {
        cMap.set(sol[0],sol[1]);
        return cMap
    },new Map<string,string>());
    // console.log(cryptMap)
    
    const numStr1 = getNumFromStr(crypt[0], cryptMap);
    const numStr2 = getNumFromStr(crypt[1], cryptMap);
    const numStr3 = getNumFromStr(crypt[2], cryptMap);
    // console.log(numStr1,numStr2,numStr3)
    
    if((numStr1[0]==="0" && numStr1.length>1) || (numStr2[0]==="0" && numStr2.length>1) || (numStr3[0]==="0" && numStr3.length>1)){
        return false;
    }
    
    return parseInt(numStr1)+parseInt(numStr2)===parseInt(numStr3)
    
    

}