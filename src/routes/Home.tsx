/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { FaGear } from 'react-icons/fa6';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import useTime, { Timer } from '../hooks/useTimer';
import 'react-circular-progressbar/dist/styles.css';

function Home() {
  const [timer, setTimer, start, setStart, timeRef] = useTime();
  const [option, setOption] = useState<0 | 1 | 2 | 3>(0);
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

  const selected = `text-[#1e2140] ${mainColor}`;

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-[#1e2140] text-[#d7e0ff] relative
      flex justify-center items-center flex-col"
    >
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
              pathColor: mainColor.split('[')[1].split(']')[0],
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
        <button onClick={ () => setPopup(!popup) }>
          <FaGear className="text-4xl" />
        </button>
      </footer>

      {popup && (
        <form
          onSubmit={ (e) => e.preventDefault() }
          className="absolute bg-white rounded-lg
            max-w-[550px] max-h-[550px] w-[80vw] h-[80vh]
            text-black font-medium text-xl
            "
        >
          <header className="flex flex-row justify-between p-6 border-b-2">
            <h1 className="text-2xl font-semibold">
              Configurações
            </h1>
            <button
              className="font-bold text-gray-400"
              onClick={ () => setPopup(false) }
            >
              X
            </button>
          </header>
          <main className="flex flex-col gap-10 p-5">
            <section className="border-b-2 pb-5 flex flex-col gap-5">
              <h2>Tempo ( Minutos )</h2>
              <article className="flex flex-row w-full justify-between">
                <label className="w-[30%]">
                  <p className="text-sm text-[#b1b1b7]">pomodoro</p>
                  <input
                    className="max-w-[25vw] w-[150px] p-2 rounded-md
                   bg-[#eef1fa]"
                    type="number"
                    min={ 0 }
                    value={ (optionTime.pomodoro.totalTime() / 60).toFixed() }
                    max={ 60 }
                    onChange={ ({ target: { value } }) => {
                      setOptionTime({
                        ...optionTime,
                        pomodoro: new Timer(0, +value),
                      });
                    } }
                  />
                </label>

                <label className="w-[30%]">
                  <p className="text-sm text-[#b1b1b7]">intervalo curto</p>
                  <input
                    className="max-w-[25vw] w-[150px] p-2 rounded-md
                   bg-[#eef1fa]"
                    type="number"
                    min={ 0 }
                    max={ 60 }
                    value={ (optionTime.intervalShort.totalTime() / 60).toFixed() }
                    onChange={ ({ target: { value } }) => {
                      setOptionTime({
                        ...optionTime,
                        intervalShort: new Timer(0, +value),
                      });
                    } }
                  />
                </label>

                <label className="w-[30%]">
                  <p className="text-sm text-[#b1b1b7]">intervalo longo</p>
                  <input
                    className="max-w-[25vw] w-[150px] p-2 rounded-md
                   bg-[#eef1fa]"
                    type="number"
                    min={ 0 }
                    max={ 60 }
                    value={ (optionTime.intervalLong.totalTime() / 60).toFixed() }
                    onChange={ ({ target: { value } }) => {
                      setOptionTime({
                        ...optionTime,
                        intervalLong: new Timer(0, +value),
                      });
                    } }
                  />
                </label>

              </article>
            </section>
            {/* <section className="border-b-2 pb-5 flex justify-between flex-row">
              <h2>Fonte</h2>
              <article className="flex flex-row gap-5">
                <button className="size-10 rounded-full">a</button>
                <button className="size-10 rounded-full">a</button>
                <button className="size-10 rounded-full">a</button>
              </article>
            </section> */}
            <section className="flex justify-between flex-row">
              <h2>Cor</h2>
              <article className="flex flex-row gap-5">
                <button
                  onClick={ () => setMainColor('bg-[#ff6e72]') }
                  className="size-10 rounded-full bg-[#ff6e72]"
                />
                <button
                  onClick={ () => setMainColor('bg-[#6ff2f8]') }
                  className="size-10 rounded-full bg-[#6ff2f8]"
                />
                <button
                  onClick={ () => setMainColor('bg-[#de82ff]') }
                  className="size-10 rounded-full bg-[#de82ff]"
                />
              </article>
            </section>
          </main>
          <div
            className="absolute bottom-0 w-full translate-y-3 text-center"
          >
            <button
              onClick={ () => setPopup(false) }
              className={ `${mainColor} p-4 rounded-[30px]` }
            >
              Aplicar Mudanças
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Home;
