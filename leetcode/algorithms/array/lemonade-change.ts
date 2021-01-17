/*
    leetcode
    category: "Algorithms"
    problem title: "Lemonade Change"
*/


//will change solution later
function lemonadeChange(bills: number[]): boolean {
    
    let cost: number = 5;
    const cashRegMap: Map<number,number> = new Map<number,number>();
    cashRegMap.set(5,0)
    cashRegMap.set(10,0)
    cashRegMap.set(20,0)
    
    let canConductBusiness: boolean  = true;
    for(const note of bills){
        // console.log(note.toString())
        let fives: number = 0, tens: number=0;
        switch(note.toString()){
            case '5':
                // console.log(note)
                cashRegMap.set(5,cashRegMap.get(5)+1);
            break;
            case '10':
                fives = cashRegMap.get(5);
                if(fives===0){
                    canConductBusiness = false;
                } else{
                    cashRegMap.set(5,fives-1);
                    cashRegMap.set(10,cashRegMap.get(10)+1);
                }
            break;
            case '20':
                tens = cashRegMap.get(10);
                fives = cashRegMap.get(5);
                if(tens>=1 && fives>=1){
                    cashRegMap.set(5,fives-1);
                    cashRegMap.set(10,tens-1);
                    cashRegMap.set(20,(cashRegMap.get(20)+1));
                    
                } else if(fives>=3){
                    cashRegMap.set(5, fives-3);
                    cashRegMap.set(20,(cashRegMap.get(20)+1));
                } else {
                    canConductBusiness = false;
                }
            break;
        }
    // console.log(cashRegMap);
        
        if(!canConductBusiness){
            break;
        }
        
    }
    
    
    return canConductBusiness;

};