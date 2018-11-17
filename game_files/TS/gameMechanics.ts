//
// MODULE : Game Mechanics functions
// 
// Module only contains pure functions and makes no changes to game state
//

const gameStateFunctions = require('./gameStateFunctions.js')
const boardFunctions = require('./board.js')

const addToCapturedForPlayer1 = gameStateFunctions.addToCapturedForPlayer1;
const addToCapturedForPlayer2 = gameStateFunctions.addToCapturedForPlayer2;
const getCapturedPiecesOfPlayer1 = gameStateFunctions.getCapturedPiecesOfPlayer1();
const getCapturedPiecesOfPlayer2 = gameStateFunctions.getCapturedPiecesOfPlayer2();

// TODO:
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


function makeNonCaptureMove(oldRow: number, oldCol: number,
  newRow: number, newCol: number, player: number, someBoard: square[][]): void {
  let newSquare: square = someBoard[newRow][newCol]
  let oldSquare: square = someBoard[oldRow][oldCol]

  if (newSquare.player !== player && newSquare.player !== 0) {

    let isSpecialCase: boolean =
      newSquare.symbol.includes('J') ||
      newSquare.symbol.includes('N') ||
      newSquare.symbol.includes('GR') ||
      newSquare.symbol.includes('LR') ||
      newSquare.symbol.includes('SS') ||
      newSquare.symbol.includes('MI')

    if (!isSpecialCase) {
      if (player === 1) addToCapturedForPlayer1(newSquare.symbol)
      if (player === 2) addToCapturedForPlayer2(newSquare.symbol)
    } // TODO: What happens if it is a Special Case?
    
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


function getCapturedPieces(player: number): string[] {
  let captured: string[] =
    (player === 1) ? getCapturedPiecesOfPlayer1() : getCapturedPiecesOfPlayer2();

  return gameStateFunctions.deepCopy(captured)
}

function flipPlayerMove(): void {
  let playerMove: number = gameStateFunctions.getPlayerMove();

  (playerMove === 1) ?
    gameStateFunctions.setPlayerMove(2) :
    gameStateFunctions.setPlayerMove(1)
}

// exports
exports.makeNonCaptureMove = makeNonCaptureMove;
exports.getCapturedPieces = getCapturedPieces;
exports.flipPlayerMove = flipPlayerMove;