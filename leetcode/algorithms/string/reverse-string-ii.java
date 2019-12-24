/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse String II"
*/

class Solution {
    private String getReverse(String s){
        if(s.length()==1){
            return s;
        }
        StringBuilder reverseBuilder = new StringBuilder("");
        for(int i=s.length()-1;i>=0;--i){
            reverseBuilder.append(Character.toString(s.charAt(i)));            
        }
        return reverseBuilder.toString();
    }
    public String reverseStr(String s, int k) {
        StringBuilder revStrBuilder = new StringBuilder("");
        int changeIndex = 0;
        while(s.length()-changeIndex>2*k){
            revStrBuilder.append(getReverse(s.substring(changeIndex,changeIndex+k)));
            revStrBuilder.append(s.substring(changeIndex+k,changeIndex+k+k));
            if((changeIndex+(2*k))<s.length()){
                changeIndex+=2*k;
            } else {
                changeIndex+=k;
            }
        }
        // System.out.println(Integer.toString(changeIndex));
        if(changeIndex<=s.length()-1){
            revStrBuilder.append(getReverse(s.substring(changeIndex,Math.min(changeIndex+s.length()-changeIndex,changeIndex+k))));
        }
        changeIndex+=k;
        if(changeIndex<s.length()){
            revStrBuilder.append(s.substring(changeIndex,s.length()));
        }
        
        return revStrBuilder.toString();
        
    }
}