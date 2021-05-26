# from collections import heapq
class Solution(object):
    def getStoneSmashResult(self,x,y):
        if(y<x):
            x,y = y,x
        return y-x
    
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
        stonesMaxHeap = map(lambda a : a*-1,stones)
        
        heapq.heapify(stonesMaxHeap);
        
        
        while(len(stonesMaxHeap)>1):
            smashResult = self.getStoneSmashResult(-1*heapq.heappop(stonesMaxHeap),-1*heapq.heappop(stonesMaxHeap));
            if(smashResult>0):
                heapq.heappush(stonesMaxHeap,-1*smashResult);
        
        return -1*heapq.heappop(stonesMaxHeap) if len(stonesMaxHeap)>0 else 0