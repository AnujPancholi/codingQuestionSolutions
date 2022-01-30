class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int permLen = s1.length();
        if(permLen>s2.length()){
            return false;
        }
        
        HashMap<Character,Integer> permutationMap = new HashMap<Character,Integer>();
        
        for(int i = 0;i<permLen;++i){
            permutationMap.put(s1.charAt(i),permutationMap.getOrDefault(s1.charAt(i),0)+1);
        }
        
        boolean hasPermutation = false;
        int i = 0,t=0,matchCount=0;
        while(i<s2.length() && matchCount<permLen){
            if(matchCount==0){
                if(permutationMap.containsKey(s2.charAt(i))){
                    int currCount = permutationMap.get(s2.charAt(i));
                    permutationMap.put(s2.charAt(i),currCount - 1);
                    matchCount++;
                    t = i;
                }
                ++i;
            } else {
                int currCount = permutationMap.getOrDefault(s2.charAt(i),0);
                if(currCount>0){
                    permutationMap.put(s2.charAt(i),currCount - 1);
                    matchCount++;
                    ++i;
                } else {
                    permutationMap.put(s2.charAt(t),permutationMap.get(s2.charAt(t)) + 1);
                    --matchCount;
                    ++t;
                }
            }
        }
        
        return matchCount==permLen;
    }
}