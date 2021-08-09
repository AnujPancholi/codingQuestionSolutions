function longestPalindrome(s: string): string {
    if(s.length===0){
        return "";
    }
    let i = 0;
    let start=0,end=0;
    while(i<s.length){
        const palinLength = Math.max(
            checkPalindromeFromMiddle(s,i,i),
            checkPalindromeFromMiddle(s,i,i+1)
        )
        if(palinLength>end-start){
            start = i - ~~((palinLength-1)/2);
            end = i + ~~(palinLength/2);
        }
        ++i;
    }
    
    return s.slice(start,end+1);
};


function checkPalindromeFromMiddle(s: string, l: number, h: number): number {
    while(l>=0 && h<s.length && s.charAt(l)===s.charAt(h)){
        l--;
        h++;
    }
    return h-l-1;
}