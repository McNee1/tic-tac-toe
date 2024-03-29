import { getLastElements } from './get-last-elements';

export const getWinnerBgClass = (
  arr: null | number[][],
  rowId: number,
  colId: number
) => {
  if (!arr) {
    return;
  }
  const lastThreeElements = getLastElements(arr, 3);

  return lastThreeElements.some(([i, j]) => i === rowId && j === colId)
    ? 'bg-green-400'
    : '';
};
