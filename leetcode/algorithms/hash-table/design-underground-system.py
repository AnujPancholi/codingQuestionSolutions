from collections import defaultdict
class UndergroundSystem(object):

    def __init__(self):
        
        self.checkinEvents = defaultdict(lambda: None, {});
        self.avg = defaultdict(lambda: None, {});
        

    def checkIn(self, id, stationName, t):
        """
        :type id: int
        :type stationName: str
        :type t: int
        :rtype: None
        """
        
        self.checkinEvents[id] = {
            "stationName": stationName,
            "time": t
        }
        

    def checkOut(self, id, stationName, t):
        """
        :type id: int
        :type stationName: str
        :type t: int
        :rtype: None
        """
        checkinEvent = self.checkinEvents[id]
        # print(checkinEvent)
        lane = "-".join([checkinEvent["stationName"],stationName]);
        duration = t-checkinEvent["time"];
        
        avgObj = self.avg[lane];
        # print(avgObj)
        
        if avgObj==None:
            avgObj = {
                "avg": 0.0,
                "count": 0
            }
        
        avgObj["avg"] = (float(avgObj["avg"]*avgObj["count"])+duration)/(avgObj["count"]+1);
        avgObj["count"] = avgObj["count"]+1;
        
        self.avg[lane] = avgObj;
        
        del self.checkinEvents[id];
        

    def getAverageTime(self, startStation, endStation):
        """
        :type startStation: str
        :type endStation: str
        :rtype: float
        """
        
        return self.avg["-".join([startStation,endStation])]["avg"]
        


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)