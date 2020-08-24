/*
    leetcode
    category: "Algorithms"
    problem title: "Reorder Data in Log Files"
*/


/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    return logs.reduce((arrs, log) => {
        arrs[log.split(' ')[1].match(/\d/) ? 1 : 0].push(log);
        return arrs;
    }, [
        [],
        []
    ]).reduce((ans, logs, index) => {
        if (index === 1) return ans.concat(logs);
        return ans.concat(logs.sort((a, b) => {
            let astr = a.split(' ').slice(1).join(' '),
                bstr = b.split(' ').slice(1).join(' ');
            if (astr === bstr) {
                return a.split(' ')[0].localeCompare(b.split(' ')[0]);
            } else {
                return astr.localeCompare(bstr);
            }

        }))

    }, [])



};