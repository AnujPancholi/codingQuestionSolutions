/*
    leetcode
    category: "Algorithms"
    problem title: "N-ary Tree Level Order Traversal"
*/

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    
    private int getHeight(Node root){
        if(root==null){
            return 0;
        }
        int maxHeightOfChildren = 0;
        for(Node child : root.children){
            maxHeightOfChildren = Math.max(maxHeightOfChildren,getHeight(child));
        }
        return 1+maxHeightOfChildren;
    }
    
    private void populateLevelCounts(Node node,int level,List<List<Integer>> levelCounts){
        if(node==null){
            return;
        }
        levelCounts.get(level).add(node.val);
        
        for(Node child : node.children){
            populateLevelCounts(child,level+1,levelCounts);
        }
        
    }
    
    public List<List<Integer>> levelOrder(Node root) {
        
        List<List<Integer>> levelCounts = new ArrayList<List<Integer>>();
        
        int height = getHeight(root);
        
        // System.out.println(height);
        
        for(int i=0;i<height;++i){
            levelCounts.add(new ArrayList<Integer>());
        }
        
        
        populateLevelCounts(root,0,levelCounts);
        
        
        return levelCounts;
        
        
    }
}