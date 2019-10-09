/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "FizzBuzz"
*/
public class Solution {
    public ArrayList<String> fizzBuzz(int A) {
        ArrayList<String> fbList = new ArrayList<String>();
        for(int i=1;i<=A;i++){
            StringBuffer entry = new StringBuffer("");
            if(i%3==0){
             entry.append("Fizz");   
            }
            if(i%5==0){
                entry.append("Buzz");
            }
            if(!(i%3==0 || i%5==0)){
                entry.append(Integer.toString(i));
            }
            
            fbList.add(entry.toString());
        }
        
        return fbList;
        
    }
}
