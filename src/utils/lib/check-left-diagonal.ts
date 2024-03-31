export const checkLeftDiagonal = (board: string[][]) => {
  const tmp = board[0][0];
  let winnerPositions = [];

  let winner = true;

  for (let i = 0; i < board.length; i++) {
    if (tmp !== board[i][i] || tmp === '') {
      winnerPositions = [];
      winner = false;
      break;
    }
    if (tmp === board[i][i]) {
      winnerPositions.push([i, i]);
    }
  }
  if (winner) {
    return winnerPositions;
  }
};
