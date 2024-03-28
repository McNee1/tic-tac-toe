// import { CIRCLE_SIGN, DRAW } from '@/utils/const';
import { CIRCLE_SIGN, DRAW } from '@/utils/const';

import circle from '../../assets/circle.svg';
import cross from '../../assets/cross.svg';

export const WinnerTable = ({ winner }: { winner: null | string }) => {
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
                src={winner === CIRCLE_SIGN ? circle : cross}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};
