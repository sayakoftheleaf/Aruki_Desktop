//
// MODULE : Player Movement Manipulation Functions
// Exports a number of functions related to player movements
// Module only contains pure functions and makes no changes to the game State
//

// given a move, returns the flipped move
// used every turn to keep of whose move it is
function flipPlayerMove(oldMove) {
  return (oldMove === 1) ? 2 : 1
}

// checks whether the king is in check in a given board
// Arguments: the board, and the player whose king it is
function checkForCheck(someBoard, player) {
  let tempsq = positionOf("K", someBoard, player)
  let tempRow = tempsq.row
  let tempCol = tempsq.col

  someBoard.forEach(row => {
    row.forEach(square => {
      // for every piece that belongs to the enemy
      if (square.player !== 0 && square.player !== player) {
        // compute the moves of the piece
        let tempSquares = computeMoves(someBoard[a][b].symbol, a, b, someBoard)
        // check if the king is in any of those squares,
        // which would imply a check
        tempSquares.forEach(element => {
          (element.row === tempRow && element.col === tempCol) ? return true
        })
      }
    })
  })
  // if it gets to here, it means that the King is not in check
  return false
}

// exports out of this module
exports.flipPlayerMove = flipPlayerMove
exports.checkForCheck = checkForCheck






