import { ReactNode, useState } from 'react';
import Context from './Context';
import useTime, { Timer } from '../hooks/useTimer';

function Provider({ children }: { children: ReactNode }) {
  const [timer, setTimer, start, setStart, timeRef] = useTime();
  const [mainColor, setMainColor] = useState('bg-[#ff6e72]');
  const [optionTime, setOptionTime] = useState<{
    pomodoro: Timer,
    intervalShort: Timer,
    intervalLong: Timer,
  }>({
    pomodoro: new Timer(0, 45),
    intervalLong: new Timer(0, 20),
    intervalShort: new Timer(0, 5) });
  const [popup, setPopup] = useState(false);
  const [option, setOption] = useState<0 | 1 | 2>(0);

  return (
    <Context.Provider
      value={ {
        mainColor: {
          mainColor,
          setMainColor,
        },
        optionTimer: {
          optionTime,
          setOptionTime,
        },
        popup: {
          popup,
          setPopup,
        },
        timer: {
          timer,
          setTimer,
          start,
          setStart,
          timeRef,
        },
        option: {
          option,
          setOption,
        },
      } }
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
