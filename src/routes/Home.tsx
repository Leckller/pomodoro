import { useContext } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import Context from '../components/Context';

function Home() {
  const { popup: { popup } } = useContext(Context);

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-[#1e2140] text-[#d7e0ff] relative
      flex justify-center items-center flex-col"
    >
      <Header />

      <Main />

      <Footer />

      {popup && (
        <Popup />
      )}

    </div>
  );
}

export default Home;
