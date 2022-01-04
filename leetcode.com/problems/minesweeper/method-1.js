/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const [y, x] = click
    const m = board.length
    const n = board[0].length
    if (x >= n || x < 0 || y >= m || y < 0) {
        return board
    }
    if (board[y][x] === 'M' || board[y][x] === 'X') {
        board[y][x] = 'X'
        return board
    }
    if (board[y][x] === 'B' || board[y][x].match(/^[12345678]$/)) {
        return board
    }
    openE(board, x, y)
    return board
}

var isMineSafe = function(board, x, y) {
    const m = board.length
    const n = board[0].length
    if (x >= n || x < 0 || y >= m || y < 0) {
        return false
    }
    return board[y][x] === 'M' || board[y][x] === 'X'
}

var openE = function(board, x, y) {
    const m = board.length
    const n = board[0].length
    if (x >= n || x < 0 || y >= m || y < 0) {
        return
    }
    if (board[y][x] !== 'E') {
        return
    }
    let mines = 0
    const adj = [-1, -1, 0, -1, 1, 0, 1, 1, -1]
    for (let i = 0; i < 8; i++) {
        const adjX = x + adj[i]
        const adjY = y + adj[i+1]
        mines += (isMineSafe(board, adjX, adjY)) ? 1 : 0
    }
    if (mines > 0) {
        board[y][x] = mines.toString()
        return        
    }
    board[y][x] = 'B'
    for (let i = 0; i < 8; i++) {
        const adjX = x + adj[i]
        const adjY = y + adj[i+1]
        openE(board, adjX, adjY)
    }
}
