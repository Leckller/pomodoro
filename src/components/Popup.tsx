import { useContext } from 'react';
import Context from './Context';
import InputTimer from './InputTimer';
import ButtonTimer from './ButtonTimer';

function Popup() {
  const {
    popup: { setPopup }, mainColor: { mainColor },
    optionTimer: { optionTime },
    timer: { setTimer, timeRef },
    option: { setOption },
  } = useContext(Context);

  return (
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
          <article
            className="flex flex-row w-full justify-around flex-wrap

          "
          >

            <InputTimer optionName="pomodoro" title="pomodoro" />
            <InputTimer optionName="intervalShort" title="intervalo curto" />
            <InputTimer optionName="intervalLong" title="intervalo longo" />

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

        <section className="flex justify-between flex-row flex-wrap">
          <h2>Cor</h2>
          <article className="flex flex-row gap-5">

            <ButtonTimer bgColor="bg-[#ff6e72]" />
            <ButtonTimer bgColor="bg-[#6ff2f8]" />
            <ButtonTimer bgColor="bg-[#de82ff]" />

          </article>
        </section>

      </main>
      <div
        className="absolute bottom-0 w-full translate-y-5 text-center"
      >
        <button
          onClick={ () => {
            const newTimer = optionTime.pomodoro;
            setTimer(newTimer);
            timeRef.current = newTimer.totalTime();
            setOption(0);
            setPopup(false);
          } }
          className={ `${mainColor} p-3 rounded-[30px]` }
        >
          Aplicar Mudanças
        </button>
      </div>
    </form>
  );
}

export default Popup;
