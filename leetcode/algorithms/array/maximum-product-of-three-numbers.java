/*
    leetcode
    category: "Algorithms"
    problem title: "Maximum Product of Three Numbers"
*/

class Solution {
    private void printArr(int[] arr){
        for(int i=0;i<arr.length;++i){
            System.out.print(Integer.toString(arr[i])+" ");
            System.out.print("\n");
        }
    }
    private int[] getSortedIntArr(int[] arr){
        int[] outputArr = new int[arr.length];
        System.arraycopy(arr,0,outputArr,0,outputArr.length);
        Arrays.sort(outputArr);
        return outputArr;
    }
    private int getMaxPairwiseProduct(int[] arr){
        int[] sortedArr = getSortedIntArr(arr);
        return Math.max(getProductOfInts(arr,2,false),getProductOfInts(arr,2,true));
    }
    private int getProductOfInts(int[] arr,int limit,boolean startFromLast){
        Integer i=null,iterationChangeValue=1,counter=0,product=1;
        if(startFromLast){
            i=arr.length-1;
            iterationChangeValue=-1;
        } else {
            i=0;
        }
        while(counter<limit){
            product*=arr[i];
            i+=iterationChangeValue;
            ++counter;
        }
        return product;
    }
    
    public int maximumProduct(int[] nums) {
        
        int[] sortedNums = getSortedIntArr(nums);
        Integer product = null;
        
        if(sortedNums.length==3 || sortedNums[sortedNums.length-1]<=0){
            product = getProductOfInts(sortedNums,3,true);
        } else {
            // printArr(Arrays.copyOfRange(sortedNums,0,3));
            product = Math.max(getMaxPairwiseProduct(Arrays.copyOfRange(sortedNums,0,3))*sortedNums[sortedNums.length-1],getProductOfInts(sortedNums,3,true));
        }
        
        return product;
        
    }
}