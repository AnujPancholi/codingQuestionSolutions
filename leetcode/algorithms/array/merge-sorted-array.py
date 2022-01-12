class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        
        nums3 = [];
        m0=0;
        n0=0;
        for i in range(m+n):
            if(n0==n):
                nums3.extend(nums1[m0:m]);
                break;
            elif(m0==m):
                nums3.extend(nums2[n0:n]);
                break;
            if(nums2[n0]<=nums1[m0]):
                nums3.append(nums2[n0])
                n0=n0+1;
            else:
                nums3.append(nums1[m0]);
                m0=m0+1;
        for i in range(m+n):
            nums1[i] = nums3[i];