import { useState, createContext } from "react";

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  return (
    <ScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
