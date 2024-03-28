export const checkRightDiagonal = (board: string[][], setWinner: (s: string) => void) => {
  const winnerPositions = [];
  const tmp = board[0][board.length - 1];

  let winner = true;

  for (let i = 0; i < board.length; i++) {
    const diagonal = board[i][board.length - 1 - i];

    if (tmp !== diagonal || tmp === '') {
      winner = false;
      break;
    }
    if (tmp === diagonal) {
      winnerPositions.push([i, board.length - 1 - i]);
    }
  }
  if (winner) {
    setWinner(tmp);
    return winnerPositions;
  }
};
