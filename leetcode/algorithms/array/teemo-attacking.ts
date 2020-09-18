/*
	leetcode
	category: "Algorithms"
	problem title: "Teemo Attacking"
*/

function findPoisonedDuration(timeSeries: number[], duration: number): number {
    
    let poisonedTill: number = -1,totalDuration: number = 0;
    for(let attackTime of timeSeries){
        totalDuration+=duration-Math.max(0,poisonedTill-attackTime);
        poisonedTill=attackTime+duration;
    }
    
    return totalDuration;

};