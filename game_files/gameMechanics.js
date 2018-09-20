//
// MODULE : Game Mechanics functions
// 
// Module only contains pure functions and makes no changes to game state
//


// FIXME: figure out where computeMoves is
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

// FIXME: figure out what this shit is doing
function checkKing(someRow, someCol, tempRow, tempCol, tempSquares, player, someBoard) {
  if (boardFunctions.withinBoard(tempRow, tempCol)) {
    if (boardFunctions.isNotBlockedSquare(someRow, someCol, tempr, tempc, someBoard)) {
      pushSquares(tempr, tempc, tempSquares, player);
    }
  }
}

// FIXME: figure out what this shit is doing
function pushSquares(tempr, tempc, tSquares, player) {

	var tempsq = {
		row: tempr,
		col: tempc
	};

	tSquares.push(tempsq);
};