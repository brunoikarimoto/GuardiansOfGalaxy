import styles from "./Header.module.css";

import logo from "../assets/logo.png";

import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Guardians of Galaxy" />

      <button
        type="button"
        className={
          active ? `${styles.btn_menu} ${styles.active}` : `${styles.btn_menu}`
        }
        onClick={() => {
          if (active) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      >
        <span></span>
        <span />
        <span />
      </button>

      <Navbar active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
