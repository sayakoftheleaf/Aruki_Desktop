//
// MODULE : Game Mechanics functions
// 
// Module only contains pure functions and makes no changes to game state
//

const stateFunctions = require('./gameState.js')
const boardFunctions = require('./board.js')

function checkForCheck(someBoard, player) {
  let tempsq = boardFunctions.positionOf('K', someBoard, player);

  for (var a = 0; a <= 11; a++) {
    for (var b = 0; b <= 11; b++) {
      if (someBoard[a][b].player !== 0 && someBoard[a][b].player !== player) {
        let tempSquares = computeMoves(someBoard[a][b].symbol, a, b, someBoard)
        //if(someBoard[a][b].symbol === )
        for (var x = 0; x < tempSquares.length; x++) {
          if (tempSquares[x].row === tempsq.row && tempSquares[x].col === tempsq.col) {
            return true
          }
        }
      }
    }
  }
  return false
}


function makeNonCaptureMove(oldRow, oldCol, newRow, newCol, player, someBoard) {
  let newSquare = someBoard[newRow][newCol]
  let oldSquare = someBoard[oldRow][oldCol]

  if (newSquare.player !== player && newSquare.player !== 0) {
    let isSpecialCase =
    newSquare.symbol.includes('J') ||
    newSquare.symbol.includes('N') ||
    newSquare.symbol.includes('GR') ||
    newSquare.symbol.includes('LR') ||
    newSquare.symbol.includes('SS') ||
    newSquare.symbol.includes('MI')

    if (!isSpecialCase){
      if (player === 1) stateFunctions.setCapturedPlayer1(newSquare.symbol)
      if (player === 2) stateFunctions.setCapturedPlayer2(newSquare.symbol)
    }
  }

  // need to change values because these are passed by reference
  newSquare.player = oldSquare.player
  newSquare.symbol = oldSquare.symbol
  oldSquare.player = 0
  oldSquare.symbol = '#'

}

// FIXME: figure out if we need this
// function pushSquares(tempr, tempc, tSquares, player) {

//   var tempsq = {
//     row: tempr,
//     col: tempc
//   };

//   tSquares.push(tempsq);
// };


function.getCapturedPieces(player){
  let captured = (player === 1)
    ? stateFunctions.getCapturedPlayer1()
    : stateFunctions.getCapturedPlayer2()

  return stateFunctions.deepCopy(captured)
}

// exports
exports.makeNonCaptureMove = makeNonCaptureMove