function computePikeMoves (r, c, player, someBoard) {

	let tempSquares = []
  let tempRow
  let tempCol
	var blockedFlag

	//case 1
	tempr = r + 1;
	tempc = c + 1;
  checkKing(r, c, tempr, tempc, tempSquares, player, someBoard)
  
	//case 2
	tempr = r -1;
	tempc = c - 1;
	checkKing(r, c, tempr, tempc, tempSquares, player, someBoard)

	//case 3
	tempr = r - 1;
	tempc = c + 1;
	checkKing(r, c, tempr, tempc, tempSquares, player, someBoard)

	//case 4
	tempr = r + 1;
	tempc = c - 1;
	checkKing(r, c, tempr, tempc, tempSquares, player, someBoard)

	return tempSquares;
};
