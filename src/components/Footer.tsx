import { useContext } from 'react';
import { FaGear } from 'react-icons/fa6';
import Context from './Context';

function Footer() {
  const {
    popup: {
      popup,
      setPopup,
    },
  } = useContext(Context);

  return (
    <footer>
      <button onClick={ () => setPopup(!popup) }>
        <span className="invisible absolute">.</span>
        <FaGear className="text-4xl" />
      </button>
    </footer>
  );
}

export default Footer;
