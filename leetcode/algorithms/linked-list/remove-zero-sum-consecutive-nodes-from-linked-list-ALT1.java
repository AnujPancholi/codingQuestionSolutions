/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Zero Sum Consecutive Nodes From Linked List"
*/

    //two-way mapping approach, fater solution, albiet a little heavier on memory

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

class TwoWayIntegerMapping {
    private HashMap<Integer,Integer> keyToValueMap = new HashMap<Integer,Integer>();
    private HashMap<Integer,Integer> valueToKeyMap = new HashMap<Integer,Integer>();
    
    public void addKeyValuePair(Integer key,Integer value){
        keyToValueMap.put(key,value);
        valueToKeyMap.put(value,key);
    }
    
    public Integer getValue(Integer key){
        return keyToValueMap.get(key);
    }
    
    public Integer getKey(Integer value){
        return valueToKeyMap.get(value);
    }
    
    public boolean removeByKey(Integer key){
        Integer value = keyToValueMap.get(key);
        if(value==null){
            return false;
        }
        keyToValueMap.remove(key);
        valueToKeyMap.remove(value);
        return true;
    }
    
    public boolean removeByValue(Integer value){
        Integer key = valueToKeyMap.get(value);
        if(key==null){
            return false;
        }
        valueToKeyMap.remove(value);
        keyToValueMap.remove(key);
        return true;
    }
    
    public boolean clear(){
        keyToValueMap.clear();
        valueToKeyMap.clear();
        return true;
    }
}


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
            requiredStart=-2;
            TwoWayIntegerMapping sumToIndexMap = new TwoWayIntegerMapping();
            sumToIndexMap.addKeyValuePair(0,-1);
            ListNode walker = head;
            int index=0,cumulativeSum=0;
            
            while(walker!=null){
                cumulativeSum+=walker.val;
                Integer indexOfCumulativeSum = sumToIndexMap.getValue(cumulativeSum);
                if(indexOfCumulativeSum!=null){
                    int splitIndex = indexOfCumulativeSum.intValue();
                    ListNode splitNode = head;
                    if(splitIndex==-1){
                        head = walker.next;
                        walker=head;
                        index=0;
                        cumulativeSum=0;
                        sumToIndexMap.clear();
                        sumToIndexMap.addKeyValuePair(0,-1);
                        continue;
                    } else {
                        int counterIndex=0;
                        while(counterIndex<splitIndex){
                            splitNode=splitNode.next;
                            ++counterIndex;
                        }
                        splitNode.next=walker.next;
                        walker=splitNode;
                        for(int i=splitIndex;i<=index;++i){
                            sumToIndexMap.removeByValue(new Integer(i));
                        }
                        cumulativeSum-=walker.val;
                        index=splitIndex;
                        
                    }
                } else {
                    sumToIndexMap.addKeyValuePair(cumulativeSum,index);
                    walker = walker.next;
                    index++;
                }
            }
        return head;
    }
}