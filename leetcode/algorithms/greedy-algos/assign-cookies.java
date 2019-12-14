/*
    leetcode
    category: "Algorithms"
    problem title: "Assign Cookies"
*/


class Solution {
    
    private int getNearestCookieIndex(ArrayList<Integer> arr, int greed){
        int low=0,high=arr.size()-1;
        int med;
        
        while((high-low)>1){
            med=(int)((high+low)/2);
            if(arr.get(med).intValue()==greed){
                arr.remove(med);
                return med;
            } else if(arr.get(med).intValue()<=greed){
                low=med;
            } else {
                high=med;
            }
        }
        
        if(arr.get(high)>=greed){
            arr.remove(high);
            return high;
        }
        if(high<arr.size()-1){
            arr.remove(high+1);
            return high+1;
        } else {
            return -1;
        }
    }
    
    public int findContentChildren(int[] g, int[] s) {
        if(s.length==0){
            return 0;
        }
        Arrays.sort(g);
        Arrays.sort(s);

        ArrayList<Integer> cookieList = new ArrayList<Integer>();
        for(int i=0;i<s.length;++i){
            cookieList.add(s[i]);
        }
        
        int satCount=0;
        
        for(int i=g.length-1;i>=0 && cookieList.size()>0;i--){
            int cookieDrawResponse = getNearestCookieIndex(cookieList,g[i]);
            if(cookieDrawResponse!=-1){
                ++satCount;
            }
        }
        return satCount;
    }
}