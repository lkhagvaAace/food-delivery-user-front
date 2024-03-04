import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  isFoodDetailVisible: boolean;
  setIsFoodDetailVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const iContextState = {
  isFoodDetailVisible: false,
  setIsFoodDetailVisible: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const isFoodDetailVisibleContext =
  createContext<ThemContextType>(iContextState);
export const Fooddetail = ({ children }: ChildrenType) => {
  const [isFoodDetailVisible, setIsFoodDetailVisible] = useState<true | false>(
    false
  );
  return (
    <isFoodDetailVisibleContext.Provider
      value={{ isFoodDetailVisible, setIsFoodDetailVisible }}
    >
      {children}
    </isFoodDetailVisibleContext.Provider>
  );
};
