
const global = require('./globalComponents.js')
// module that exports a number of board functionality

var defaultSquare = () => {
	return {
		player: 0,
		symbol: '#'
	}
}

exports.defaultSquare = defaultSquare

exports.setUpFreshBoard = () => {
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
exports.initBoard = (someBoard) => {
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
exports.copyBoard = (originalBoard) => {
	return originalBoard.map(col => global.deepCopy(col))
};

exports.stringBoard = (someBoard) => {

	let strBoard = ''

	let colArr = someBoard.map(col => {
		let str = ''
		col.forEach(element => {
			// console.log(element.symbol)
			str = str + element.symbol + '\t'
		})
		return str
	})

	colArr.forEach(element => {
		strBoard += element + '\n'
	})
	
	return strBoard
}