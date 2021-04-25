/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func addToPostorder(root *Node, postorderArr *[]int) {
	if root == nil {
		return
	}
	for _, childNode := range root.Children {

		addToPostorder(childNode, postorderArr)
	}

	*postorderArr = append(*postorderArr, root.Val)

}

func postorder(root *Node) []int {
	var arr []int
	var postorderArr *[]int = &arr

	addToPostorder(root, postorderArr)

	return *postorderArr
}