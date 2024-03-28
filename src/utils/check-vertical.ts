export const checkVertical = (board: string[][], setWinner: (s: string) => void) => {
  const winnerPositions = [];

  for (let i = 0; i < board.length; i++) {
    const tmp = board[0][i];

    let winner = true;

    for (let j = 0; j < board[i].length; j++) {
      const col = board[j][i];

      if (tmp !== col || tmp === '') {
        winner = false;
        break;
      }
      if (tmp === col) {
        winnerPositions.push([j, i]);
      }
    }
    if (winner) {
      setWinner(tmp);
      return winnerPositions;
    }
  }
};
