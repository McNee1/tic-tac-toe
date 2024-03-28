import { GameBar } from './game-bar/GameBar';

export const App = () => {
  return (
    <div className='container m-auto mt-4 px-5'>
      <div className='m-auto max-w-[800px] rounded-md border border-green-200 p-4 dark:border-green-700'>
        <GameBar />
      </div>
    </div>
  );
};
