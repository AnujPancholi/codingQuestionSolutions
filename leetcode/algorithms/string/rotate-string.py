class Solution(object):
    def rotateString(self, s, goal):
        """
        :type s: str
        :type goal: str
        :rtype: bool
        """
        
        return len(s)==len(goal) and goal in "".join([s,s])
        