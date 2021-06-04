# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def getTiltProperties(self,root):
        if root==None:
            return [0,0];
        
        leftTiltProperties = self.getTiltProperties(root.left);
        rightTiltProperties = self.getTiltProperties(root.right);
        
        return [root.val+leftTiltProperties[0]+rightTiltProperties[0],abs(leftTiltProperties[0]-rightTiltProperties[0])+leftTiltProperties[1]+rightTiltProperties[1]];
        
    def findTilt(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        return self.getTiltProperties(root)[1]