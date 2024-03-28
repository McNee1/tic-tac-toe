import { Board } from '@/components/board/Board';
import { WinnerTable } from '@/components/winner-table/WinnerTable';
import { checkDraw } from '@/utils/check-draw';
import { checkHorizontal } from '@/utils/check-horizontal';
import { checkLeftDiagonal } from '@/utils/check-left-diagonal';
import { checkRightDiagonal } from '@/utils/check-right-diagonal';
import { checkVertical } from '@/utils/check-vertical';
import { CIRCLE_SIGN, CROSS_SIGN } from '@/utils/const';
import { useCallback, useEffect, useState } from 'react';

const INIT_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const firstPlayerSign = CROSS_SIGN;
const secondPlayerSign = CIRCLE_SIGN;

export const GameBar = () => {
  const [winner, setWinner] = useState<null | string>(null);
  const [winnerPositions, setWinnerPositions] = useState<number[][]>([]);

  const [currStepCount, setCurrStepCount] = useState<number>(0);

  const [board, setField] = useState<string[][]>(INIT_BOARD);

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
    <div className='m-auto max-w-[800px] rounded-md border border-green-200 p-4 dark:border-green-700'>
      <div className='flex flex-col items-center justify-center'>
        <WinnerTable winner={winner} />
        <Board
          board={board}
          onStepPlayer={handleStepPlayer}
        />
      </div>
    </div>
  );
};
