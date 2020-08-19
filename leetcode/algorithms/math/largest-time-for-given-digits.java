/*
    leetcode
    category: "Algorithms"
    problem title: "Largest Time For Given Digits"
*/

class Solution {
    private int[] getSortedIntArr(int[] arr){
        int[] sortedIntArr = new int[arr.length];
        System.arraycopy(arr,0,sortedIntArr,0,arr.length);
        Arrays.sort(sortedIntArr);
        for(int i=0;i<sortedIntArr.length/2;++i){
            int temp = sortedIntArr[i];
            sortedIntArr[i]=sortedIntArr[sortedIntArr.length-1-i];
                sortedIntArr[sortedIntArr.length-1-i]=temp;
        }
        return sortedIntArr;
    }
    private void printIntArr(int[] arr){
        for(int i=0;i<arr.length;++i){
            System.out.print(Integer.toString(arr[i])+" ");
        }
        System.out.print("\n");
    }
    public String largestTimeFromDigits(int[] A) {
        int[] sortedArr = getSortedIntArr(A);
        // int[] sortedArr = sort(A);
        // printIntArr(sortedArr);
        
        if(sortedArr[3]>2 || (sortedArr[3]==2 && sortedArr[2]>3)){
            return "";
        }
        
        
        
        int[] ansArr = new int[4];
        
        for(int i=0;i<4;++i){
            int ceiling = 9;
            if(i==0)ceiling=sortedArr[1]>5 ? 1 : 2;
            if(i==2)ceiling=5;
            if(i==1 && ansArr[0]==2)ceiling=3;
            
            Integer cIndex=null;
            for(int j=0;j<4;++j){
                if(sortedArr[j]!=-1){
                    if((cIndex==null || sortedArr[j]>sortedArr[cIndex]) && sortedArr[j]<=ceiling){
                        cIndex=j;
                    }
                }
            }
            
            if(cIndex==null){
                return "";
            }
            
            ansArr[i]=sortedArr[cIndex];
            sortedArr[cIndex]=-1;
            
            // printIntArr(ansArr);
        }
        
        
        
        
        return String.format("%d%d:%d%d",ansArr[0],ansArr[1],ansArr[2],ansArr[3]);
        
        
        
        
    }
}