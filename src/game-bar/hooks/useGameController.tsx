import { CIRCLE_SIGN, CROSS_SIGN, SIGN_POSITION } from '@/utils/constants';
import {
  checkDraw,
  checkHorizontal,
  checkLeftDiagonal,
  checkRightDiagonal,
  checkVertical,
} from '@/utils/lib';
import { useCallback, useEffect, useState } from 'react';

export const useGameController = () => {
  const [winner, setWinner] = useState<null | string>(null);
  const [winnerPositions, setWinnerPositions] = useState<null | number[][]>([]);

  const [currStepCount, setCurrStepCount] = useState<number>(0);

  const [board, setBoard] = useState<string[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const checkWinner = useCallback(() => {
    checkDraw(board, setWinner);

    const horizontalPositions = checkHorizontal(board);
    const verticalPositions = checkVertical(board);
    const leftDiagonalPositions = checkLeftDiagonal(board);
    const rightDiagonalPositions = checkRightDiagonal(board);

    const winnerPositions =
      horizontalPositions ??
      verticalPositions ??
      leftDiagonalPositions ??
      rightDiagonalPositions;

    if (winnerPositions) {
      const [col, row] = winnerPositions[SIGN_POSITION];
      setWinner(board[col][row]);
      setWinnerPositions(winnerPositions);
      return true;
    }

    return false;
  }, [board]);

  const handleStepPlayer = (col: string, rowIndex: number, columnIndex: number) => {
    if (winner ?? col !== '') {
      return;
    }

    setBoard((prevField) => {
      const copyField = [...prevField];
      copyField[rowIndex][columnIndex] =
        currStepCount % 2 === 0 ? CROSS_SIGN : CIRCLE_SIGN;

      return copyField;
    });
    setCurrStepCount(currStepCount + 1);
  };

  const handleResetGame = () => {
    setWinner(null);
    setWinnerPositions(null);
    setCurrStepCount(0);
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  };

  useEffect(() => {
    checkWinner();
  }, [checkWinner, currStepCount]);

  return {
    board,
    checkWinner,
    currStepCount,
    handleResetGame,
    handleStepPlayer,
    setBoard,
    setCurrStepCount,
    winner,
    winnerPositions,
  };
};
