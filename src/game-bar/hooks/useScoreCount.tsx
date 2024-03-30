import { CIRCLE_SIGN, CROSS_SIGN } from '@/utils/constants';
import { useEffect, useState } from 'react';

interface ScoreCountType {
  circle: number;
  cross: number;
}

export const useScoreCount = (winner: null | string) => {
  const [scoreWinCount, setScoreWinCount] = useState<ScoreCountType>({
    circle: 0,
    cross: 0,
  });

  useEffect(() => {
    if (winner === CROSS_SIGN) {
      setScoreWinCount((prev) => {
        return {
          ...prev,
          cross: prev.cross + 1,
        };
      });
    }
    if (winner === CIRCLE_SIGN) {
      setScoreWinCount((prev) => {
        return {
          ...prev,
          circle: prev.circle + 1,
        };
      });
    }
  }, [winner]);

  return { scoreWinCount };
};
