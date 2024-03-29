import { CIRCLE_SIGN, CROSS_SIGN, DRAW } from './const';

const BORDER_ClASS = 'border-2 border-green-500';

export const getClassForCross = (
  winner: null | string,
  currStepCount: number,
  sign: string
) => {
  if (winner === DRAW) {
    return;
  } else if (winner === sign) {
    return BORDER_ClASS;
  } else if (winner !== CIRCLE_SIGN && currStepCount % 2 === 0) {
    return BORDER_ClASS;
  }
  return;
};

export const getClassForCircle = (
  winner: null | string,
  currStepCount: number,
  sign: string
) => {
  if (winner === DRAW) {
    return;
  } else if (winner === sign || winner === DRAW) {
    return BORDER_ClASS;
  } else if (winner !== CROSS_SIGN && currStepCount % 2 !== 0) {
    return BORDER_ClASS;
  }
  return;
};
