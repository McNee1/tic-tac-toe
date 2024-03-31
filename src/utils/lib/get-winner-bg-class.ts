export const getWinnerBgClass = (
  arr: null | number[][],
  rowId: number,
  colId: number
) => {
  if (!arr) {
    return;
  }

  return arr.some(([i, j]) => i === rowId && j === colId) && 'bg-green-400';
};
