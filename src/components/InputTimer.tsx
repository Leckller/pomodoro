import { useContext } from 'react';
import { Timer } from '../hooks/useTimer';
import Context from './Context';

function InputTimer({ optionName, title }:
{ optionName: 'pomodoro' | 'intervalLong' | 'intervalShort',
  title: string,
}) {
  const {
    optionTimer: {
      optionTime,
      setOptionTime,
    },
  } = useContext(Context);

  return (
    <label className="flex flex-col">
      <p className="text-sm text-[#b1b1b7]">{title}</p>
      <input
        className="w-[150px] p-2 rounded-md
                   bg-[#eef1fa] flex-grow"
        type="number"
        min={ 0 }
        value={ (optionTime[optionName].totalTime() / 60).toFixed() }
        max={ 60 }
        onChange={ ({ target: { value } }) => {
          setOptionTime({
            ...optionTime,
            [optionName]: new Timer(0, +value),
          });
        } }
      />
    </label>
  );
}

export default InputTimer;
