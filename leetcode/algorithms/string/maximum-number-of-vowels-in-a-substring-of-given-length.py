"""
    leetcode
    category: "Algorithms"
    problem title: "Maximum Number of Vowels in a Substring of Given Length"
"""


class Solution(object):
    def maxVowels(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        
        vowelSet = {'a','e','i','o','u'}
        
        currCount=0
        maxCount=0
        i=0
        j=k-1;
        
        c=0
        
        for c in range(0,k):
            if s[c] in vowelSet:
                currCount=currCount+1
                maxCount=maxCount+1
        
        
        while(j<len(s)-1):
            if s[i] in vowelSet:
                currCount=currCount-1
            i=i+1
            j=j+1
            if s[j] in vowelSet:
                currCount=currCount+1
            if currCount>maxCount:
                maxCount=currCount
            
                
        return maxCount
        
        