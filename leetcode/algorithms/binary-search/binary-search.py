"""
    leetcode
    category: "Algorithms"
    problem title: "Binary Search"
"""

class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        low=0
        high=len(nums)-1
        targetIndex=-1
        while high-low>1:
            mid=int(math.floor((high+low)/2));
            if nums[mid]==target:
                targetIndex=mid
                break
            elif nums[mid]<target:
                low=mid
            else:
                high=mid
        
        if nums[low]==target:
            targetIndex=low
        elif nums[high]==target:
            targetIndex=high
        
        return targetIndex