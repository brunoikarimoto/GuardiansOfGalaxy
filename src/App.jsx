//CSS
import "./App.css";

//IMAGES
import peterQuill from "./assets/members/peter-quill.png";
import gamora from "./assets/members/gamora.png";
import drax from "./assets/members/drax.png";
import mantis from "./assets/members/mantis.png";
import rocket from "./assets/members/rocket.png";
import groot from "./assets/members/groot.png";

import { useState, useEffect } from "react";
import { useScrollContext } from "./hooks/useScrollContext";

import { members } from "./data/data";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const { scroll, setScroll } = useScrollContext();
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(true);

  const scrollImages = (direction) => {
    setScroll(scroll + direction);
  };

  useEffect(() => {
    const anterior = scroll === 0;
    setPrev(anterior);

    const proximo = scroll === members.length - 1;
    setNext(proximo);
  }, [scroll]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <div className="background">
        <div
          className="images"
          style={{ transform: `translateY(${-100 * scroll}vh)` }}
        >
          <img src={peterQuill} alt="Peter Quill" />
          <img src={gamora} alt="Gamora" loading="lazy" />
          <img src={drax} alt="Drax" loading="lazy" />
          <img src={mantis} alt="Mantis" loading="lazy" />
          <img src={rocket} alt="Rocket Raccoon" loading="lazy" />
          <img src={groot} alt="Groot" loading="lazy" />
        </div>
      </div>

      <div className="principal">
        <Header />
        <Body scrollImages={scrollImages} prev={prev} next={next} />
      </div>
    </>
  );
}

export default App;
