// ----------------------------------------------------------------------       
//                 # BOARD MANIPULATION MODULE #
//
// Offers a number of functions related to the setting up and
// manipulation of the overall state of the game board
//
// ----------------------------------------------------------------------

// Sets up the default empty sqaure
function defaultSquare(): square {
  return { player: 0, symbol: '#' }
}

// Creates a new Board with all defaultSquares in them
function setUpFreshBoard(): square[][] {
  let newBoard: square[][];

  for (let i = 0; i <= 11; i++) {
    let thisRow: square[];

    for (let j = 0; j <= 11; j++) {
      thisRow[j] = defaultSquare();
    }
    newBoard[i] = thisRow
  }
  return newBoard
}

// Initializes an empty board with the pieces in their starting position
function initBoard(someBoard: square[][]): square[][] {
  // Rooks
  someBoard[0][0].symbol = 'R1'
  someBoard[11][0].symbol = 'R1'
  someBoard[0][11].symbol = 'R2'
  someBoard[11][11].symbol = 'R2'

  // Arrows
  someBoard[0][1].symbol = 'A1'
  someBoard[0][10].symbol = 'A2'
  someBoard[11][1].symbol = 'A1'
  someBoard[11][10].symbol = 'A2'

  // Lances
  someBoard[0][2].symbol = 'L1'
  someBoard[0][9].symbol = 'L2'
  someBoard[11][9].symbol = 'L1'
  someBoard[11][2].symbol = 'L2'

  // Pikes
  someBoard[0][3].symbol = 'P1'
  someBoard[0][8].symbol = 'P2'
  someBoard[11][3].symbol = 'P1'
  someBoard[11][8].symbol = 'P2'

  // Lesser Rivers
  someBoard[0][4].symbol = 'LR'
  someBoard[11][4].symbol = 'LR'

  // Greater Rivers
  someBoard[0][7].symbol = 'GR'
  someBoard[11][7].symbol = 'GR'

  // Kings
  someBoard[0][5].symbol = 'K'
  someBoard[11][5].symbol = 'K'

  // Jesters
  someBoard[0][6].symbol = 'J'
  someBoard[11][6].symbol = 'J'

  // setting up pawns and the player alignment
  for (let i = 0; i <= 11; i++) {
    // setting up pawns
    someBoard[1][i].symbol = 'Z' + i.toString()
    someBoard[10][i].symbol = 'Z' + i.toString()

    // aligning initial pieces to the players they belong to
    someBoard[1][i].player = 2
    someBoard[0][i].player = 2
    someBoard[10][i].player = 1
    someBoard[11][i].player = 1
  }
  return someBoard
}

// Deep copies a board
function copyBoard(originalBoard: square[][]): square[][] {
  const globalState = require('globalState').deepCopy;
  return originalBoard.map(col => globalState.deepCopy(col))
};

// Checks whether a move is within the Board
function withinBoard(someRow: number, someCol: number): boolean {
  if ((someRow <= 11) && (someRow >= 0)) {
    // if rows are in range, return value depends on columns being in range
    return ((someCol <= 11) && (someCol >= 0))
  } else return false
}

function changePieceInSquare(
  someBoard: square[][], row: number, col: number, newSymbol: string): square[][] {
  someBoard[row][col].symbol = newSymbol;
  return someBoard;
}

// Finds the position of a piece of a side and
// returns an object comprised of the row and column.
function positionOf(symbol: string, someBoard: square[][], 
  player: number): piece_position {

  // TODO: see if there are better ways of doing this
  // This is (n^2) complexity
  for (let a = 0; a <= 11; a++) {
    for (let b = 0; b <= 11; b++) {
      if (someBoard[a][b].symbol.includes(symbol) &&
        player === someBoard[a][b].player) {
        return { row: a, col: b }
      }
    }
  }
}

// Checks if the square in which the piece is trying to move to is
// occupied by a piece of the same side
function isNotBlockedSquare(someRow: number, someCol: number, tempRow: number,
  tempCol: number, someBoard: square[][]): boolean {

  let currentPlayer = someBoard[someRow][someCol].player
  let squareOccupant = someBoard[tempRow][tempCol].player

  return (currentPlayer !== squareOccupant)
}

// --------------------------------------------------------------------------
//                               EXPORTS
// --------------------------------------------------------------------------

exports.defaultSquare = defaultSquare
exports.setUpFreshBoard = setUpFreshBoard
exports.initBoard = initBoard
exports.copyBoard = copyBoard
exports.changePieceInSquare = changePieceInSquare;
exports.withinBoard = withinBoard
exports.positionOf = positionOf
exports.isNotBlockedSquare = isNotBlockedSquare

