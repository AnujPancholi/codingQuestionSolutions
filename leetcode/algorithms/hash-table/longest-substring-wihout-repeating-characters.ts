function lengthOfLongestSubstring(s: string): number {
    
    const charIndexMap = new Map<string,number>();
    let maxLen = 0,currStartIndex = 0;
    for(let i = 0;i<s.length;++i){
        const ch: string = s.charAt(i);
        const currCharIndex = charIndexMap.get(ch) ?? null;
        if(currCharIndex!==null && currCharIndex>=currStartIndex){
            currStartIndex = currCharIndex + 1;
        } else {
            maxLen = Math.max(maxLen,i - currStartIndex + 1);
        }
        charIndexMap.set(ch,i);
    }
    
    return maxLen;
    
};