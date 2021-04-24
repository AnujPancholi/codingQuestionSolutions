/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func addPreorder(root *Node, preorderArr *[]int) {
	if root == nil {
		return
	}

	*preorderArr = append(*preorderArr, root.Val)

	for _, childNode := range root.Children {
		addPreorder(childNode, preorderArr)
	}
}

func preorder(root *Node) []int {
	var arr []int
	var preorderArr *[]int = &arr

	addPreorder(root, preorderArr)

	return *preorderArr

}