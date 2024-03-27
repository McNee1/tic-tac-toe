import clsx from 'clsx/lite';

interface BoardProps {
  board: string[][];
}

export const Board = ({ board }: BoardProps) => {
  return (
    <div className='m-auto grid h-fit w-fit grid-cols-3 border border-gray-100 dark:border-0'>
      {board.map((row, rowIndex) =>
        row.map((col, columnIndex) => (
          <div
            className={clsx(
              columnIndex !== row.length - 1 && 'border-r-2',
              rowIndex !== row.length - 1 && 'border-b-2',
              'flex h-16 w-16 items-center justify-center border-gray-500'
            )}
            key={`${col}${String(columnIndex)}`}
          ></div>
        ))
      )}
    </div>
  );
};
