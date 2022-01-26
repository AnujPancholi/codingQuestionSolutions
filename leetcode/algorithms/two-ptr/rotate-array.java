class Solution {
    private void reverseArr(int[] arr,int x,int y){
         while(x<y){
            int temp = arr[x];
             arr[x] = arr[y];
             arr[y] = temp;
             ++x;
             --y;
         }
    }
    public void rotate(int[] nums, int k) {
        k = k%nums.length;
        reverseArr(nums,0,nums.length-1);
        reverseArr(nums,0,k-1);
        reverseArr(nums,k,nums.length-1);
    }
}