# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def getHeight(self,root):
        if root==None:
            return 0;
        return 1 + max(self.getHeight(root.left),self.getHeight(root.right))
    
    def populateLevel(self, root, levelIndex, level):
        if root==None:
            return;
        level[levelIndex].append(root.val);
        self.populateLevel(root.left, levelIndex + 1,level);
        self.populateLevel(root.right,levelIndex + 1,level);
    
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        
        treeHeight = self.getHeight(root);
        
        level = [[] for i in range(treeHeight)];
        
        self.populateLevel(root,0,level)
        
        return level;