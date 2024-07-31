import { useState } from 'react';
import Clock from '../components/Clock';
import useTime, { Timer } from '../hooks/useTimer';

function Home() {
  const [timer, setTimer, start, setStart] = useTime();
  const [option, setOption] = useState<0 | 1 | 2 | 3>(0);
  const selected = 'text-[#1e2140] bg-[#ff6e72]';
  return (
    <div className="w-screen h-screen bg-[#1e2140] text-[#d7e0ff]">
      <header
        className="flex flex-col justify-around w-screen h-[35%]
        text-center font-bold items-center"
      >
        <h1 className="text-xl">pomodoro</h1>
        <section
          className="flex flex-row max-w-[500px] w-[80%] justify-around
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
              setTimer(new Timer(0, 15));
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
              setTimer(new Timer(0, 45));
              setOption(2);
            } }
          >
            intervalo longo
          </button>
        </section>
      </header>

      <main>
        <article className="shadow-[#9a9dab] shadow-2xl">
          <Clock time={ timer } />
          <button onClick={ () => { setStart(!start); } }>
            {`${start ? 'pause' : 'start'}`}
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
