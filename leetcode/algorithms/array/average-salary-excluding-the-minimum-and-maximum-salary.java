/*
    leetcode
    category: "Algorithms"
    problem title: "Average Salary Excluding the Minimum and Maximum Salary"
*/

class Solution {
    public double average(int[] salary) {
        
        int max=salary[0],min=salary[0],sum=0;
        for(int sal : salary){
            sum+=sal;
            if(sal>max){
                max=sal;
            }
            if(sal<min){
                min=sal;
            }
        }
        
        
        return (double)((sum-(max+min)))/(salary.length-2);
        
    }
}