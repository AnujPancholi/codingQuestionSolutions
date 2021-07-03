# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        headNode = None;
        tailNode = None;
        elementsHeap = [];
        heapq.heapify(elementsHeap)
        for index,lis in enumerate(lists):
            while(lis!=None):
                heapq.heappush(elementsHeap,lis.val);
                lis = lis.next;
        
        headNode = None
        tailNode = None
        while len(elementsHeap)>0:
            freshNode = ListNode(heapq.heappop(elementsHeap));
            if headNode==None:
                headNode = freshNode;
                tailNode = freshNode;
            else:
                tailNode.next = freshNode;
                tailNode = freshNode;
            
        
        return headNode;
        