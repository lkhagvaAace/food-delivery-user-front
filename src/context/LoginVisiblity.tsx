import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  isLoginVisible: boolean;
  setIsLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const iContextState = {
  isLoginVisible: false,
  setIsLoginVisible: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const isLoginVisibleContext =
  createContext<ThemContextType>(iContextState);
export const LoginVisiblity = ({ children }: ChildrenType) => {
  const [isLoginVisible, setIsLoginVisible] = useState<true | false>(false);
  return (
    <isLoginVisibleContext.Provider
      value={{ isLoginVisible, setIsLoginVisible }}
    >
      {children}
    </isLoginVisibleContext.Provider>
  );
};
