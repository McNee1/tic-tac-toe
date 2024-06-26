export const getEmptyCols = (array: string[][]): number[][] => {
  const empty = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '') {
        empty.push([i, j]);
      }
    }
  }
  return empty;
};
