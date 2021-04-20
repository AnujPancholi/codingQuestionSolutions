import (
    "fmt"
    "strings"
    )

func fizzBuzz(n int) []string {
    var i = 1;
    var results = make([]string,n)
    for i<=n {
        var resultBuilder strings.Builder
        if i%3==0 {
            resultBuilder.WriteString("Fizz")
        }
        if i%5==0 {
            resultBuilder.WriteString("Buzz")
        }
        if resultBuilder.Len()==0 {
            fmt.Fprintf(&resultBuilder,"%d",i)
        }
        results[i-1] = resultBuilder.String()
        i++
    }
    
    return results;
    
}