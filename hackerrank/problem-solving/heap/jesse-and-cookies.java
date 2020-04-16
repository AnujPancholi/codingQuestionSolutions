import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

//<myCode>---------------
 class MinHeapIntegerComparator implements Comparator<Integer> {
    public int compare(Integer i1, Integer i2){
        return i1.intValue()-i2.intValue();
    }
}
//</myCode>-----------------
public class Solution {

    /*
     * Complete the cookies function below.
     */


    //<myCode>---------------------------

    private static Integer getCombinedCookie(Integer c1, Integer c2){
        return c1+(2*c2);
    }


    static int cookies(int k, int[] A) {
        /*
         * Write your code here.
         */

         PriorityQueue<Integer> cookieHeap = new PriorityQueue<Integer>(new MinHeapIntegerComparator());

         for(int cookieVal : A){
             cookieHeap.add(cookieVal);
         }
        int counter = 0;
         while(cookieHeap.size()>=2 && cookieHeap.peek()<k){
             Integer c1 = cookieHeap.poll();
             Integer c2 = cookieHeap.poll();
            cookieHeap.add(getCombinedCookie(c1,c2));
            ++counter;
         }

        return cookieHeap.peek()<k ? -1 : counter;

    }

    //</myCode>-------------------------

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] nk = scanner.nextLine().split(" ");

        int n = Integer.parseInt(nk[0].trim());

        int k = Integer.parseInt(nk[1].trim());

        int[] A = new int[n];

        String[] AItems = scanner.nextLine().split(" ");

        for (int AItr = 0; AItr < n; AItr++) {
            int AItem = Integer.parseInt(AItems[AItr].trim());
            A[AItr] = AItem;
        }

        int result = cookies(k, A);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();
    }
}
