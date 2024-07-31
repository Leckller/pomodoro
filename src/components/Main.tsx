import { useContext } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import Context from './Context';
import 'react-circular-progressbar/dist/styles.css';

function Main() {
  const {
    timer: { timer, timeRef, setStart, start },
    mainColor: { mainColor },
  } = useContext(Context);

  return (
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
  );
}

export default Main;
