//
// MODULE : Piece Movement module
// Exports a number of functions pertaining to the potential movement of pieces
// Module only contains pure functions and makes no changes to game state
//

// 
// Given a piece's symbol, row and col in a board, 
// returns all of it's possible moves
// FIXME: Check if LR and GR are behaving appopriately
// 

const boardFunctions = require('./board.js')

function computeMoves(symbol, r, c, someBoard) {
  let player = someBoard[r][c].player

  if (symb === "K") return computeKingMoves(r, c, player, someBoard)
  else if (symb.includes("J")) return computeJesterMoves(r, c, player, someBoard)
  else if (symb === "GR") {
    return computeGreaterRiverMoves(r, c, player, someBoard)
  }
  else if (symb === "LR") {
    return computeLesserRiverMoves(r, c, player, someBoard)
  }
  else if (symb.includes("MI")) return computeMinisterMoves(r, c, player, someBoard)
  else if (symb.includes("PP")) return computeGreaterPikeMoves(r, c, player, someBoard)
  else if (symb.includes("LL")) return computeGreaterLanceMoves(r, c, player, someBoard)
  else if (symb.includes("SS")) return computeLongSwordMoves(r, c, player, someBoard)
  else if (symb.includes("R")) return computeRookMoves(r, c, player, someBoard)
  else if (symb.includes("Z")) return computePawnMoves(r, c, player, someBoard)
  else if (symb.includes("A")) return computeArrowMoves(r, c, player, someBoard)
  else if (symb.includes("L")) return computeLanceMoves(r, c, player, someBoard)
  else if (symb.includes("P")) return computePikeMoves(r, c, player, someBoard)
  else if (symb.includes("S")) return computeSwordMoves(r, c, player, someBoard)
  else if (symb.includes("N")) return computeJavelinMoves(r, c, player, someBoard)
}

// Checks if the square in which the piece is trying to move to is
// occupied by a piece of the same side
function isNotBlockedSquare(row, col, tempRowow, tempColol, someBoard) {

  let playerCurrentlyMoving = someBoard[row][col].player
  let squareOccupant = someBoard[tempRow][tempCol].player

  return (playerCurrentlyMoving === squareOccupant) ? false : true
}

// Checks if a move is a valid King move
function possibleMoves = isValidKingMove(row, col, tempRowow, tempColol, possibleMoves, player, someBoard) {

  if (boardFunctions.withinBoard(tempRowow, tempColol)) {
    if (isNotBlockedSquare(row, col, tempRowow, tempColol, someBoard)) {
      let move = {
        row: tempRowow,
        col: tempColol
      }
      possibleMoves.push(move)
    }
  }

  return possibleMoves
}

// Finds all the possible moves of a King from a given
// row and column and board position
function computeKingMoves(row, col, player, someBoard) {
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

// Computes the movement of pawns
function computePawnMoves(row, col, player, someBoard) {

  let possibleMoves = [], move = { col: col }

  // depending on who the pawn belongs to, it will move in different directions
  move.row = (player === 2) ? row + 1 : row - 1

  let isBlocked = isNotBlockedSquare(row, col, move.row, move.col, someBoard)
  let isWithinBoard = withinBoard(move.row, move.col)
  if (isBlocked && isWithinBoard) possibleMoves.push(move)

  return possibleMoves
}

function findJesterMoves(row, col, tempRow, tempCol, someBoard) {

  let isWithinBoard = withinBoard(tempRow, tempCol)
  let player = someBoard[tempRow][tempCol].player

  // no squares can be found on this round, so return an empty array
  if (!(isWithinBoard) || (player === 0)) return []

  let symbol = someBoard[tempRow][tempCol].symbol

  if ((symbol !== "LR") && (symbol !== "GR")) return computeMoves(symbol, row, col, someBoard)
  // TODO: what the fuck does this part do
  else if (symbol === "LR" || symbol === "GR") return computeKingMoves(row, col, someBoard[row][col].player, someBoard)
}

function computeJesterMoves(row, col, player, someBoard){
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
  
	possibleMoves = possibleMoves.concat(findJesterMoves(r, c, tempRow, tempCol, someBoard))

	//Square to the bottom
	tempRow = row
	tempCol = col + 1

	possibleMoves = possibleMoves.concat(findJesterMoves(r, c, tempRow, tempCol, someBoard))

	//Square to the top
	tempRow = row
	tempCol = col - 1

	possibleMoves = possibleMoves.concat(findJesterMoves(r, c, tempRow, tempCol, someBoard))

	return possibleMoves
}

function computeMinisterMoves(row, col, player, someBoard){
  let possibleMoves = []
  let tempRow, tempCol

  possibleMoves = computeRookMoves(row, col, player, someBoard)
  possibleMoves = possibleMoves.concat(computeArrowMoves(row, col, player, someBoard))

  return possibleMoves
}

function rookArrowCheck(tempRow, tempCol, possibleMoves, player, someBoard, flag){
  if (!(withinBoard(tempRow, tempCol) && flag)) return flag

  let thisPlayer = someBoard[tempRow][tempCol].player
  if (thisPlayer === player) return false
  if (thisPlayer === 0) 

}
// exports
exports.computeMoves = computeMoves
