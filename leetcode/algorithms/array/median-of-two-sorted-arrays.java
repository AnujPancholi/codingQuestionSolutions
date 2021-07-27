class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        int n=0,findex=0,sindex=0;
        int halfLength = (nums1.length + nums2.length)/2;
        int lastElem = -1,secondLastElem=-1;
        
        while(n<=halfLength){
                if(findex==nums1.length){
                    while(n<=halfLength){
                        secondLastElem = lastElem;
                        lastElem = nums2[sindex];
                        sindex++;
                        ++n;
                    }
                    break;
                }
            if(sindex==nums2.length){
                    while(n<=halfLength){
                        secondLastElem = lastElem;
                        lastElem = nums1[findex];
                        findex++;
                        ++n;
                    }
                    break;
                }
            if(nums1[findex]<=nums2[sindex]){
                secondLastElem = lastElem;
                lastElem = nums1[findex];
                findex++;
            } else {
                
                secondLastElem = lastElem;
                lastElem = nums2[sindex];
                sindex++;
            }
            ++n;
        }
        return (nums1.length+nums2.length)%2==0 ? ((double)(secondLastElem+lastElem))/2 : lastElem;
        
    }
}