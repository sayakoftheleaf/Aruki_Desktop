//
// MODULE : Piece Movement module
// Exports a number of functions pertaining to the potential movement of pieces
// Module only contains pure functions and makes no changes to game state
//

// 
// Given a piece's symbol, row and col in a board, 
// returns all of it's possible moves
// 
// FIXME: Check if LR and GR are behaving appopriately
// 
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

// exports
exports.computeMoves = computeMoves
