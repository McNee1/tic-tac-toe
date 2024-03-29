import { Board } from '@/components/board/Board';
import { ScoreCount } from '@/components/score-count/ScoreCount';
import { WinnerTable } from '@/components/winner-table/WinnerTable';
import { CIRCLE_SIGN, CROSS_SIGN } from '@/utils/constants';
import {
  checkDraw,
  checkHorizontal,
  checkLeftDiagonal,
  checkRightDiagonal,
  checkVertical,
  getClassForCircle,
  getClassForCross,
} from '@/utils/lib';
import { useCallback, useEffect, useState } from 'react';

import circle from '../assets/circle.svg';
import cross from '../assets/cross.svg';

const firstPlayerSign = CROSS_SIGN;
const secondPlayerSign = CIRCLE_SIGN;

const SIGN_MAP: Record<string, string> = {
  [firstPlayerSign]: cross,
  [secondPlayerSign]: circle,
};

export const GameBar = () => {
  const [crossWinCount, setCrossWinCount] = useState<number>(0);
  const [circleWinCount, setCircleWinCount] = useState<number>(0);

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
    checkWinner();
  }, [checkWinner, currStepCount]);

  useEffect(() => {
    if (winner === firstPlayerSign) {
      setCrossWinCount((prev) => prev + 1);
    }
    if (winner === secondPlayerSign) {
      setCircleWinCount((prev) => prev + 1);
    }
  }, [winner]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='inline-flex gap-x-4'>
        <ScoreCount
          className={getClassForCross(winner, currStepCount, CROSS_SIGN)}
          signImg={cross}
          winCount={crossWinCount}
        />
        <ScoreCount
          className={getClassForCircle(winner, currStepCount, CIRCLE_SIGN)}
          signImg={circle}
          winCount={circleWinCount}
        />
      </div>
      <WinnerTable
        signMap={SIGN_MAP}
        winner={winner}
      />
      <Board
        board={board}
        onStepPlayer={handleStepPlayer}
        signMap={SIGN_MAP}
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
