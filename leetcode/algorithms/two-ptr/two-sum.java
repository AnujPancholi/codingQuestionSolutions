class Solution {
    private int[] getTwoSum(List<Pair<Integer,Integer>> pairs,int target, int start,int end){
        int[] sol = new int[]{-1,-1};
        while(start<end){
            int sum = pairs.get(start).getKey() + pairs.get(end).getKey();
            if(sum==target){
                sol[0] = pairs.get(start).getValue();
                sol[1] = pairs.get(end).getValue();
                break;
            } else if(sum>target){
                --end;
            } else{
                ++start;
            }
        }
        return sol;
    }
    
    public int[] twoSum(int[] nums, int target) {
        
        List<Pair<Integer,Integer>> pairs = new ArrayList<Pair<Integer,Integer>>(nums.length);
        
        for(int i = 0;i<nums.length;++i){
            pairs.add(i,new Pair<Integer,Integer>(nums[i],i));
        }
        
        Collections.sort(pairs,new Comparator<Pair<Integer,Integer>>(){
            public int compare(Pair<Integer,Integer> p1,Pair<Integer,Integer> p2){
                return p1.getKey() - p2.getKey();
            }
        });
            
        return getTwoSum(pairs, target, 0, nums.length - 1);
    }
}