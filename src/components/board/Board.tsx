import { getWinnerBgClass } from '@/utils/get-winner-bg-class';
import clsx from 'clsx/lite';

import circle from '../../assets/circle.svg';
import cross from '../../assets/cross.svg';

interface BoardProps {
  board: string[][];
  onStepPlayer: (col: string, rowIndex: number, columnIndex: number) => void;
  winnerPositions: number[][];
}

const SIGN_MAP: Record<string, string> = {
  O: circle,
  X: cross,
};

export const Board = ({ board, onStepPlayer, winnerPositions }: BoardProps) => {
  return (
    <div className='m-auto grid h-fit w-fit grid-cols-3 border border-gray-100 dark:border-0'>
      {board.map((row, rowIndex) =>
        row.map((col, columnIndex) => (
          <div
            className={clsx(
              columnIndex !== row.length - 1 && 'border-r-2',
              rowIndex !== row.length - 1 && 'border-b-2',
              'flex h-16 w-16 items-center justify-center border-gray-500',
              getWinnerBgClass(winnerPositions, rowIndex, columnIndex)
            )}
            key={`${col}${String(columnIndex)}`}
            onClick={() => {
              onStepPlayer(col, rowIndex, columnIndex);
            }}
          >
            {col && (
              <img
                alt={col}
                src={SIGN_MAP[col]}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};
