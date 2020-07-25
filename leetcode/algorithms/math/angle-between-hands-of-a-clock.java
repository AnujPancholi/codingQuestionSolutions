/*
    leetcode
    category: "Algorithms"
    problem title: "Angle Between Hands of a Clock"
*/

class Solution {
    public double angleClock(int hour, int minutes) {
        double hourAbsoluteAngle = (hour%12)*30+((double)minutes/60)*30;
        double minAbsoluteAngle = (minutes%60)*6;
        
        double absoluteDiff = Math.abs(hourAbsoluteAngle-minAbsoluteAngle);
        
        return absoluteDiff>180 ? 360-absoluteDiff : absoluteDiff;
        
    }
}