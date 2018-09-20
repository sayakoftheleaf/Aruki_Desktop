//
// MODULE : Board Manipulation Functions
// Exports a number of functions related to board manipulation
// Module only contains pure functions and makes no changes to game state
//


// Sets up the default empty sqaure that has no pieces on it
//
// NOTE (technical) : This cannot be annoymous because one of
// the local functions uses it.
function defaultSquare() {
	return {
		player: 0,
		symbol: '#'
	}
}
exports.defaultSquare = defaultSquare

// Creates a new Board with all defaultSquares in them
function setUpFreshBoard() {
	let newBoard = []
	for (let i = 0; i <= 11; i++) {
		let col = []
		for (let j = 0; j <= 11; j++) {
			col[j] = defaultSquare()
		}
		newBoard[i] = col;
	}
	return newBoard
}

//Initializes a board 
function initBoard(someBoard) {

	// Rooks
	someBoard[0][0].symbol = 'R1'
	someBoard[11][0].symbol = 'R1'
	someBoard[0][11].symbol = 'R2'
	someBoard[11][11].symbol = 'R2'

	// ArsomeBoards
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
function copyBoard(originalBoard) {
	return originalBoard.map(col => global.deepCopy(col))
};

// Returns a string representation of the board
// (without any indication of which pieces belong to which player)
function stringBoard(someBoard) {
	someBoard = someBoard.map((col) => {
		return col.reduce((accum, square) => accum + square.symbol + '\t', '')
	})

	return someBoard.reduce((accum, col) => accum + col + '\n', '')
}

// Checks whether a move is within the Board
function withinBoard(someRow, someCol) {
	return ((someRow <= 11) && (someRow >= 0))
		? ((someCol <= 11) && (someCol >= 0)) ? true : false
		: false
}

// Finds the position of a piece of a side and
// returns an object comprised of the row and column.
function positionOf(symbol, someBoard, player) {
	for (let a = 0; a <= 11; a++) {
		for (let b = 0; b <= 11; b++) {
			(someBoard[a][b].symbol.includes(symb) && player === someBoard[a][b].player)
				? return { row: a, col: b }
		}
	}
}

// Checks if the square in which the piece is trying to move to is
// occupied by a piece of the same side
function isNotBlockedSquare(someRow, someCol, tempRow, tempCol, someBoard) {
	return someBoard[someRow][someCol].player === someBoard[tempRow][tempCol].player ? false : true
}

exports.setUpFreshBoard = setUpFreshBoard
exports.initBoard = initBoard
exports.copyBoard = copyBoard
exports.stringBoard = stringBoard
exports.withinBoard = withinBoard
exports.positionOf = positionOf
exports.isNotBlockedSquare = isNotBlockedSquare

