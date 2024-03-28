export const checkDraw = (board: string[][], setWinner: (s: string) => void) => {
  let isDraw = true;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '') {
        isDraw = false;
        break;
      }
    }
    if (!isDraw) {
      break;
    }
  }

  if (isDraw) {
    setWinner('draw');
  }
};
