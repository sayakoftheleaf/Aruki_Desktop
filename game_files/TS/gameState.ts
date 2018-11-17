//
// MODULE : Game State Object
// Maintains the current state of the game
// As well as provide some global utility functions
//

// TODO: import interfaces

// The initial game state when the game starts
var gameState: game_state = {
  // TODO: what's the difference between presentMove and playerMove
  presentMove: 1,
  playerMove: 1,
  capturedPieces: {
    player1: [],
    player2: []
  },
  mainBoard: [],
  selectedPiece: {
    symbol: `#`,
    row: -1,
    col: -1
  },
  possibleMoves: [],
  clickedPieceFromCapturedTray: '#'
}

// Utility functions to Interact with the Game State

exports.deepCopy = (anArr: any[]): any[] => Array.from(anArr)
exports.printGameState = () => console.log(gameState)

// TODO: figure out if we need to do this
exports.pushSquares = (row: number, col: number,
  arr: piece_position[], player: number) => {
  arr.push({
    row: row,
    col: col
  })
}

// --------------------------------------------------------------------------- //
//                                                                             //
//                                GET FUNCTIONS                                //
//                                                                             //
// --------------------------------------------------------------------------- //

exports.getPlayerMove = (): number => gameState.playerMove;
// exports.getPresentMove = () => gameState.presentMove;
exports.getMainBoard = (): square[][] => gameState.mainBoard;
exports.getCapturedPiecesOfPlayer1 = (): string[] => gameState.capturedPieces.player1;
exports.getCapturedPiecesOfPlayer2 = (): string[] => gameState.capturedPieces.player2;
exports.getSelectedPiece = (): piece => gameState.selectedPiece;
exports.getPossibleMoves = (): piece[] => gameState.possibleMoves;
exports.getClickedPieceFromCapturedTray =
  (): string => gameState.clickedPieceFromCapturedTray;

// --------------------------------------------------------------------------- //
//                                                                             //
//                                SET FUNCTIONS                                //
//                                                                             //
// --------------------------------------------------------------------------- //

exports.setPlayerMove =
  (newMove: number): void => { gameState.playerMove = newMove; }
// exports.setPresentMove = (newMove) => { gameState.presentMove = newMove; }
exports.setMainBoard =
  (someBoard: square[][]): void => { gameState.mainBoard = someBoard; }

exports.addToCapturedForPlayer1 =
  (captured: string): void => { gameState.capturedPieces.player1.push(captured); }

exports.addToCapturedForPlayer2 =
  (captured: string): void => { gameState.capturedPieces.player2.push(captured); }

exports.removeFromCapturedTray =
  (symbol: string, player: number): void => {
    let captured: string[] = (player === 1) ?
        gameState.capturedPieces.player1 :
        gameState.capturedPieces.player2;

    for (let a = 0; a < captured.length; a++) {
      if (captured[a].includes(symbol)) {
        captured.splice(a, 1);
        return;
      }
    }
  }

exports.setSelectedPiece = (selectedPiece: piece): void => {
  gameState.selectedPiece = selectedPiece;
}

exports.setSelectedPieceToDefault = (): void => {
  gameState.selectedPiece = { symbol: `#`, row: -1, col: -1 }
}
exports.setPossibleMoves = (possibleMoves: piece[]) => {
  gameState.possibleMoves = possibleMoves;
}

exports.setPossibleMovesToNone = (): void => {
  gameState.possibleMoves = [];
}

exports.setClickedPieceFromCapturedTray = (clickedPiece: string): void => {
  gameState.clickedPieceFromCapturedTray = clickedPiece;
}

exports.setClickedPieceFromCapturedTrayToDefault = (): void => {
  gameState.clickedPieceFromCapturedTray = `#`;
}

exports.gameState = gameState;
