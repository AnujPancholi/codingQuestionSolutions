/*
    leetcode
    category: "Algorithms"
    problem title: "Group Anagrams"
*/

function getKey(str: string): string{
    return str.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0)).join('');
}

function groupAnagrams(strs: string[]): string[][] {
    const groupsMap: Map<string,string[]> = strs.reduce((strMap,str) => {
        const key: string = getKey(str);
        strMap.set(key,(strMap.get(key) || []).concat(str));
        return strMap;
    },new Map<string,string[]>());
    
    const strGroups: string[][] = [];
    groupsMap.forEach((val,key) => {
        strGroups.push(val);
    })
    return strGroups;
};