/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
	const n = grid.length
	return construct2(grid, 0, 0, n, n)
}

var construct2 = function(grid, x, y, dim) {
	if (dim < 1) {
    // nice to have
		return null
	}
	if (dim === 1) {
    // [row][col]
		return new Node(grid[y][x], true, null, null, null, null)
	}
	const halfDim = dim / 2
	const topLeft = construct2(grid, x, y, halfDim, halfDim)
	const topRight = construct2(grid, x + halfDim, y, halfDim)
	const bottomLeft = construct2(grid, x, y + halfDim, halfDim)
	const bottomRight = construct2(grid, x + halfDim, y + halfDim, halfDim)
	const isLeaf = (topLeft.val === 1 || topLeft.val === 0) && topLeft.val === topRight.val && topRight.val === bottomLeft.val && bottomLeft.val === bottomRight.val
	if (isLeaf) {
		return new Node(topLeft.val, true, null, null, null, null)
	} else {
		return new Node(2, false, topLeft, topRight, bottomLeft, bottomRight)
	}
}
