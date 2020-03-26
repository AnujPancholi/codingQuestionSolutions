/*
    leetcode
    category: "Algorithms"
    problem title: "Day of the Week"
*/


/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfTheWeek = function(day, month, year) {
    
    return DAYS_OF_WEEK[(new Date(year, month - 1, day)).getDay()]
};