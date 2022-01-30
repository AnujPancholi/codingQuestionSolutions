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
        int i = 0;
        while(i<s2.length() && !hasPermutation){
            
            if(permutationMap.containsKey(s2.charAt(i))){
                int currWindowChar = i;
                HashMap<Character,Integer> currMap = (HashMap<Character,Integer>)permutationMap.clone();
                int matchCount = 0;
                hasPermutation = true;
                while(i<s2.length() && matchCount<permLen){
                    int currCount = currMap.getOrDefault(s2.charAt(i),0);
                    if(currCount==0){
                        if(permutationMap.containsKey(s2.charAt(i))){
                            int updatedCount = currMap.getOrDefault(s2.charAt(currWindowChar),0) - 1;
                            if(updatedCount<0){
                                hasPermutation = false;
                                break;
                            }
                            currMap.put(s2.charAt(currWindowChar),updatedCount);
                            currMap.put(s2.charAt(i),currMap.getOrDefault(s2.charAt(i),0) + 1);
                            currWindowChar++;
                            ++i;
                        } else {
                            hasPermutation = false;
                            break;
                        }
                    } else { 
                        currMap.put(s2.charAt(i),currCount-1);
                        ++matchCount;
                        ++i;
                    }
                }
                hasPermutation = matchCount==permLen;
                i = currWindowChar +1;
            } else {
                ++i;
            }
            
        }
        
        return hasPermutation;
    }
}