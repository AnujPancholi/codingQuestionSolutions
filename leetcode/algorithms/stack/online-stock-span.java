/*
    leetcode
    category: "Algorithms"
    problem title: "Online Stock Span"
*/

class StockPrice {
    public int day;
    public int value;
    public StockPrice(int _value, int _day){
        day = _day;
        value = _value;
    }
} 

class StockSpanner {
    Stack<StockPrice> dayStack = null;
    int dayCount;
    public StockSpanner() {
        dayStack = new Stack<StockPrice>();
        dayCount = 0;
    }
    
    public int next(int price) {
        ++dayCount;
        while(!dayStack.empty() && (dayStack.peek()).value<=price){
            dayStack.pop();
        }
        int span = dayCount - (dayStack.empty() ? 0 : dayStack.peek().day);
        dayStack.push(new StockPrice(price,dayCount));
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */