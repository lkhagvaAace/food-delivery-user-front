import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  alertVisible: boolean;
  setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const iContextState = {
  alertVisible: false,
  setAlertVisible: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const AlertVisibleContext =
  createContext<ThemContextType>(iContextState);
export const AlertVisiblity = ({ children }: ChildrenType) => {
  const [alertVisible, setAlertVisible] = useState<true | false>(false);
  return (
    <AlertVisibleContext.Provider value={{ alertVisible, setAlertVisible }}>
      {children}
    </AlertVisibleContext.Provider>
  );
};
