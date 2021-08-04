# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if(root==None):
            return [];
        
        qu = [];
        lot = [];
        
        qu.append({
            "level": 0,
            "node": root
        });
        
        level=0;
        
        
        while(len(qu)>0):
            item = qu.pop(0);
            if(item["node"].left!=None):
                qu.append({
                    "level": item["level"]+1,
                    "node": item["node"].left
                })
            if(item["node"].right!=None):
                qu.append({
                    "level": item["level"]+1,
                    "node": item["node"].right
                })
            if(len(lot)<=item["level"]):
                lot.append([item["node"].val])
            else:
                lot[item["level"]].append(item["node"].val);
            
        return lot