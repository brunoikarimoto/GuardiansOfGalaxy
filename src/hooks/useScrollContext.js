import { useContext } from "react";

import { ScrollContext } from "../context/ScrollContext";

export const useScrollContext = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    console.log("Contexto não encontrado!");
  }

  return context;
};
