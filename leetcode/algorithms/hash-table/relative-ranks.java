/*
    leetcode
    category: "Algorithms"
    problem title: "Relative Ranks"
*/

class Solution {
    public String[] findRelativeRanks(int[] nums) {
        int[] sortedScores = new int[nums.length];
        int[] positions = new int[nums.length];
        Integer[] sortedIntegersArray = new Integer[nums.length];
        
        HashMap<Integer,ArrayList<Integer>> scoreToIndicesMap = new HashMap<Integer,ArrayList<Integer>>();
        
        for(int i=0;i<nums.length;++i){
            sortedIntegersArray[i]=nums[i];
            ArrayList<Integer> scoreList = scoreToIndicesMap.get(nums[i]);
            if(scoreList==null){
                scoreList = new ArrayList<Integer>();
                scoreList.add(i);
                scoreToIndicesMap.put(nums[i],scoreList);
            } else {
                scoreList.add(i);
            }
        }
        
        Arrays.sort(sortedIntegersArray,Collections.reverseOrder());
        for(int i=0;i<sortedIntegersArray.length;++i){
            sortedScores[i] = sortedIntegersArray[i].intValue();
        }
        
        String[] ansArr = new String[positions.length];
        
        for(int i=0;i<nums.length;++i){
            ArrayList<Integer> indicesList = scoreToIndicesMap.get(sortedScores[i]);
            positions[i]=indicesList.get(0);
            indicesList.remove(0);
            StringBuilder sb = new StringBuilder("");
            switch(i){
                case 0:
                    sb.append("Gold Medal");
                    break;
                case 1:
                    sb.append("Silver Medal");
                    break;
                case 2:
                    sb.append("Bronze Medal");
                    break;
                default:
                    sb.append(Integer.toString(i+1));
                    break;
            }
            ansArr[positions[i]]=sb.toString();
            
        }
        
        return ansArr;
        
    }
}