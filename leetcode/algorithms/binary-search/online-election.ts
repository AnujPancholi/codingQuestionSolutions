class TopVotedCandidate {
    times: number[];
    persons: number[];
    leader: number[];
    constructor(persons: number[], times: number[]) {
        this.persons = persons;
        this.times = times;
        this.leader = [];
        let currLead: number = persons[0];
        const voteCount: Map<number,number> = new Map<number,number>();
        for(let i = 0;i<times.length;++i){
                
            voteCount.set(persons[i],(voteCount.get(persons[i]) || 0)+1);
                if(voteCount.get(persons[i])>=voteCount.get(currLead)){
                    currLead = persons[i];
                }
            
            this.leader.push(currLead);
        }
    }

    q(t: number): number {
        let h: number = this.times.length-1,l: number=0;
        let targetIndex: number | null = null;
        while(h-l>1){
            const m = l+Math.floor((h-l)/2);
            if(this.times[m]===t){
                targetIndex=m;
                break;
            } else if(this.times[m]>t){
                h=m;
            } else {
                l=m;
            }
        }
        if(targetIndex===null){
            if(this.times[h]<=t){
                targetIndex = h;
            } else {
                targetIndex = l;
            }
        }
        return this.leader[targetIndex]
    }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */