/*
    leetcode
    category: "Algorithms"
    problem title: "Online Election"
*/

class TopVotedCandidate {
    private List<ArrayList<Integer>> leadChangeList = null;
    
    private ArrayList<Integer> getClosestLeadEntryForTime(int time){
        int low=0,high=leadChangeList.size()-1;
        ArrayList<Integer> closestEntry = null;
        while(high-low>1){
            // System.out.println(Integer.toString(low)+" "+Integer.toString(high));
            int mid = (high+low)/2;
            int midValue = leadChangeList.get(mid).get(0);
            
            if(midValue==time){
                closestEntry = leadChangeList.get(mid);
                break;
            } else if(midValue<=time){
                low = mid;
            } else {
                high = mid;
            }
            
        }
        if(closestEntry==null){
            closestEntry = leadChangeList.get(high).get(0)<=time ? leadChangeList.get(high) : leadChangeList.get(low);
        }
        return closestEntry;
        
    }
    
    
    public TopVotedCandidate(int[] persons, int[] times) {
        leadChangeList = new ArrayList<ArrayList<Integer>>();
        
        HashMap<Integer,Integer> voteCount = new HashMap<Integer,Integer>();
        Integer currLeader = null;
        for(int i=0;i<times.length;++i){
            int newVoteCount =voteCount.getOrDefault(persons[i],0)+1;
            voteCount.put(persons[i],newVoteCount);
            if(currLeader==null || (currLeader!=persons[i] && voteCount.get(currLeader)<=newVoteCount)){
                currLeader=persons[i];
                leadChangeList.add(new ArrayList<Integer>(Arrays.asList(times[i],persons[i])));
            }
            
        }
        
        // System.out.println(leadChangeList);
        
        
    }
    
    public int q(int t) {
        return getClosestLeadEntryForTime(t).get(1);
    }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * TopVotedCandidate obj = new TopVotedCandidate(persons, times);
 * int param_1 = obj.q(t);
 */