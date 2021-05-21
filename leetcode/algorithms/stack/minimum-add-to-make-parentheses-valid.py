from collections import deque
class Solution(object):
    def minAddToMakeValid(self, s):
        """
        :type s: str
        :rtype: int
        """
        parenStack = deque();
        
        for ch in list(s):
            if parenStack and parenStack[-1]=="(" and ch==")":
                parenStack.pop();
            else:
                parenStack.append(ch);
        
        return len(parenStack)
        