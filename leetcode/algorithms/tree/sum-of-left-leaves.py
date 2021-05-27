# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isLeafNode(self,root):
        return root!=None and root.left==None and root.right==None
    def sumOfLeftLeaves(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        
        if root==None:
            return 0;
        
        
        return  (root.left.val if self.isLeafNode(root.left) else self.sumOfLeftLeaves(root.left)) + self.sumOfLeftLeaves(root.right);