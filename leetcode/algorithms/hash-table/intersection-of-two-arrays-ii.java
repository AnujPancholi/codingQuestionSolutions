/*
    leetcode
    category: "Algorithms"
    problem title: "Intersection of Two Arrays II"
*/

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer,Integer> firstMap = new HashMap<Integer,Integer>();
        HashMap<Integer,Integer> secondMap = new HashMap<Integer,Integer>();
        
        for(int i=0;i<Math.max(nums1.length,nums2.length);++i){
            if(i<nums1.length){
                Integer currentInt = firstMap.get(nums1[i]);
                if(currentInt==null){
                    firstMap.put(nums1[i],1);
                } else {
                    firstMap.put(nums1[i],currentInt.intValue()+1);
                }
            }
            
            if(i<nums2.length){
                Integer currentInt = secondMap.get(nums2[i]);
                if(currentInt==null){
                    secondMap.put(nums2[i],1);
                } else {
                    secondMap.put(nums2[i],currentInt.intValue()+1);
                }
            }
        }
        
        
        List<Integer> solList = new ArrayList<Integer>();
        for(Map.Entry<Integer,Integer> fEnt : firstMap.entrySet()){
            Integer sCount = secondMap.get(fEnt.getKey());
            if(sCount!=null){
                for(int i=0;i<Math.min(fEnt.getValue().intValue(),sCount.intValue());++i){
                    solList.add(fEnt.getKey());
                }
            }
        }
        
        int[] solArr = new int[solList.size()];
        int j=0;
        for(Integer solItem : solList){
            solArr[j++] = solItem.intValue();
        }
        
        return solArr;
    }
}