# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        
        prev = None;
        curr = head;
        nxt = None;
        
        while(curr!=None):
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        
        return prev;
        