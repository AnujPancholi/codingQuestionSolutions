/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Duplicates From Sorted List"
*/

class Solution {
    public void duplicateZeros(int[] arr) {
        List<Integer> insertQueue = new ArrayList<Integer>();
        for(int i=0;i<arr.length;++i){
            insertQueue.add(arr[i]);
            if(arr[i]==0){
                insertQueue.add(arr[i]);
            }
        }
        for(int i=0;i<arr.length;++i){
            arr[i]=insertQueue.get(i);
        }
    }
}