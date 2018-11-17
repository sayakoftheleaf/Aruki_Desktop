// Interfaces are snake case
interface square {
  player: number;
  symbol: string;
}

interface piece {
  symbol: string;
  row: number;
  col: number;
}

interface piece_position {
  row: number;
  col: number;
}

interface captured_pieces {
  player1: string[];
  player2: string[];
}

interface game_state {
  presentMove: number; // This may be unnecessary
  playerMove: number;
  capturedPieces: captured_pieces;
  mainBoard: square[][];
  selectedPiece: piece;
  possibleMoves: piece[];
  clickedPieceFromCapturedTray: string;
}

// TODO: export the interfaces