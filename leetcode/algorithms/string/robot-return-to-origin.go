func judgeCircle(moves string) bool {
	var verticalOffset int = 0
	var horizontalOffset int = 0

	var i int = 0
	for i < len(moves) {
		switch string(moves[i]) {
		case "U":
			verticalOffset++
			break
		case "D":
			verticalOffset--
			break
		case "L":
			horizontalOffset--
			break
		case "R":
			horizontalOffset++
			break
		}
		i++
	}

	return verticalOffset == 0 && horizontalOffset == 0

}