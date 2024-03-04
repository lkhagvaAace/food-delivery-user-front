import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  isBasketBarVisible: boolean;
  setIsBasketBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const iContextState = {
  isBasketBarVisible: false,
  setIsBasketBarVisible: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const isBasketBarVisibleContext =
  createContext<ThemContextType>(iContextState);
export const BasketBarVisiblity = ({ children }: ChildrenType) => {
  const [isBasketBarVisible, setIsBasketBarVisible] = useState<true | false>(
    false
  );
  return (
    <isBasketBarVisibleContext.Provider
      value={{ isBasketBarVisible, setIsBasketBarVisible }}
    >
      {children}
    </isBasketBarVisibleContext.Provider>
  );
};
