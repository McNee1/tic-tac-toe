import { useState } from 'react';

import { Board } from './components/board/Board';

export const App = () => {
  const [board, setField] = useState<string[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  return (
    <div className='container m-auto mt-4 px-5'>
      <div className=' max-w-[800px] rounded-md border border-green-200 p-4 dark:border-green-700'>
        <Board board={board} />
      </div>
    </div>
  );
};
