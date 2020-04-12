/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Zero Sum Consecutive Nodes From Linked List"
*/


    //working on improved solution for this


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    private void printList(ListNode head){
        ListNode p = head;
        while(p!=null){
            System.out.print(Integer.toString(p.val)+"->");
        }
        System.out.print('\n');
    }
    public ListNode removeZeroSumSublists(ListNode head) {
        int requiredStart=0;
        while(requiredStart!=-2){
            requiredStart=-2;
            HashMap<Integer,Integer> sumToIndexMap = new HashMap<Integer,Integer>();
            ListNode walker = head;
            int index=0,cumulativeSum=0;
            int requiredEnd=-1;
            while(walker!=null){
                cumulativeSum+=walker.val;
                Integer indexForSumInteger = sumToIndexMap.get(cumulativeSum);
                if(indexForSumInteger!=null){
                    requiredStart = indexForSumInteger.intValue();
                    requiredEnd = index;
                    break;
                } else if(cumulativeSum==0){
                    requiredStart=-1;
                    break;
                } else {
                    sumToIndexMap.put(cumulativeSum,index);
                }
                ++index;
                walker = walker.next;
            }
            if(requiredStart>=0){
                index=0;
                ListNode lastNode = walker;
                walker=head;
                while(index<requiredStart){
                    walker=walker.next;
                    ++index;
                }
                walker.next = lastNode.next;
            } else if(requiredStart==-1){
                head=walker.next;
            }   
        }
        return head;
        
    }
}