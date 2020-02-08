/*
    leetcode
    category: "Algorithms"
    problem title: "Rotate String"
*/

//this is an O(n^2) solution, will improve this later


class Solution {
    public boolean rotateString(String F, String S) {
        return F.length()==S.length() && (F+F).contains(S);
    }
}