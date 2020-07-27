/*
    leetcode
    category: "Algorithms"
    problem title: "Angle Between Hands of a Clock"
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    
    const hourAbsoluteAngle = (hour%12)*30 + (minutes/60)*30;
    const minuteAbsoluteAngle = (minutes*6);
    
    const angleBetweenHands = Math.abs(hourAbsoluteAngle-minuteAbsoluteAngle);
    return angleBetweenHands>180 ? 360-angleBetweenHands : angleBetweenHands;
    
};