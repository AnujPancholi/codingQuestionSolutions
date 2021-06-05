class KthLargest(object):

    def __init__(self, k, nums):
        """
        :type k: int
        :type nums: List[int]
        """
        self.k=k
        self.kheap = []
        heapq.heapify(self.kheap)
        
        for i in nums:
            self.add(i)
        

    def add(self, val):
        """
        :type val: int
        :rtype: int
        """
        heapq.heappush(self.kheap,val)
        if len(self.kheap)>self.k:
                heapq.heappop(self.kheap)
        return self.kheap[0]
        
        


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)