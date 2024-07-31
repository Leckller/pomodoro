import { useContext } from 'react';
import Context from './Context';

function ButtonTimer({ bgColor }: { bgColor: string }) {
  const { mainColor: { setMainColor } } = useContext(Context);
  return (
    <button
      onClick={ () => setMainColor(bgColor) }
      className={ `size-10 rounded-full ${bgColor}` }
    >
      <span className="absolute invisible">.</span>
    </button>
  );
}

export default ButtonTimer;
