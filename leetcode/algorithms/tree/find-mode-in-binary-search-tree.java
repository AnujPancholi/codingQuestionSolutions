/*
    leetcode
    category: "Algorithms"
    problem title: "Find Mode in Binary Search Tree"
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    
    private void addCountsFromNode(TreeNode node, HashMap<Integer,Integer> cMap){
        if(node==null){
            return;
        }
        System.out.println(cMap.get(node.val));
        Integer currentCountObj = cMap.get(node.val);
        
        int currentCount;
        if(currentCountObj==null){
            currentCount=1;
        } else {
            currentCount = currentCountObj.intValue()+1;
        }
        cMap.put(node.val,currentCount);
        
        addCountsFromNode(node.left,cMap);
        addCountsFromNode(node.right,cMap);
    }
    
    public int[] findMode(TreeNode root) {
        HashMap<Integer,Integer> countMap = new HashMap<Integer,Integer>();
        addCountsFromNode(root,countMap);
        
        int modeCount=Integer.MIN_VALUE;
        ArrayList<Integer> modes = new ArrayList<Integer>();
        for(Integer elem : countMap.keySet()){
            int currentCount = countMap.get(elem);
            if(currentCount>modeCount){
                modeCount=currentCount;
                modes.clear();
                modes.add(elem);
            } else if(currentCount==modeCount){
                modes.add(elem);
            }
        }
        int[] modesArr = new int[modes.size()];
        for(int i=0;i<modes.size();i++){
            modesArr[i] = modes.get(i).intValue();
        }
        return modesArr;
    }
}