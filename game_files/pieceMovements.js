// MODULE : Piece Movement module
// Exports a number of functions pertaining to the potential movement of pieces
// Module only contains pure functions and makes no changes to game state
//

// Given a piece's symbol, row and col in a board, 
// returns all of it's possible moves
// FIXME: Check if LR and GR are behaving appopriately

const boardFunctions = require('./board.js')

// Returns the moves given the symbol of a piece, it's position in the board
// and the board
function computeMoves (symbol, row, col, someBoard) {
  let player = someBoard[row][col].player

  if (symbol.includes('K')) return computeKingMoves(row, col, player, someBoard)
  else if (symbol.includes('J')) return computeJesterMoves(row, col, player, someBoard)
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

// Checks if the square in which the piece is trying to move to is
// occupied by a piece of the same side
function isNotBlockedSquare(row, col, tempRow, tempCol, someBoard) {

  let playerCurrentlyMoving = someBoard[row][col].player
  let squareOccupant = someBoard[tempRow][tempCol].player

  return (playerCurrentlyMoving === squareOccupant) ? false : true
}

// Checks if a move is a valid King move
// TODO : make this a pure function?
function isValidKingMove (row, col, tempRow, tempCol, possibleMoves, player, someBoard) {

  let isWithinbBoard = boardFunctions.withinBoard(tempRowow, tempColol)
  let isNotBlocked = isNotBlockedSquare(row, col, tempRowow, tempColol, someBoard)

  if (isWithinbBoard) {
    if (isNotBlocked) {
      let move = {
        row: tempRow,
        col: tempCol
      }
      possibleMoves.push(move)
    }
  }

  return possibleMoves
}

// Finds all the possible moves of a King from a given
// row and column and board position
function computeKingMoves (row, col, player, someBoard) {
  let possibleMoves = [], tempRowow, tempColol

  //case 1
  tempRow = row
  tempCol = col - 1
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 2
  tempRow = row
  tempCol = col + 1
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 3
  tempRow = row - 1
  tempCol = col
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 4
  tempRow = row - 1
  tempCol = col - 1
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 5
  tempRow = row - 1
  tempCol = col + 1
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 6
  tempRow = row + 1
  tempCol = col
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 7
  tempRow = row + 1
  tempCol = col - 1
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  //case 8
  tempRow = row + 1
  tempCol = col + 1
  possibleMoves = isValidKingMove(row, col, tempRow, tempCol, possibleMoves, player, someBoard)

  return possibleMoves
}

function computePikeMoves (row, col, player, someBoard) {

	let possibleMoves = []
  let tempRow
  let tempCol

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

function computeGreaterPikeMoves (row, col, player, someBoard) {

	let possibleMoves = []
  let tempRow
  let tempCol

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

function computeLanceMoves (row, col, player, someBoard) {

	let possibleMoves = []
  let tempRow
  let tempCol

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

function computeGreaterLanceMoves (row, col, player, someBoard) {

	let possibleMoves = []
  let tempRow
  let tempCol

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

function computeSwordMoves(row, col, player, someBoard){
  return computeLanceMoves(row, col, player, someBoard).concat(computePikeMoves(row, col, player, someBoard))
}

function computeLongSwordMoves(row, col, player, someBoard){
  return computeGreaterLanceMoves(row, col, player, someBoard).concat(computeGreaterPikeMoves(row, col, player, someBoard))
}


function computePawnMoves (row, col, player, someBoard) {
  let possibleMoves = []
  let move = {}

  // depending on who the pawn belongs to, it will move in different directions
  move.row = (player === 2) ? (row + 1) : (row - 1)
  move.col = col

  let isBlocked = isNotBlockedSquare(row, col, move.row, move.col, someBoard)
  let isWithinBoard = boardFunctions.withinBoard(move.row, move.col)

  if (isBlocked && isWithinBoard) possibleMoves.push(move)

  return possibleMoves
}

function computeJavelinMoves (row, col, player, someBoard) {

	let possibleMoves = []
  let tempRow
  let tempCol

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

// Helper function that computes whether a move is a valid move for a Rook
// or an Arrow
//
function rookArrowCheck (tempRow, tempCol, player, someBoard) {
  let thisPlayer = someBoard[tempRow][tempCol].player

  // if flag is false, it means that some earlier square was blocked - EXIT
  // if the move is not withinBoard - EXIT
  if (!(boardFunctions.withinBoard(tempRow, tempCol))) return false
  if (thisPlayer === player) return false

  // if the square is blocked, then you cannot go any further than that square
  return (thisPlayer === 0)
}

function computeRookMoves (row, col, player, someBoard) {
  let possibleMoves = []
  let tempRow
  let tempCol

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
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : ascendingColFlag = false
    }

    if (ascendingRowFlag) {
      tempRow = row + counter
      tempCol = col

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : ascendingRowFlag = false
    }

    if (descendingRowFlag) {
      tempRow = row - counter
      tempCol = col

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : descendingRowFlag = false
    }

    if (descendingColFlag) {
      tempRow = row
      tempCol = col - counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : descendingColFlag = false
    }
  }
  return possibleMoves
}

function computeArrowMoves (row, col, player, someBoard) {
  let possibleMoves = []
  let tempRow
  let tempCol

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
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : rightTopFlag = false
    }

    if (rightBottomFlag) {
      tempRow = row + counter
      tempCol = col - counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : rightBottomFlag = false
    }

    if (leftTopFlag) {
      tempRow = row - counter
      tempCol = col + counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : leftTopFlag = false
    }

    if (leftBottomFlag) {
      tempRow = row - counter
      tempCol = col - counter

      rookArrowCheck(tempRow, tempCol, player, someBoard)
        ? possibleMoves.push({row: tempRow, col: tempCol})
        : leftBottomFlag = false
    }
  }
  return possibleMoves
}

function computeMinisterMoves (row, col, player, someBoard) {
  let rookMoves = computeRookMoves(row, col, player, someBoard)
  let arrowMoves = computeArrowMoves(row, col, player, someBoard)

  return rookMoves.concat(arrowMoves)
}

// TODO: write this
function findJesterMoves (row, col, tempRow, tempCol, someBoard) {

  let isWithinBoard = boardFunctions.withinBoard(tempRow, tempCol)
  let player = someBoard[tempRow][tempCol].player

  // no squares can be found on this round, so return an empty array
  if (!(isWithinBoard) || (player === 0)) return []

  let symbol = someBoard[tempRow][tempCol].symbol

  if ((symbol !== 'LR') && (symbol !== 'GR')) return computeMoves(symbol, row, col, someBoard)
  // TODO: what the fuck does this part do
  else if (symbol === 'LR' || symbol === 'GR') return computeKingMoves(row, col, someBoard[row][col].player, someBoard)
}

function computeJesterMoves (row, col, player, someBoard) {
  let possibleMoves = []
  let tempRow, tempCol

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
