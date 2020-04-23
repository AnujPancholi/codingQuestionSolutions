import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    private static void rebalanceHeaps(PriorityQueue<Integer> lower, PriorityQueue<Integer> upper){
        if(upper.size()>lower.size()){
            lower.add(upper.poll());
        } else if(lower.size()>(upper.size()+1)){
            upper.add(lower.poll());
        }
    }
    

    /*
     * Complete the runningMedian function below.
     */
    static double[] runningMedian(int[] a) {
        /*
         * Write your code here.
         */
        double[] medians = new double[a.length];

         PriorityQueue<Integer> lowerHeap = new PriorityQueue<Integer>(new Comparator<Integer>(){
             public int compare(Integer i1, Integer i2){
                 return i2 - i1;
             }
         });
         PriorityQueue<Integer> upperHeap = new PriorityQueue<Integer>(new Comparator<Integer>(){
             public int compare(Integer i1, Integer i2){
                 return i1-i2;
             }
         });

        for(int i=0;i<a.length;++i){
            Integer middleValue = lowerHeap.size()>0 ? lowerHeap.peek() : null;
            if(middleValue==null || a[i]<middleValue){
                lowerHeap.add(a[i]);
            } else {
                upperHeap.add(a[i]);
            }
            rebalanceHeaps(lowerHeap,upperHeap);
            if(lowerHeap.size()>upperHeap.size()){
                medians[i] = (double)lowerHeap.peek();
            } else {
                medians[i] = (double)(lowerHeap.peek() + upperHeap.peek())/2;
            }
        }

        return medians;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int aCount = Integer.parseInt(scanner.nextLine().trim());

        int[] a = new int[aCount];

        for (int aItr = 0; aItr < aCount; aItr++) {
            int aItem = Integer.parseInt(scanner.nextLine().trim());
            a[aItr] = aItem;
        }

        double[] result = runningMedian(a);

        for (int resultItr = 0; resultItr < result.length; resultItr++) {
            bufferedWriter.write(String.valueOf(result[resultItr]));

            if (resultItr != result.length - 1) {
                bufferedWriter.write("\n");
            }
        }

        bufferedWriter.newLine();

        bufferedWriter.close();
    }
}
