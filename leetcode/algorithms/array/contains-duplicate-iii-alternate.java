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
        // int[] sortedNums = (Integer[])numList.toArray();
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
    
    private boolean isCloseElementFound(int elem,List<Integer> list,int k){
        boolean isClose = false;
        int l = 0,h = list.size()-1;
        while(l<=h){
            int m = l + ((h - l)/2);
            int midElem = list.get(m);
            int absDiff = Math.abs(elem - midElem);
            if(absDiff<=k && elem!=midElem){
                isClose = true;
                break;
            } else if(elem<list.get(m)){
                h = m - 1;
            } else {
                l = m + 1;
            }
        }
        
        return isClose;
    }
    
    
    private boolean isNumsClose(List<Integer> l1,List<Integer> l2,int k){
        boolean isclose = false;
        int listSize = l1.size();
        for(int i = 0;i<listSize && !isclose;++i){
            isclose = isCloseElementFound(l1.get(i),l2,k);
        }
        return isclose;
    }
    
    private boolean isIndicesClose(List<Integer> list,int k){
        boolean isClose = false;
        int listSize = list.size();
        for(int i = 0;i<listSize-1 && !isClose;++i){
            isClose = (list.get(i+1) - list.get(i)) <= k;
        }
        return isClose;
    }
    
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        
        HashMap<Integer,List<Integer>> numIndexMap = getNumIndexMap(nums);
        
        // System.out.println(numIndexMap);
        
        int[] sortedNums = getSortedArrayCopy(nums);
        
        // printArr(sortedNums);
        int l=0,h=0;
        boolean containsNad = false;
        while(!containsNad && h<sortedNums.length){
            long diff = (long)sortedNums[h]-(long)sortedNums[l];
            if(diff<=(long)t){
                containsNad = diff==0 ? isIndicesClose(numIndexMap.get(sortedNums[l]),k) : isNumsClose(numIndexMap.get(sortedNums[l]),numIndexMap.get(sortedNums[h]),k);
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