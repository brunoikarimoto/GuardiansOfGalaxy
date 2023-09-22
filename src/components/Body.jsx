import styles from "./Body.module.css";

import { members } from "../data/data";

import { useState, useEffect } from "react";
import { useScrollContext } from "../hooks/useScrollContext";

import MemberName from "./MemberName";

const Body = ({ scrollImages, prev, next }) => {
  const { scroll } = useScrollContext();
  const [name, setName] = useState(members[0].name);
  const [classe, setClasse] = useState(members[0].id);

  useEffect(() => {
    setName(members[scroll].name);
    setClasse(members[scroll].id);
  }, [scroll]);

  return (
    <main>
      <MemberName name={name} classe={classe} />

      <div className={styles.btn_scroll}>
        <button type="button" onClick={() => scrollImages(-1)} disabled={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
            />
          </svg>
        </button>
        <button type="button" onClick={() => scrollImages(1)} disabled={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6l-6 6Z"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default Body;
