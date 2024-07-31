import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import Clock from '../components/Clock';
import useTime, { Timer } from '../hooks/useTimer';
import 'react-circular-progressbar/dist/styles.css';

function Home() {
  const [timer, setTimer, start, setStart, timeRef] = useTime();
  const [option, setOption] = useState<0 | 1 | 2 | 3>(0);
  const selected = 'text-[#1e2140] bg-[#ff6e72]';
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#1e2140] text-[#d7e0ff]">
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
              const newTimer = new Timer(0, 15);
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
              const newTimer = new Timer(0, 45);
              setTimer(newTimer);
              timeRef.current = newTimer.totalTime();
              setOption(2);
            } }
          >
            intervalo longo
          </button>
        </section>
      </header>

      <main className="w-full flex justify-center h-[500px]">
        <article
          className="w-[275px] h-[275px] flex items-center justify-center
           flex-col shadow-[#000000bc] shadow-2xl rounded-full
           border-[20px] border-[#151932] relative bg-[#151932]"
        >
          <CircularProgressbar
            className="scale-105"
            value={ timer.totalTime() }
            maxValue={ timeRef.current }
            styles={ buildStyles({
              textColor: '#d7e0ff',
              pathColor: '#ff6e72',
              trailColor: '#151932',
              textSize: '20px',
            }) }
            text={ `${timer.hours}:${timer.minutes}:${timer.seconds}` }
          />
          <button
            className="translate-y-12 absolute"
            onClick={ () => { setStart(!start); } }
          >
            {`${start ? 'P A U S E' : 'S T A R T'}`}
          </button>
        </article>
      </main>

      <footer>
        <button>
          configurações
        </button>
      </footer>
    </div>
  );
}

export default Home;
