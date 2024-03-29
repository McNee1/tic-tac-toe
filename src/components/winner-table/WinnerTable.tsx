import { DRAW } from '@/utils/constants/const';

interface WinnerTableProps {
  signMap: Record<string, string>;
  winner: null | string;
}

export const WinnerTable = ({ signMap, winner }: WinnerTableProps) => {
  return (
    <>
      {winner && (
        <div className='absolute inline-flex items-center gap-x-2 rounded-md bg-white/90 p-3 text-xl font-medium'>
          {winner === DRAW ? (
            DRAW
          ) : (
            <>
              <span>Winner:</span>
              <img
                alt={winner}
                className='h-6 w-6'
                src={signMap[winner]}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};
