class Solution {
    private int getRowIndex(int[][] mat,int target){
        int rowIndex = -1,l=0,h=mat.length-1;
        while(h-l>1){
            int m = l + ((h-l)/2);
            if(mat[m][0]<=target){
                l=m;
            } else {
                h=m;
            }
        }
        if((mat[l][0]<=target && mat[l][mat[l].length-1]>=target)){
            rowIndex = l;
        }
        if((mat[h][0]<=target && mat[h][mat[h].length-1]>=target)){
            rowIndex = h;
        }
        return rowIndex;
    }
    
    private boolean binsearch(int[] arr,int target){
        int l=0,h=arr.length-1;
        boolean isPresent = false;
        while(h>=l){
            int m = l + ((h-l)/2);
            if(arr[m]==target){
                isPresent = true;
                break;
            } else if (arr[m]<target){
                l = m+1;
            } else {
                h = m-1;
            }
        }
        
        return isPresent;
    }
    
    public boolean searchMatrix(int[][] matrix, int target) {
        int rowIndex = getRowIndex(matrix,target);
        return rowIndex==-1 ? false : binsearch(matrix[rowIndex],target);
    }
}