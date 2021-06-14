interface AvgObj {
    avg: number;
    count: number;
}
interface CheckinEvent {
station: string;
time: number;
}

class UndergroundSystem {

laneMap: Map<string,AvgObj>
custMap: Map<number,CheckinEvent>
    
constructor() {
    this.laneMap = new Map<string,AvgObj>();
    this.custMap = new Map<number,CheckinEvent>();
}

getRunningAvgObj(avgObj: AvgObj,value: number): AvgObj {
    return {
        avg: ((avgObj.avg*avgObj.count)+value)/(avgObj.count+1),
        count: avgObj.count+1,
    }
}

getLane(startStation: string, endStation: string): string {
    return `${startStation}-${endStation}`;
}

checkIn(id: number, stationName: string, t: number): void {
        this.custMap.set(id,{
            station: stationName,
            time: t
        })
}

checkOut(id: number, stationName: string, t: number): void {
    const entryEvent = this.custMap.get(id);
    const lane = this.getLane(entryEvent.station,stationName);
    const avgObj = this.laneMap.get(lane) || {
        avg: 0,
        count: 0
    };
    this.laneMap.set(lane,this.getRunningAvgObj(avgObj,t - entryEvent.time));
    this.custMap.delete(id)
}   

getAverageTime(startStation: string, endStation: string): number {
    return this.laneMap.get(this.getLane(startStation,endStation)).avg
}
}

/**
* Your UndergroundSystem object will be instantiated and called as such:
* var obj = new UndergroundSystem()
* obj.checkIn(id,stationName,t)
* obj.checkOut(id,stationName,t)
* var param_3 = obj.getAverageTime(startStation,endStation)
*/