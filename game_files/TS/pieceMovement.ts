// MODULE : Piece Movement module
// Exports a number of functions pertaining to the potential movement of pieces
// Module only contains pure functions and makes no changes to game state
//

// Given a piece's symbol, row and col in a board, 
// returns all of it's possible moves
// FIXME: Check if LR and GR are behaving appopriately

const boardFunctions = require('./board.js')

const isNotBlockedSquare = boardFunctions.isNotBlockedSquare;
const withinBoard = boardFunctions.withinBoard;

// Returns the moves given the symbol of a piece, it's position in the board
// and the board
function computeMoves(symbol: string, row: number, col: number, someBoard: square[][]): piece_position[] {

  let player: number = someBoard[row][col].player;

  if (symbol.includes('K')) return computeKingMoves(row, col, player, someBoard);
  else if (symbol.includes('J')) return computeJesterMoves(row, col, player, someBoard);
  else if (symbol.includes('GR')) {
    return computeGreaterRiverMoves(row, col, player, someBoard)
  }
  else if (symbol.includes('LR')) {
    return computeLesserRiverMoves(row, col, player, someBoard)
  }
  else if (symbol.includes('MI')) return computeMinisterMoves(row, col, player, someBoard)
  else if (symbol.includes('PP')) return computeGreaterPikeMoves(row, col, player, someBoard)
  else if (symbol.includes('LL')) return computeGreaterLanceMoves(row, col, player, someBoard)
  else if (symbol.includes('SS')) return computeLongSwordMoves(row, col, player, someBoard)
  else if (symbol.includes('R')) return computeRookMoves(row, col, player, someBoard)
  else if (symbol.includes('Z')) return computePawnMoves(row, col, player, someBoard)
  else if (symbol.includes('A')) return computeArrowMoves(row, col, player, someBoard)
  else if (symbol.includes('L')) return computeLanceMoves(row, col, player, someBoard)
  else if (symbol.includes('P')) return computePikeMoves(row, col, player, someBoard)
  else if (symbol.includes('S')) return computeSwordMoves(row, col, player, someBoard)
  else if (symbol.includes('N')) return computeJavelinMoves(row, col, player, someBoard)
}

// Checks if a move is a valid King move
// TODO: make this a pure function?
function isValidKingMove(row: number, col: number, tempRow: number, tempCol: number,
  possibleMoves: piece_position[], player: number, someBoard: square[][]): piece_position[] {

  let isWithinbBoard: boolean = withinBoard(tempRow, tempCol)
  let isNotBlocked: boolean = isNotBlockedSquare(row, col, tempRow, tempCol, someBoard)

  if (isWithinbBoard) {
    if (isNotBlocked) possibleMoves.push({ row: tempRow, col: tempCol })
  }

  return possibleMoves
}

// Finds all the possible moves of a King from a given
// row and column and board position
// TODO: pass in a piece_position instead of row and column separately (Consistency)
function computeKingMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {
  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  //case 1
  tempRow = row;
  tempCol = col - 1;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  //case 2
  tempRow = row;
  tempCol = col + 1;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  //case 3
  tempRow = row - 1;
  tempCol = col;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  //case 4
  tempRow = row - 1;
  tempCol = col - 1;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  //case 5
  tempRow = row - 1;
  tempCol = col + 1;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  //case 6
  tempRow = row + 1;
  tempCol = col;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  //case 7
  tempRow = row + 1;
  tempCol = col - 1;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  //case 8
  tempRow = row + 1;
  tempCol = col + 1;
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard);

  return possibleMoves;
}

function computePikeMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  //case 1
  tempRow = row + 1
  tempCol = col + 1
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 2
  tempRow = row - 1
  tempCol = col - 1
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case  3
  tempRow = row - 1
  tempCol = col + 1
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 4
  tempRow = row + 1
  tempCol = col - 1
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  return possibleMoves
}

function computeGreaterPikeMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  //case 1
  tempRow = row + 2
  tempCol = col + 2
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 2
  tempRow = row - 2
  tempCol = col - 2
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case  3
  tempRow = row - 2
  tempCol = col + 2
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 4
  tempRow = row + 2
  tempCol = col - 2
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  return possibleMoves.concat(computePikeMoves(row, col, player, someBoard))
}

function computeLanceMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  //case 1
  tempRow = row + 1
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 2
  tempRow = row - 1
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case  3
  tempRow = row
  tempCol = col + 1
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 4
  tempRow = row
  tempCol = col - 1
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  return possibleMoves
}

function computeGreaterLanceMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  //case 1
  tempRow = row + 2
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 2
  tempRow = row - 2
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case  3
  tempRow = row
  tempCol = col + 2
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 4
  tempRow = row
  tempCol = col - 2
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  return possibleMoves.concat(computeLanceMoves(row, col, player, someBoard))
}

function computeSwordMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {
  
  let lanceMoves = computeLanceMoves(row, col, player, someBoard);
  let pikeMoves = computePikeMoves(row, col, player, someBoard);

  return lanceMoves.concat(pikeMoves);
}

function computeLongSwordMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {
  let greaterLanceMoves = computeGreaterLanceMoves(row, col, player, someBoard);
  let greaterPikeMoves = computeGreaterPikeMoves(row, col, player, someBoard);
  return greaterLanceMoves.concat(greaterPikeMoves);
}

function computePawnMoves(row: number, col: number, player: number, someBoard: square[][]): piece_position[] {
  let possibleMoves = [];
  let move: piece_position; 

  // depending on who the pawn belongs to, it will move in different directions
  move.row = (player === 2) ? (row + 1) : (row - 1);
  move.col = col;

  let isBlocked: boolean = isNotBlockedSquare(row, col, move.row, move.col, someBoard);
  let isWithinBoard: boolean = withinBoard(move.row, move.col);

  if (isBlocked && isWithinBoard) possibleMoves.push(move);

  return possibleMoves;
}

function computeJavelinMoves(row: number, col: number, player: number, someBoard: square[][]) {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  //case 1
  tempRow = row - 1
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 2
  tempRow = row - 2
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case  3
  tempRow = row + 1
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 4
  tempRow = row + 2
  tempCol = col
  isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  return possibleMoves
}

// Helper function that computes whether a move is valid for a Rook
// or an Arrow
function rookArrowCheck(tempRow, tempCol, player, someBoard) {
  let thisPlayer = someBoard[tempRow][tempCol].player

  // if flag is false, it means that some earlier square was blocked - EXIT
  // if the move is not withinBoard - EXIT
  if (!(withinBoard(tempRow, tempCol))) return false
  if (thisPlayer === player) return false

  // if the square is blocked, then you cannot go any further than that square
  return (thisPlayer === 0)
}

function computeRookMoves(row: number, col: number, player: number, someBoard: square[][]) {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  // saves the previous state of the function call
  let ascendingRowFlag = true
  let ascendingColFlag = true
  let descendingRowFlag = true
  let descendingColFlag = true

  // Running through all the possible moves and then determing which one of
  // those are valid
  for (let counter = 1; counter < 12; counter++) {
    if (ascendingColFlag) {
      tempRow = row
      tempCol = col + counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : ascendingColFlag = false
    }

    if (ascendingRowFlag) {
      tempRow = row + counter
      tempCol = col

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : ascendingRowFlag = false
    }

    if (descendingRowFlag) {
      tempRow = row - counter
      tempCol = col

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : descendingRowFlag = false
    }

    if (descendingColFlag) {
      tempRow = row
      tempCol = col - counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : descendingColFlag = false
    }
  }
  return possibleMoves
}

function computeArrowMoves(row: number, col: number, player: number, someBoard: square[][]) {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  // saves the previous state of the function call
  let rightTopFlag = true
  let rightBottomFlag = true
  let leftTopFlag = true
  let leftBottomFlag = true

  // Running through all the possible moves and then determing which one of
  // those are valid
  for (let counter = 1; counter < 12; counter++) {
    if (rightTopFlag) {
      tempRow = row + counter
      tempCol = col + counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : rightTopFlag = false
    }

    if (rightBottomFlag) {
      tempRow = row + counter
      tempCol = col - counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : rightBottomFlag = false
    }

    if (leftTopFlag) {
      tempRow = row - counter
      tempCol = col + counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : leftTopFlag = false
    }

    if (leftBottomFlag) {
      tempRow = row - counter
      tempCol = col - counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({ row: tempRow, col: tempCol })
        : leftBottomFlag = false
    }
  }
  return possibleMoves
}

function computeMinisterMoves(row, col, player, someBoard) {
  let rookMoves = computeRookMoves(row, col, player, someBoard)
  let arrowMoves = computeArrowMoves(row, col, player, someBoard)

  return rookMoves.concat(arrowMoves)
}

// TODO: write this
function findJesterMoves(row, col, tempRow, tempCol, someBoard) {

  let isWithinBoard = withinBoard(tempRow, tempCol)
  let player = someBoard[tempRow][tempCol].player

  // no squares can be found on this round, so return an empty array
  if (!(isWithinBoard) || (player === 0)) return []

  let symbol = someBoard[tempRow][tempCol].symbol

  if ((symbol !== 'LR') && (symbol !== 'GR')) return computeMoves(symbol, row, col, someBoard)
  // TODO: what the fuck does this part do
  else if (symbol === 'LR' || symbol === 'GR') return computeKingMoves(row, col, someBoard[row][col].player, someBoard)
}

function computeJesterMoves(row: number, col: number, player: number, someBoard: square[][]) {

  let possibleMoves: piece_position[] = [];
  let tempRow: number;
  let tempCol: number;

  //Square to the right
  tempRow = row + 1
  tempCol = col

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  //Square to the left
  tempRow = row - 1
  tempCol = col

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  //Square to the top right diagonal
  tempRow = row + 1
  tempCol = col - 1

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  //Square to the bottom right diagonal
  tempRow = row + 1
  tempCol = col + 1

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  //Square to the bottom left diagonal
  tempRow = row - 1
  tempCol = col + 1

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  //Square to the right top right diagonal
  tempRow = row - 1
  tempCol = col - 1

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  //Square to the bottom
  tempRow = row
  tempCol = col + 1

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  //Square to the top
  tempRow = row
  tempCol = col - 1

  possibleMoves = possibleMoves.concat(findJesterMoves(row, col, tempRow, tempCol, someBoard))

  return possibleMoves
}

// exports
exports.computeMoves = computeMoves
