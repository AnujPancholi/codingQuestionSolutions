/*
    leetcode
    category: "Algorithms"
    problem title: "Find Common Characters"
*/


/**
 * @param {string[]} A
 * @return {string[]}
 */



const getCharMap = (str) => {
    const baseObj = {};
    for(let i=0;i<str.length;++i){
        if(!baseObj[str[i]]){
            baseObj[str[i]]=1;
        } else{
            ++baseObj[str[i]];
        }
    }
    return baseObj;
}


var commonChars = function(A) {
    // const arrSets = A.map(str => getStringSet(str));
    A.sort((str1,str2) => str1.length-str2.length);
    const mapsArr = A.map(str => getCharMap(str));
    
    const baseChars = A[0].split('');
    
    const countObj = mapsArr[0];
    
    for(let i=1;i<mapsArr.length;++i){
        baseChars.forEach(ch => {
            if(!mapsArr[i][ch]){
                delete countObj[ch];
            } else if(mapsArr[i][ch]<countObj[ch]){
                countObj[ch] = mapsArr[i][ch];
            }
        })
    }
    
    return Object.keys(countObj).reduce((arr,curr) => {
        for(let i=0;i<countObj[curr];++i){
            arr.push(curr);
        }
        return arr;
    },[]);
    
    
};