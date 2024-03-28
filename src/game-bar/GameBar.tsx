import { Board } from '@/components/board/Board';
import { useState } from 'react';

const INIT_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

export const GameBar = () => {
  const [board, setField] = useState<string[][]>(INIT_BOARD);

  return (
    <div className='m-auto max-w-[800px] rounded-md border border-green-200 p-4 dark:border-green-700'>
      <Board board={board} />
    </div>
  );
};
