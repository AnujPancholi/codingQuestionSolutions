# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
import sys;
class Solution:
    def isValidBSTImpl(self,root,minVal,maxVal) -> bool:
        if(root==None):
            return True;
        return root.val>minVal and root.val<maxVal and self.isValidBSTImpl(root.left,minVal,root.val) and self.isValidBSTImpl(root.right,root.val,maxVal);
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        maxIntVal = sys.maxsize;
        minIntVal = -1*sys.maxsize - 1;
        
        return self.isValidBSTImpl(root,minIntVal,maxIntVal)