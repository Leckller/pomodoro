import { createContext, MutableRefObject } from 'react';
import { Timer } from '../hooks/useTimer';

export type ContextType = {
  timer: {
    timer: Timer,
    setTimer: (p: Timer) => void,
    start: boolean,
    setStart: (p: boolean) => void,
    timeRef: MutableRefObject<number>,
  },
  optionTimer: {
    optionTime: {
      pomodoro: Timer,
      intervalShort: Timer,
      intervalLong: Timer,
    },
    setOptionTime: (p: { pomodoro: Timer, intervalShort: Timer,
      intervalLong: Timer }) => void
  },
  mainColor: {
    mainColor: string,
    setMainColor: (p: string) => void,
  },
  popup: {
    popup: boolean,
    setPopup: (p: boolean) => void,
  }
};

const Context = createContext({} as ContextType);

export default Context;
