/*
    leetcode
    category: "Algorithms"
    problem title: "Find Smallest Letter Greater Than Target"
*/

function nextGreatestLetter(letters: string[], target: string): string {
    
    let currLetter: string = "",resultLetter: string = "";
    
    for(let i: number = 0;i<letters.length;++i){
        if(letters[i]!==currLetter){
            currLetter = letters[i];
            if(currLetter>target){
                resultLetter = currLetter;
                break;
            }
        }
    }
    
    return resultLetter==="" ? letters[0] : resultLetter;

};