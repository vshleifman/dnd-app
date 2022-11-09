import { useAppDispatch, useAppSelector } from '../../store';
import { playerSelector } from '../../selectors';
import Tooltip from '../../components/Tooltip';
import * as Dialog from '@radix-ui/react-dialog';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import { setCurrentHitPoints, setTempHitPoints } from './playerSlice';
import { useState } from 'react';

const HealthBar = () => {
  const player = useAppSelector(playerSelector);

  const dispatch = useAppDispatch();

  const HPpercent = (player.currentHitPoints / player.maxHitPoints) * 100;
  const tempHPpercent = (player.tempHitPoints / player.maxHitPoints) * 100;

  const [amount, setAmount] = useState(0);
  const [HPDisplay, setHPDisplay] = useState('');
  const [isChangingTemp, setIsChangingTemp] = useState(false);

  const addHp = () => {
    if (isChangingTemp) {
      dispatch(setTempHitPoints(player.tempHitPoints + amount));
    } else {
      dispatch(setCurrentHitPoints(player.currentHitPoints + amount));
    }
  };

  const subtractHp = () => {
    let remainder = amount;
    if (player.tempHitPoints > 0) {
      remainder = player.tempHitPoints - amount;
      if (remainder >= 0) {
        dispatch(setTempHitPoints(remainder));
      } else {
        dispatch(setTempHitPoints(0));
        dispatch(setCurrentHitPoints(player.currentHitPoints + remainder));
      }
    } else {
      dispatch(setCurrentHitPoints(player.currentHitPoints - amount));
    }
  };

  const displayHp = () => {
    setHPDisplay(
      `${player.currentHitPoints} / ${player.maxHitPoints}${
        player.tempHitPoints ? ` ( +${player.tempHitPoints} )` : ''
      }`,
    );
  };

  const hideHp = () => {
    setHPDisplay('');
  };

  return (
    <div className="w-[35vw]">
      <Dialog.Root modal={true}>
        <Dialog.Trigger className="w-full">
          <div className="grid m-4" style={{ gridTemplateColumns: `${100 - tempHPpercent}% ${tempHPpercent}%` }}>
            <span
              onMouseOver={displayHp}
              onMouseOut={hideHp}
              className="col-start-1 col-end-3 row-start-1 z-10 text-white font-medium p-1 text-xs"
            >
              {HPDisplay}
            </span>
            <div
              className="grid col-start-1 row-start-1"
              style={{ gridTemplateColumns: `${HPpercent}% ${100 - HPpercent}%` }}
            >
              <div
                className={`${
                  player.currentHitPoints ? 'bg-red-800 border-2 border-black' : 'border-0'
                } h-6 rounded-l-xl 
            shadow-[inset_0_0_3px_1px_gold]
              
              `}
              ></div>

              <div
                className={`${
                  player.currentHitPoints ? 'border-2 border-black border-l-0' : 'border-2 border-black rounded-l-xl'
                } 
            ${player.tempHitPoints ? 'border-2' : 'rounded-r-xl'}
            bg-stone-600
            shadow-[inset_0_0_3px_1px_gold]
            h-6`}
              ></div>
            </div>

            <div
              className={`
            col-start-2 row-start-1
            ${player.tempHitPoints ? 'border-2 border-black border-l-0' : 'border-0'} h-6 rounded-r-xl bg-green-600 
            shadow-[inset_0_0_3px_1px_gold]
            `}
            ></div>
          </div>
        </Dialog.Trigger>
        <Dialog.Overlay className="bg-black opacity-25 fixed inset-0" />
        <Dialog.Content
          className="border rounded-lg 
            drop-shadow-xl
            fixed top-1/2 left-1/2
            -translate-x-1/2
            -translate-y-1/2
           bg-white border-black
            w-fit
            p-4 grid
           "
        >
          <Dialog.Title className="text-xl font-bold">Change Hit Points</Dialog.Title>
          <div className="grid grid-cols-[auto_auto]">
            <span className="grid grid-rows-2">
              <label htmlFor="amount">Amount to change: </label>
              <input
                id="amount"
                onChange={e => setAmount(+e.target.value)}
                className="border p-1 border-black rounded-md"
                type="number"
              />
            </span>
            <span className="grid grid-rows-2">
              <label htmlFor="isTemp">Temporary HP</label>
              <input
                checked={isChangingTemp}
                onChange={() => setIsChangingTemp(!isChangingTemp)}
                id="isTemp"
                type="checkbox"
                className=""
              />
            </span>
          </div>
          <div className="grid grid-cols-2 m-2">
            <Dialog.Close onClick={addHp} className="drop-shadow-md border border-black rounded-md m-2 bg-neutral-300">
              Add HP
            </Dialog.Close>
            <Dialog.Close
              onClick={subtractHp}
              className="drop-shadow-md border border-black rounded-md m-2 bg-neutral-300"
            >
              Subtract HP
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

{
  /* <button
  className="grid place-items-center rounded-br-2xl
  hover:bg-red-800 hover:text-white transition-all p-1
  shadow-[inset_0_0_3px_1px_black]
  border border-black bg-emerald-500  drop-shadow-lg"
>
  <MinusIcon className="w-5 h-5" />
</button> */
}
export default HealthBar;
