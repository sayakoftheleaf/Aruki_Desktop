//
// MODULE : Player Movement Manipulation Functions
// Exports a number of functions related to player movements
// Module only contains pure functions and makes no changes to the game State
//

// TODO: Rename this module to have a better name
// Current name is not relevant at all

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
          if (element.row === tempRow && element.col === tempCol) return true
        })
      }
    })
  })
  // if it gets to here, it means that the King is not in check
  return false
}

exports.checkForCheck = checkForCheck






