/*
    leetcode
    category: "Algorithms"
    problem title: "First Bad Version"
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1, high=n,mid;
        let firstBadVersion = -1;
        while(firstBadVersion===-1 && high-low>1){
            let mid = Math.floor((low+high)/2);
            let isMidBad = isBadVersion(mid);
            if(isMidBad){
                let isMidFirstBad = !(isBadVersion(mid-1));
                if(isMidFirstBad){
                    firstBadVersion=mid;
                } else {
                    high=mid;
                }
            } else {
                low=mid;
            }
        }
        if(firstBadVersion===-1){
            if(isBadVersion(low)){
                return low;
            } else {
                return high;
            }
        } else {
            return firstBadVersion;
        }
    };
};