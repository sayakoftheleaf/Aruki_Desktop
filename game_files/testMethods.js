
const boardFunctions = require('./board')


// Returns a string representation of the board
// (without any indication of which pieces belong to which player)
// if symbol is passed in, then it returns the board with pieces
// if players is passed in, then it returns the player config
function stringBoard(someBoard, value) {

    // go through each row
    someBoard = someBoard.map((col) => {
        // for each col, transform them into a string
        return col.reduce((accum, square) => {
            let returnVal = (value === 'player') ? square.player : square.symbol
            return accum + returnVal + '\t'
        }, '')
    })
    // go through the array of strings and reduce them into a giant
    // string separated by newlines
    return someBoard.reduce((accum, col) => accum + col + '\n', '')
}
// NOTE: since this is a test function, does not handle edge cases
// for instance, will return the player config even if a string other
// than 'player' or 'symbol' is passed as the parameter for value

function dummyBoard(symbol, player, row, col){
    let freshBoard = boardFunctions.setUpFreshBoard()
    let square = freshBoard[row][col]

    square.player = player
    square.symbol = symbol

    return freshBoard
}

function simpleInsertPiece(symbol, player, row, col, someBoard){
    let square = someBoard[row][col]
    square.player = player
    square.symbol = symbol

    return someBoard
}

exports.dummyBoard = dummyBoard
exports.stringBoard = stringBoard
exports.simpleInsertPiece = simpleInsertPiece