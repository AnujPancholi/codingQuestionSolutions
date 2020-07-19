/*
    leetcode
    category: "Algorithms"
    problem title: "Reformat Date"
*/

/**
 * @param {string} date
 * @return {string}
 */

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var reformatDate = function(date) {
    return date.split(' ').map((elem,index) => {
        switch(index){
            case 0:
                const dateInt = parseInt(elem);
                return dateInt<10 ? `0${dateInt}` : `${dateInt}`;
                break;
            case 1:
                const monthInt = months.indexOf(elem)+1;
                return monthInt<10 ? `0${monthInt}` : `${monthInt}`;
                break;
            case 2:
                return elem;
                break;
        }
    }).reverse().join('-');
    
    
};