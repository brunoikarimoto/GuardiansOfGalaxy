import styles from "./Navbar.module.css";

import peter from "../assets/members/card-peter-quill.png";
import gamora from "../assets/members/card-gamora.png";
import drax from "../assets/members/card-drax.png";
import mantis from "../assets/members/card-mantis.png";
import rocket from "../assets/members/card-rocket.png";
import groot from "../assets/members/card-groot.png";

import { useScrollContext } from "../hooks/useScrollContext";

const Navbar = ({ active, setActive }) => {
  const { setScroll } = useScrollContext();

  const handleClick = (pos) => {
    setActive(false);
    setScroll(pos);
  };

  return (
    <nav
      className={
        active ? `${styles.navigation} ${styles.show}` : styles.navigation
      }
    >
      <strong>Personagens</strong>

      <div>
        <button type="button" onClick={() => handleClick(0)}>
          <img src={peter} alt="Peter Quill" />
        </button>
        <button type="button" onClick={() => handleClick(1)}>
          <img src={gamora} alt="Gamora" />
        </button>
        <button type="button" onClick={() => handleClick(2)}>
          <img src={drax} alt="Drax" />
        </button>
        <button type="button" onClick={() => handleClick(3)}>
          <img src={mantis} alt="Mantis" />
        </button>
        <button type="button" onClick={() => handleClick(4)}>
          <img src={rocket} alt="Rocket Raccoon" />
        </button>
        <button type="button" onClick={() => handleClick(5)}>
          <img src={groot} alt="Groot" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
