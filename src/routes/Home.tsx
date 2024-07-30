import Clock from '../components/Clock';
import useTime from '../hooks/useTimer';

function Home() {
  const timer = useTime();
  return (
    <div>
      <header>
        <h1>Pomodoro</h1>
        <section>
          <button>pomodoro</button>
          <button>intervalo curto</button>
          <button>intervalo longo</button>
        </section>
      </header>
      <main>
        <article>
          <Clock time={ timer } />
          <input
            type="range"
          />
          <button>
            Pausar
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
