/*
    leetcode
    category: "Algorithms"
    problem title: "Subdomain Visit Count"
*/


function subdomainVisits(cpdomains: string[]): string[] {
    
    const domainsMap: Map<string,number> = new Map<string,number>()
    
    for(const domainEntry of cpdomains){
        const [countStr,domainStr] = domainEntry.split(" ")
        
        const count: number = parseInt(countStr);
        
        let domains: string[] = [""];
        
        for(let i: number = 0;i<domainStr.length;++i){
            domains = domains.map((s) => `${s}${domainStr.charAt(i)}`);
            if(domainStr.charAt(i)==="."){
                domains.push("")
            }
        }
        
        domains.forEach(dom => {
            domainsMap.set(dom,count+(domainsMap.get(dom) || 0));
        })
        
    }
    
    const result = []
    domainsMap.forEach((count,dom) => {
        result.push(`${count} ${dom}`)
    })
    
    return result;
    
};