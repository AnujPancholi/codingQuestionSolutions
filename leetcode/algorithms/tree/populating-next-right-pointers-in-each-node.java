/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    
    private List<List<Node>> bfsImpl(Node root) {
        
        if(root==null){
            return new ArrayList<List<Node>>();
        }
        
        Queue<Pair<Node,Integer>> queue = new LinkedList<Pair<Node,Integer>>();
        ArrayList<List<Node>> loList = new ArrayList<List<Node>>();
        
        queue.add(new Pair<Node,Integer>(root,0));
        
        while(!queue.isEmpty()){
            Pair<Node,Integer> currPair = queue.poll();
            
            Node curr = currPair.getKey();
            Integer level = currPair.getValue();
            
            if(curr.left!=null)queue.add(new Pair<Node,Integer>(curr.left,level+1));
            if(curr.right!=null)queue.add(new Pair<Node,Integer>(curr.right,level+1));
            
            if(level==loList.size()){
                loList.add(new ArrayList<Node>(Arrays.asList(curr)));
            } else {
                loList.get(level).add(curr);
            }
        }
        
        return loList;
    }
    
    public Node connect(Node root) {
        
        List<List<Node>> bfsList = bfsImpl(root);
        
        // System.out.println(bfsList);
        
        for(List<Node> levelList : bfsList){
            for(int i = 0;i<levelList.size();++i){
                // System.out.println(levelList.get(i).val);
                levelList.get(i).next = (i==levelList.size()-1) ? null : levelList.get(i+1); 
            }
        }
        
        return root;
        
        
    }
}