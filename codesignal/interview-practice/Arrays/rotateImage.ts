/*
    codesignal
    category: "interview-practice/Arrays"
    problem title: "rotateImage"
*/

function rotateImage(a: number[][]): number[][] {
    let s: number = 0;
    const n: number = a.length;
    while(s<Math.floor(n/2)){
        let i: number = 0;
        while(i<n-2*s-1){
            let temp = a[i+s][n-1-s];
            a[i+s][n-1-s] = a[s][i+s];
            a[s][i+s] = temp;
            
            temp = a[n-1-s][n-1-i-s];
            a[n-1-s][n-1-i-s] = a[s][i+s];
            a[s][i+s] = temp;
            
            temp = a[n-1-i-s][s];
            a[n-1-i-s][s] = a[s][i+s];
            a[s][i+s] = temp;
            ++i;
                   
        }
        // console.log(a);
        ++s
    }
    
    return a;

}
