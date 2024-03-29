import { Board } from '@/components/board/Board';
import { WinnerTable } from '@/components/winner-table/WinnerTable';
import { checkDraw } from '@/utils/check-draw';
import { checkHorizontal } from '@/utils/check-horizontal';
import { checkLeftDiagonal } from '@/utils/check-left-diagonal';
import { checkRightDiagonal } from '@/utils/check-right-diagonal';
import { checkVertical } from '@/utils/check-vertical';
import { CIRCLE_SIGN, CROSS_SIGN } from '@/utils/const';
import { useCallback, useEffect, useState } from 'react';

const firstPlayerSign = CROSS_SIGN;
const secondPlayerSign = CIRCLE_SIGN;

export const GameBar = () => {
  const [winner, setWinner] = useState<null | string>(null);
  const [winnerPositions, setWinnerPositions] = useState<null | number[][]>([]);

  const [currStepCount, setCurrStepCount] = useState<number>(0);

  const [board, setField] = useState<string[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const handleResetGame = () => {
    setWinner(null);
    setWinnerPositions(null);
    setField([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  };

  const checkWinner = useCallback(() => {
    checkDraw(board, setWinner);

    const h = checkHorizontal(board, setWinner);

    const v = checkVertical(board, setWinner);
    const ld = checkLeftDiagonal(board, setWinner);

    const rd = checkRightDiagonal(board, setWinner);

    const winnerPositions = h ?? v ?? ld ?? rd;

    if (winnerPositions) {
      setWinnerPositions(winnerPositions);
    }
    return null;
  }, [board]);

  const handleStepPlayer = (col: string, rowIndex: number, columnIndex: number) => {
    if (winner ?? col !== '') {
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
    <div className='flex flex-col items-center justify-center'>
      <WinnerTable winner={winner} />
      <Board
        board={board}
        onStepPlayer={handleStepPlayer}
        winnerPositions={winnerPositions}
      />

      <button
        className='dark:text-green-500: mt-3 text-sm font-medium text-green-700 hover:text-green-800'
        onClick={handleResetGame}
      >
        Reset game
      </button>
    </div>
  );
};
