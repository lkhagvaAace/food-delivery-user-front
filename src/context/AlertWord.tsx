import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  alertWord: string;
  setAlertWord: React.Dispatch<React.SetStateAction<string>>;
};
const iContextState = {
  alertWord: "",
  setAlertWord: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const AlertWordContext = createContext<ThemContextType>(iContextState);
export const AlertWord = ({ children }: ChildrenType) => {
  const [alertWord, setAlertWord] = useState("");
  return (
    <AlertWordContext.Provider value={{ alertWord, setAlertWord }}>
      {children}
    </AlertWordContext.Provider>
  );
};
