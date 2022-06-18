const prompt = require('prompt-sync')
let count = 0
function nQueen(rows: number, cols: Array<boolean>, ldiag: Array<boolean>, rdiag: Array<boolean>, sol: string, board: number) {
    if (rows == board) {
        count++
        console.log(sol)
        // console.log(count)
        return
    }
    for (let i = 0; i < cols.length; i++) {
        console.log('i', i)
        console.log('rows', rows)
        if (cols[i] == false && ldiag[rows + i] == false && rdiag[rows - i + board - 1] == false) {
            cols[i] = true
            ldiag[rows + i] = true
            rdiag[rows - i + board - 1] = true
            // sol += `${rows}-${i}`
            nQueen(rows + 1, cols, ldiag, rdiag, sol + `${rows}${i}-`, board)
            cols[i] = false
            ldiag[rows + i] = false
            rdiag[rows - i + board - 1] = false
        }
    }
}
const board = 4;
let cols = Array(board).fill(false)
let ldiag = Array(2 * board - 1).fill(false)
let rdiag = Array(2 * board - 1).fill(false)

nQueen(0, cols, ldiag, rdiag, '', board)
console.log(count)
export { };