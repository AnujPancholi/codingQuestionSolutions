/*
    leetcode
    category: "Algorithms"
    problem title: "Long Pressed Name"
*/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

//I wrote this late at night when I was tired, just to keep up with my goal. May be sloppy/inefficient.

var getCharTrain = (str) => {
    let charTrain = [],index=-1;
    for(let i=0;i<str.length;++i){
        if(i!=0 && str[i]===str[i-1]){
            charTrain[index].count++;
        } else {
            ++index;
            charTrain.push({
                letter: str[i],
                count: 1
            });
        }
    }
    return charTrain;
}

var isLongPressedName = function(name, typed) {
    const nameCharTrain = getCharTrain(name);
    const typedCharTrain = getCharTrain(typed);
    
    if(nameCharTrain.length!=typedCharTrain.length){
        return false;
    }
    
    for(let i=0;i<typedCharTrain.length;++i){
        if(typedCharTrain[i].letter!=nameCharTrain[i].letter || typedCharTrain[i].count<nameCharTrain[i].count){
            return false;
        }
    }
    return true;
};