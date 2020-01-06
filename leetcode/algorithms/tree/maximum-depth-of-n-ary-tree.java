/*
    leetcode
    category: "Algorithms"
    problem title: "Maximum Depth of N-ary Tree"
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
    private int getMaxHeight(List<Node> nodes){
        if(nodes.size()==0){
            return 1;
        }
        int intermediateMax=0;
        for(Node n : nodes){
            int candidateMax = getMaxHeight(n.children);
            if(candidateMax>intermediateMax){
                intermediateMax=candidateMax;
            }
        }
        return 1+intermediateMax;
    
    }
    
    public int maxDepth(Node root) {
        if(root==null){
            return 0;
        }
        return getMaxHeight(root.children);
    }
}