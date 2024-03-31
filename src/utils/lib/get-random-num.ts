export const getRandomNum = (max: number) => {
  const rand = 0 + Math.random() * (max + 1 - 0);
  return Math.floor(rand);
};
