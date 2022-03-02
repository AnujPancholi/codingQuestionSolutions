class Solution {
    private int[] getSortedArrayCopy(int[] nums){
        HashSet<Integer> numSet = new HashSet<Integer>();
        List<Integer> numList = new ArrayList<Integer>();
        for(int n : nums){
            if(!numSet.contains(n)){
                numList.add(n);
                numSet.add(n);
            }
        }
        int[] sortedNums = new int[numList.size()];
        for(int i = 0;i<numList.size();++i){
            sortedNums[i] = numList.get(i);
        }
        Arrays.sort(sortedNums);
        return sortedNums;
    }
    
    // private void printArr(int[] nums){
    //     for(int n : nums){
    //         System.out.print(Integer.toString(n)+" ");
    //     }
    //     System.out.print("\n");
    // }
    
    private HashMap<Integer,List<Integer>> getNumIndexMap(int[] nums){
        HashMap<Integer,List<Integer>> numIndexMap = new HashMap<Integer,List<Integer>>();
        for(int i = 0;i<nums.length;++i){
            int n = nums[i];
            List<Integer> existingList = numIndexMap.getOrDefault(n,null);
            if(existingList==null){
                numIndexMap.put(n,new ArrayList<Integer>(Arrays.asList(i)));
            } else {
                existingList.add(i);
            }
        }
        return numIndexMap;
    }
    
    private boolean isNumsClose(List<Integer> l1,List<Integer> l2,int k){
        boolean isclose = false;
        for(int i = 0;i<l1.size() && !isclose;++i){
            for(int j = 0;j<l2.size() && !isclose;++j){
                if(l1.get(i)!=l2.get(j) && Math.abs(l1.get(i) - l2.get(j))<=k){
                    isclose = true;
                }
            }   
        }
        return isclose;
    }
    
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        
        HashMap<Integer,List<Integer>> numIndexMap = getNumIndexMap(nums);
        
        int[] sortedNums = getSortedArrayCopy(nums);
        
        int l=0,h=0;
        boolean containsNad = false;
        while(!containsNad && h<sortedNums.length){
            if((long)sortedNums[h]-(long)sortedNums[l]<=(long)t){
                containsNad = isNumsClose(numIndexMap.get(sortedNums[l]),numIndexMap.get(sortedNums[h]),k);
                if(containsNad){
                    break;
                }
                if(h-l>1){
                    ++l;
                } else {
                    ++h;
                }
            } else {
                ++l;
                if(l>h){
                    ++h;
                }
            }
        }
        
        return containsNad;
    }
}