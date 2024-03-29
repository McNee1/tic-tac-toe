import clsx from 'clsx/lite';

interface ScoreCountProps {
  className?: string;
  signImg: string;
  winCount: number;
}

export const ScoreCount = ({ className, signImg, winCount }: ScoreCountProps) => {
  return (
    <div
      className={clsx(
        'mb-3 flex h-9 w-20 cursor-pointer justify-between rounded-md border border-gray-200 px-2 py-1',
        className
      )}
    >
      <img
        alt='cross'
        className='grow-0'
        src={signImg}
      />
      <span className='text-black dark:text-white'>{winCount ? winCount : '0'}</span>
    </div>
  );
};
