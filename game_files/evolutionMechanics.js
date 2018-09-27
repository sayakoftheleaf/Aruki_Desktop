
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

// given a board, a piece's position and the symbol, and the symbol of the piece
// from the captured list it's intending to evolve with, determines whether the
// capture is valid or not and returns the appropriately modified board.
function evolvePiece(row, col, symbolClicked, symbolCaptured, someBoard) {
	let square = someBoard[row][col]
	if (!(square.symbol.includes(symbolClicked))) return someBoard

	let capturedPieceList = (square.player === 1) ?
			stateFunctions.getCapturedPlayer1() :
			stateFunctions.getCapturedPlayer2()

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
