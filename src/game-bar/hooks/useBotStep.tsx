import { CIRCLE_SIGN } from '@/utils/constants';
import { getEmptyCols } from '@/utils/lib';
import { getRandomNum } from '@/utils/lib/get-random-num';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useBotStep = (
  currStepCount: number,
  board: string[][],
  setCurrStepCount: Dispatch<SetStateAction<number>>,
  setBoard: Dispatch<SetStateAction<string[][]>>,
  checkWinner: () => boolean
) => {
  const [isBotStepping, setIsBotStepping] = useState(false);

  const [isBotActive, setIsBotActive] = useState(false);
  useEffect(() => {
    const botStep = (delayForStep: number) => {
      const isWinner = checkWinner();

      if (!isBotActive || isWinner) {
        return;
      }

      if (currStepCount % 2 !== 0) {
        const emptyCols = getEmptyCols(board);

        if (!emptyCols.length) {
          return;
        }

        setIsBotStepping(true);

        const randomNum = getRandomNum(emptyCols.length - 1);

        const [col, row] = emptyCols[randomNum];

        setTimeout(() => {
          setBoard((prev) => {
            const copyField = [...prev];
            copyField[col][row] = CIRCLE_SIGN;
            return copyField;
          });
          setIsBotStepping(false);
          setCurrStepCount((prev) => prev + 1);
        }, delayForStep);
      }
    };
    botStep(500);
  }, [board, checkWinner, currStepCount, isBotActive, setCurrStepCount, setBoard]);

  return { isBotActive, isBotStepping, setIsBotActive };
};
