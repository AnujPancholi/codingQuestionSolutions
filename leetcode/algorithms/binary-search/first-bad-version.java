/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int fbvn = -1,l=1,h=n;
        while(h>=l){
            int m = l + ((h-l)/2);
            
            if(isBadVersion(m)){
               if(!isBadVersion(m-1)){
                   fbvn = m;
                   break;
               } else {
                   h = m-1;
               }
            } else {
                l = m+1;
            }
            
        }
        
        return fbvn;
    }
}