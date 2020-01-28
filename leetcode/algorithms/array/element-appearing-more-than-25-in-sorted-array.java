/*
    leetcode
    category: "Algorithms"
    problem title: "Element Appearing More Than 25 in Sorted Array"
*/

class Solution {
    public int findSpecialInteger(int[] arr) {
        int threshold = (Integer)(arr.length/4)+1;
    
    int count=1,currentInt=arr[0];
    for(int i=1;i<arr.length;++i){
        if(arr[i]!=currentInt){
            currentInt=arr[i];
            count=1;
        } else {
            ++count;
            if(count>=threshold){
                break;
            }
        }
    }
    return currentInt;
    }
}