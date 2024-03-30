import { CIRCLE_SIGN, CROSS_SIGN } from '@/utils/constants';
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

  const [board, setField] = useState<string[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const checkWinner = useCallback(() => {
    checkDraw(board, setWinner);

    const hPos = checkHorizontal(board, setWinner);

    const vPos = checkVertical(board, setWinner);
    const ldPos = checkLeftDiagonal(board, setWinner);

    const rdPos = checkRightDiagonal(board, setWinner);

    const winnerPositions = hPos ?? vPos ?? ldPos ?? rdPos;

    if (winnerPositions) {
      setWinnerPositions(winnerPositions);
    }
  }, [board]);

  const handleStepPlayer = (col: string, rowIndex: number, columnIndex: number) => {
    if (winner ?? col !== '') {
      return;
    }

    setField((prevField) => {
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
    setField([
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
    currStepCount,
    handleResetGame,
    handleStepPlayer,
    winner,
    winnerPositions,
  };
};
