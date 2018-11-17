// ----------------------------------------------------------------------
//                        PIECE EVOLUTION MODULE
// ----------------------------------------------------------------------

// ---------------------------------------------------------------------
//                        #  MODULE CHARACTERISTICS #
//
// Only contains pure functions and makes no changes to game state
//
// ---------------------------------------------------------------------


const stateFunctions = require('./gameState.js')

//
function computeEvolution(symbolClicked, symbolCaptured) {
	// greater pike evolution
	if (symbolClicked.includes('P') && symbolCaptured.includes('P')) return 'PP'

	// greater lance evolution
	if (symbolClicked.includes('L') && symbolCaptured.includes('L')) return 'LL'

	// Sword evolution
	if (symbolClicked.includes('L') && symbolCaptured.includes('P')) return 'S'
	if (symbolClicked.includes('P') && symbolCaptured.includes('L')) return 'S'

	// Long sword evolution
	if (symbolClicked.includes('S') && symbolCaptured.includes('S')) return 'SS'
	if (symbolClicked.includes('PP') && symbolCaptured.includes('LL')) return 'SS'
	if (symbolClicked.includes('LL') && symbolCaptured.includes('PP')) return 'SS'

	// Javelin evolution
	if (symbolClicked.includes('Z') && symbolCaptured.includes('Z')) return 'N'

	// Minister evolution
	if (symbolClicked.includes('R') && symbolCaptured.includes('A')) return 'MI'
	if (symbolClicked.includes('A') && symbolCaptured.includes('R')) return 'MI'

	// This is the default return if no valid evolutions are found
	return symbolClicked
}

// ----------------------------------------------------------------------------
// INPUT : - A Board
// 				 - A piece's position (row and column) and symbol
//  			 - Symbol of the piece clicked from the captured list
//
// PROCESSING: - Determines whether evolution is valid. If valid changes
//               the piece in the board into the evolved piece and deletes
//               the corresponding piece from the captured list. If not valid
//               leaves the board unchanged.
//
// OUTPUT: - The board passed in arguments (changed or unchanged)
// ----------------------------------------------------------------------------

function evolvePiece(row, col, symbolClicked, symbolCaptured, someBoard) {
	let square = someBoard[row][col]
	if (!(square.symbol.includes(symbolClicked))) return someBoard

	let capturedPieceList = (square.player === 1) ?
			stateFunctions.getCapturedPiecesOfPlayer1() :
			stateFunctions.getCapturedPiecesOfPlayer2()

	capturedPieceList.forEach(element => {
		if (element.includes(symbolCaptured)){
			square.symbol = computeEvolution(symbolClicked, symbolCaptured)
			stateFunctions.removeCaptured(symbolCaptured, square.player)
		}
	})

	return someBoard
}
//
exports.computeEvolution = computeEvolution
exports.evolvePiece = evolvePiece
