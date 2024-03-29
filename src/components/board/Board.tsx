import { getWinnerBgClass } from '@/utils/lib';
import clsx from 'clsx/lite';

interface BoardProps {
  board: string[][];
  onStepPlayer: (col: string, rowIndex: number, columnIndex: number) => void;
  signMap: Record<string, string>;
  winnerPositions: null | number[][];
}

export const Board = ({ board, onStepPlayer, signMap, winnerPositions }: BoardProps) => {
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
                src={signMap[col]}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};
