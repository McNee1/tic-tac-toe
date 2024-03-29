export const getLastElements = (arr: number[][], count: number): number[][] => {
  if (arr.length < count) {
    return arr;
  }
  return arr.slice(arr.length - count);
};
