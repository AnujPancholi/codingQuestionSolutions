import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    /*
     * Complete the equalStacks function below.
     */

    //<myCode> -------------------
    private static int getMin(int a,int b,int c){
        int min = a;
        if(b<min){
            min=b;
        }
        if(c<min){
            min=c;
        }
        return min;
    }

    private static int getHeightOfStack(int[] stk){
        int sum=0;
        for(int i=0;i<stk.length;i++){
            sum+=stk[i];
        }
        return sum;
    }

    private static boolean isSameHeights(int s1,int s2,int s3){
        return s1==s2 && s2==s3 ? true : false; 
    }

    static int equalStacks(int[] h1, int[] h2, int[] h3) {
        /*
         * Write your code here.
         */
        
        int[] stackSizes = new int[3];
        stackSizes[0] = getHeightOfStack(h1);
        stackSizes[1] = getHeightOfStack(h2);
        stackSizes[2] = getHeightOfStack(h3);

        int[] stackIndices = new int[3];
        for(int i=0;i<3;i++){
            stackIndices[i]=0;
        }
        
        int currentMinHeight = Integer.MAX_VALUE;
        boolean isSameHeightReached = false;

        while(!isSameHeightReached){
            isSameHeightReached = isSameHeights(stackSizes[0],stackSizes[1],stackSizes[2]);
            currentMinHeight = getMin(stackSizes[0],stackSizes[1],stackSizes[2]);
            if(currentMinHeight==0){
                isSameHeightReached=true;
                continue;
            }

            if(stackSizes[0]>currentMinHeight){
                stackSizes[0]-=h1[stackIndices[0]];
                ++stackIndices[0];
            }
            if(stackSizes[1]>currentMinHeight){
                stackSizes[1]-=h2[stackIndices[1]];
                ++stackIndices[1];
            }
            if(stackSizes[2]>currentMinHeight){
                stackSizes[2]-=h3[stackIndices[2]];
                ++stackIndices[2];
            }

        }

        return currentMinHeight;
    }
    //</myCode> ----------------

    private static final Scanner scanner = new Scanner(System.in);


    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] n1N2N3 = scanner.nextLine().split(" ");

        int n1 = Integer.parseInt(n1N2N3[0].trim());

        int n2 = Integer.parseInt(n1N2N3[1].trim());

        int n3 = Integer.parseInt(n1N2N3[2].trim());

        int[] h1 = new int[n1];

        String[] h1Items = scanner.nextLine().split(" ");

        for (int h1Itr = 0; h1Itr < n1; h1Itr++) {
            int h1Item = Integer.parseInt(h1Items[h1Itr].trim());
            h1[h1Itr] = h1Item;
        }

        int[] h2 = new int[n2];

        String[] h2Items = scanner.nextLine().split(" ");

        for (int h2Itr = 0; h2Itr < n2; h2Itr++) {
            int h2Item = Integer.parseInt(h2Items[h2Itr].trim());
            h2[h2Itr] = h2Item;
        }

        int[] h3 = new int[n3];

        String[] h3Items = scanner.nextLine().split(" ");

        for (int h3Itr = 0; h3Itr < n3; h3Itr++) {
            int h3Item = Integer.parseInt(h3Items[h3Itr].trim());
            h3[h3Itr] = h3Item;
        }

        int result = equalStacks(h1, h2, h3);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();
    }
}
