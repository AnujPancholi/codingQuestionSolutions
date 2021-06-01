interface AvgObj {
        avg: number;
        count: number;
    }
interface EntryEvent {
    station: string;
    time: number;
}

class UndergroundSystem {
    
    laneMap: Map<string,AvgObj>
    custMap: Map<number,EntryEvent>
    
    constructor() {
        this.laneMap = new Map<string,AvgObj>();
        this.custMap = new Map<number,EntryEvent>();
    }

    checkIn(id: number, stationName: string, t: number): void {
            this.custMap.set(id,{
                station: stationName,
                time: t
            })
    }

    checkOut(id: number, stationName: string, t: number): void {
        const entryEvent = this.custMap.get(id);
        const duration = t - entryEvent.time;
        const lane = `${entryEvent.station}-${stationName}`;
        const avgObj = this.laneMap.get(lane) || {
            avg: 0,
            count: 0
        };
        
        avgObj.avg=((avgObj.avg*avgObj.count)+duration)/(avgObj.count+1);
        avgObj.count++;
        
        this.laneMap.set(lane,avgObj);
    }   

    getAverageTime(startStation: string, endStation: string): number {
        return this.laneMap.get(`${startStation}-${endStation}`).avg
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */