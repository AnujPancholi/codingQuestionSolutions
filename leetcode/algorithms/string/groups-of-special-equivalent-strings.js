/*
    leetcode
    category: "Algorithms"
    problem title: "Groups of Special Equivalent Strings"
*/

/**
 * @param {string[]} A
 * @return {number}
 */

const SpecialString = function(str) {
    this.str = str;
    this.evenCharsMap = {};
    this.oddCharsMap = {};
    this.str.split('').forEach((c,index) => {
        if(index%2===0){
            if(!this.evenCharsMap[c]){
                this.evenCharsMap[c]=1;
            } else {
                ++this.evenCharsMap[c];
            }
        } else {
            if(!this.oddCharsMap[c]){
                this.oddCharsMap[c]=1;
            } else {
                ++this.oddCharsMap[c];
            }
        }
    })
}

const getSpecialEquivalance = (sp1,sp2) => {
    let isSpecialEquivalentPair = true;
    for(let m=0;m<2;++m){
        const mapName = m===0 ? "evenCharsMap" : "oddCharsMap";
        const map1 = sp1[mapName],map2 = sp2[mapName];
        let map1Keys = Object.keys(map1);
        if(map1Keys.length!=Object.keys(map2).length){
            isSpecialEquivalentPair=false;
            break;
        }
        for(let i=0;i<map1Keys.length;++i){
            if(!map2[map1Keys[i]] || map1[map1Keys[i]]!=map2[map1Keys[i]]){
                isSpecialEquivalentPair=false;
                break;
            }
        }
        if(!isSpecialEquivalentPair){
            break;
        }
        
    }
    return isSpecialEquivalentPair;
}

var numSpecialEquivGroups = function(A) {
    const specialEqGroups = {};
    for(let i=0;i<A.length;++i){
        let currentSpecialString = new SpecialString(A[i]);
        let isGrouped = false;
        Object.keys(specialEqGroups).forEach(str => {
            let grp = specialEqGroups[str];
            if(getSpecialEquivalance(currentSpecialString,grp.anchorSpecialString)){
                grp.strings.push(A[i]);
                isGrouped=true;
            }
        })
        if(!isGrouped){
            specialEqGroups[A[i]] = {
                anchorSpecialString: currentSpecialString,
                strings: [A[i]]
            }
        }
    }
    
    return Object.keys(specialEqGroups).length;
    
};