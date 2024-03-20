import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  headerValue: string;
  setHeaderValue: React.Dispatch<React.SetStateAction<string>>;
};
const iContextState = {
  headerValue: "",
  setHeaderValue: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const HeaderValueContext = createContext<ThemContextType>(iContextState);
export const InputValue = ({ children }: ChildrenType) => {
  const [headerValue, setHeaderValue] = useState("");
  return (
    <HeaderValueContext.Provider value={{ headerValue, setHeaderValue }}>
      {children}
    </HeaderValueContext.Provider>
  );
};
