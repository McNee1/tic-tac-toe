import { Board } from '@/components/board/Board';
import { Button } from '@/components/button/Button';
import { DarkMode } from '@/components/dark-mode/DarkMode';
import { ScoreCount } from '@/components/score-count/ScoreCount';
import { Toggle } from '@/components/toggle/Toggle';
import { WinnerTable } from '@/components/winner-table/WinnerTable';
import { CIRCLE_SIGN, CROSS_SIGN } from '@/utils/constants';
import { getClassForCircle, getClassForCross } from '@/utils/lib';

import circle from '../assets/circle.svg';
import cross from '../assets/cross.svg';
import { useBotStep } from './hooks/useBotStep';
import { useGameController } from './hooks/useGameController';
import { useScoreCount } from './hooks/useScoreCount';

const SIGN_MAP: Record<string, string> = {
  [CIRCLE_SIGN]: circle,
  [CROSS_SIGN]: cross,
};

export const GameBar = () => {
  const {
    board,
    checkWinner,
    currStepCount,
    handleResetGame,
    handleStepPlayer,
    setBoard,
    setCurrStepCount,
    winner,
    winnerPositions,
  } = useGameController();

  const { isBotActive, isBotStepping, setIsBotActive } = useBotStep(
    currStepCount,
    board,
    setCurrStepCount,
    setBoard,
    checkWinner
  );

  const { scoreWinCount } = useScoreCount(winner);

  return (
    <>
      <div className='mb-3 flex justify-between'>
        <DarkMode />
        <Toggle
          checked={isBotActive}
          onChange={(e) => {
            setIsBotActive(e.target.checked);
          }}
          text='Play with bot'
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='inline-flex gap-x-4'>
          <ScoreCount
            className={getClassForCross(winner, currStepCount, CROSS_SIGN)}
            signImg={cross}
            winCount={scoreWinCount.cross}
          />
          <ScoreCount
            className={getClassForCircle(winner, currStepCount, CIRCLE_SIGN)}
            signImg={circle}
            winCount={scoreWinCount.circle}
          />
        </div>
        <WinnerTable
          signMap={SIGN_MAP}
          winner={winner}
        />
        <Board
          board={board}
          onStepPlayer={isBotStepping ? null : handleStepPlayer}
          signMap={SIGN_MAP}
          winnerPositions={winnerPositions}
        />

        <Button
          className='mt-3 text-sm font-medium text-green-700 hover:text-green-800 dark:text-green-500'
          onClick={handleResetGame}
        >
          Reset game
        </Button>
      </div>
    </>
  );
};
