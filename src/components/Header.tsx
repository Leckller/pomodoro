import { useContext, useState } from 'react';
import Context from './Context';

function Header() {
  const [option, setOption] = useState<0 | 1 | 2 | 3>(0);
  const {
    optionTimer: { optionTime },
    timer: { setTimer, timeRef, setStart },
    mainColor: { mainColor },
  } = useContext(Context);
  const selected = `text-[#1e2140] ${mainColor}`;

  return (
    <header
      className="flex flex-col justify-around w-screen h-[35%]
        text-center font-bold items-center"
    >
      <h1 className="text-3xl">pomodoro</h1>
      <section
        className="flex scale-110 flex-row max-w-[500px] w-[80%] justify-around
         bg-[#151932] h-12 p-1 rounded-3xl text-[#61657e]"
      >
        <button
          className={ `w-[30%] p-2 rounded-3xl flex-grow text-sm
              ${option === 0 ? selected : ''} transition-all` }
          onClick={ () => {
            const newTimer = optionTime.pomodoro;
            setTimer(newTimer);
            timeRef.current = newTimer.totalTime();
            setOption(0);
          } }
        >
          pomodoro
        </button>
        <button
          className={ `w-[30%] p-2 rounded-3xl flex-grow text-sm
              ${option === 1 ? selected : ''}  transition-all` }
          onClick={ () => {
            setStart(false);
            const newTimer = optionTime.intervalShort;
            setTimer(newTimer);
            timeRef.current = newTimer.totalTime();
            setOption(1);
          } }
        >
          intervalo curto
        </button>
        <button
          className={ `w-[30%] p-2 rounded-3xl flex-grow text-sm
              ${option === 2 ? selected : ''}  transition-all` }
          onClick={ () => {
            setStart(false);
            const newTimer = optionTime.intervalLong;
            setTimer(newTimer);
            timeRef.current = newTimer.totalTime();
            setOption(2);
          } }
        >
          intervalo longo
        </button>
      </section>
    </header>
  );
}

export default Header;
