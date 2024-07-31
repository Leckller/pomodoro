import Clock from '../components/Clock';
import useTime, { Timer } from '../hooks/useTimer';

function Home() {
  const [timer, setTimer, start, setStart] = useTime();

  return (
    <div>
      <header>
        <h1>Pomodoro</h1>
        <section>
          <button>pomodoro</button>
          <button
            onClick={ () => {
              setStart(false);
              setTimer(new Timer(0, 15));
            } }
          >
            intervalo curto
          </button>
          <button
            onClick={ () => {
              setStart(false);
              setTimer(new Timer(0, 45));
            } }
          >
            intervalo longo
          </button>
        </section>
      </header>
      <main>
        <article>
          <Clock time={ timer } />
          <input
            type="range"
          />
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
