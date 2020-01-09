/*
    leetcode
    category: "Algorithms"
    problem title: "Defanging an IP Address"
*/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g,'[.]');
};