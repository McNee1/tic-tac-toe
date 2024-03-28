export const checkHorizontal = (board: string[][], setWinner: (s: string) => void) => {
  const winnerPositions = [];

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const tmp = row[0];

    let winner = true;

    for (let j = 0; j < row.length; j++) {
      if (tmp !== row[j] || tmp === '') {
        winner = false;
        break;
      }
      if (tmp === row[j]) {
        winnerPositions.push([i, j]);
      }
    }
    if (winner) {
      setWinner(tmp);
      return winnerPositions;
    }
  }
};
