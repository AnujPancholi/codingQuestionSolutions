/*
    interviewbit
    track: "programming",
    section: "Arrays",
    problem title: "Add One to Number"
*/


public class Solution {
    public ArrayList<Integer> plusOne(ArrayList<Integer> A) {
        int i=0;
        while(A.get(i)<=0 && i<A.size()-1){
            A.remove(i);
        }
        if(A.size()==0){
            A.add(1);
            return A;
        }
        int carryOver = 1;
        i=A.size()-1;
        while(i>=0){
            int newDigit = A.get(i)+carryOver;
            if(newDigit>9){
                carryOver = (int)(newDigit/10);
                newDigit = newDigit%10;
            } else {
                carryOver = 0;
            }
            A.set(i,newDigit);
            if(carryOver==0){
                break;
            }
            i--;
        }
        if(carryOver>0){
            A.add(0,carryOver);
        }
        return A;
        
    }
}
