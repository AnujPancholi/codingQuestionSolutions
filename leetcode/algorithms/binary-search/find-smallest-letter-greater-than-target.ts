/*
    leetcode
    category: "Algorithms"
    problem title: "Find Smallest Letter Greater Than Target"
*/

function nextGreatestLetter(letters: string[], target: string): string {
    letters = Array.from(new Set(letters)).sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
    // console.log(letters);
    let low: number = 0, high: number = letters.length-1;
    if(target>letters[letters.length-1]){
        return letters[0];
    }
    let resultLetter = "";
    while(high-low>1){
        let mid: number = Math.floor((high+low)/2);
        if(letters[mid]===target){
            resultLetter = letters[(mid+1)%letters.length];
            break;
        } else if (letters[mid]>target){
            high=mid;
        } else {
            low=mid;
        }
    }
    
    if(resultLetter===""){
        if(letters[low]>target){
            resultLetter = letters[low];
        } else if (letters[high]<=target){
            resultLetter = letters[(high+1)%letters.length]
        } else {
            resultLetter = letters[high];
        }
    }
    
    return resultLetter;

};