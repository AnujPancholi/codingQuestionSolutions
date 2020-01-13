/*
    leetcode
    category: "Algorithms"
    problem title: "Intersection of two Arrays"
*/

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        HashSet<Integer> firstSet = new HashSet<Integer>();
        HashSet<Integer> secondSet = new HashSet<Integer>();
        for(int num : nums1){
            firstSet.add(num);
        }
        
        List<Integer> intersectionList = new ArrayList<Integer>();
        
        for(int num : nums2){
            if(firstSet.contains(num) && !secondSet.contains(num)){
                intersectionList.add(num);
            }
            secondSet.add(num);
        }
        
        int[] intersection = new int[intersectionList.size()];
        
        int c=0;
        for(Integer item : intersectionList){
            intersection[c]=item.intValue();
            ++c;
        }
        
        return intersection;
        
    }
}