import (
	"unicode"
	"strings"
	"fmt"
)

func printStrArr(strArr []string) {
	for _, str := range strArr {
		fmt.Printf("%s ", str)
	}
	fmt.Printf("\n")
}

func reverseOnlyLetters(S string) string {
	var low int = 0
	var high int = len(S) - 1

	var solBuilderArr []string = make([]string, len(S))

	for high-low > 0 {
		for low < len(S) && !unicode.IsLetter(rune(S[low])) {
			solBuilderArr[low] = string(S[low])
			low++
		}
		if low >= len(S) {
			break
		}
		for high > 0 && !unicode.IsLetter(rune(S[high])) {
			solBuilderArr[high] = string(S[high])
			high--
		}

		solBuilderArr[low] = string(S[high])
		solBuilderArr[high] = string(S[low])

		low++
		high--
	}

	if high == low {
		solBuilderArr[low] = string(S[low])
	}

	// printStrArr(solBuilderArr)

	return strings.Join(solBuilderArr, "")

}