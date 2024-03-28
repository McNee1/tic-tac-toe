import { Board } from '@/components/board/Board';
import { useState } from 'react';

const INIT_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const firstPlayerSign = 'X';
const secondPlayerSign = 'O';

export const GameBar = () => {
  const [currStepCount, setCurrStepCount] = useState<number>(0);

  const [board, setField] = useState<string[][]>(INIT_BOARD);

  const handleStepPlayer = (col: string, rowIndex: number, columnIndex: number) => {
    if (col !== '') {
      return;
    }

    setField((prevField) => {
      const copyField = [...prevField];
      copyField[rowIndex][columnIndex] =
        currStepCount % 2 === 0 ? firstPlayerSign : secondPlayerSign;

      return copyField;
    });
    setCurrStepCount(currStepCount + 1);
  };

  return (
    <div className='m-auto max-w-[800px] rounded-md border border-green-200 p-4 dark:border-green-700'>
      <Board
        board={board}
        onStepPlayer={handleStepPlayer}
      />
    </div>
  );
};
