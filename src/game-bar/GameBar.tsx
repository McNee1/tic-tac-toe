import { Board } from '@/components/board/Board';
import { useCallback, useEffect, useState } from 'react';

const INIT_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const firstPlayerSign = 'X';
const secondPlayerSign = 'O';

export const GameBar = () => {
  const [winner, setWinner] = useState<null | string>(null);
  const [winnerPositions, setWinnerPositions] = useState<number[][]>([]);

  const [currStepCount, setCurrStepCount] = useState<number>(0);

  const [board, setField] = useState<string[][]>(INIT_BOARD);

  const checkWinner = useCallback(() => {
    const checkHorizontal = () => {
      for (let i = 0; i < board.length; i++) {
        const row = board[i];
        const tmp = row[0];
        const winnerPositions = [];

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

    const checkVertical = () => {
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

    const checkLeftDiagonal = () => {
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

    const checkRightDiagonal = () => {
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

    const checkDraw = () => {
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

    checkDraw();

    const h = checkHorizontal();
    const v = checkVertical();
    const ld = checkLeftDiagonal();

    const rd = checkRightDiagonal();

    const winnerPositions = h ?? v ?? ld ?? rd;

    if (winnerPositions) {
      setWinnerPositions(winnerPositions);
    }
    return winnerPositions;
  }, [board]);

  const handleStepPlayer = (col: string, rowIndex: number, columnIndex: number) => {
    if (col !== '') {
      return;
    }

    setField((prevField) => {
      const copyField = [...prevField];
      copyField[rowIndex][columnIndex] =
        currStepCount % 2 === 0 ? firstPlayerSign : secondPlayerSign;

      return copyField;
    });
    setCurrStepCount(currStepCount + 1);
  };

  useEffect(() => {
    const positions = checkWinner();
    console.log(positions, winner, winnerPositions);
  }, [checkWinner, currStepCount]);

  return (
    <div className='m-auto max-w-[800px] rounded-md border border-green-200 p-4 dark:border-green-700'>
      <Board
        board={board}
        onStepPlayer={handleStepPlayer}
      />
    </div>
  );
};
