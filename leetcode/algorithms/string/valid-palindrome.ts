/*
    leetcode
    category: "Algorithms"
    problem title: "Valid Palindrome"
*/


function isPalindrome(s: string): boolean {
    const sBuilder: string[] = [];
    for(let c: number = 0;c<s.length;++c){
        const currchar: string = s.charAt(c).toLowerCase();
        if(currchar.match(/[a-z0-9]/)){
            sBuilder.push(currchar);
        }
    }
    
    let i: number = 0
    let isPalin: boolean = true;
    while(i<Math.floor(sBuilder.length/2)){
        if(sBuilder[i]!==sBuilder[sBuilder.length-(i+1)]){
            isPalin=false;
            break;
        }
        ++i;
    }
    return isPalin;

};