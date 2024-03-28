export const checkLeftDiagonal = (board: string[][], setWinner: (s: string) => void) => {
  const tmp = board[0][0];
  const winnerPositions = [];

  let winner = true;

  for (let i = 0; i < board.length; i++) {
    if (tmp !== board[i][i] || tmp === '') {
      winner = false;
      break;
    }
    if (tmp === board[i][i]) {
      winnerPositions.push([i, i]);
    }
  }
  if (winner) {
    setWinner(tmp);
    return winnerPositions;
  }
};
