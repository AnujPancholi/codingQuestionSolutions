/*
    leetcode
    category: "Algorithms"
    problem title: "Merge K Sorted Lists"
*/


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class MinHeapIntegerComparator implements Comparator<Integer> {
    public int compare(Integer i1, Integer i2){
        return i1-i2;
    }
}

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>(new MinHeapIntegerComparator());
        for(ListNode headNode : lists){
            ListNode wNode = headNode;
            while(wNode!=null){
                minHeap.add(wNode.val);
                wNode=wNode.next;
            }
        }
        ListNode head = null,tail = null;
        while(minHeap.size()>0){
            ListNode newNode = new ListNode(minHeap.poll());
            if(head==null){
                head=newNode;
                tail=newNode;
            } else{
                tail.next = newNode;
                tail = newNode;
            }
        }
        return head;
    }
}