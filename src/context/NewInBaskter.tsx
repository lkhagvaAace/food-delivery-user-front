import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  newInBasket: boolean;
  setNewInBasket: React.Dispatch<React.SetStateAction<boolean>>;
};
const iContextState = {
  newInBasket: false,
  setNewInBasket: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const NewInBasketContext = createContext<ThemContextType>(iContextState);
export const NewInBasket = ({ children }: ChildrenType) => {
  const [newInBasket, setNewInBasket] = useState<true | false>(false);
  return (
    <NewInBasketContext.Provider value={{ newInBasket, setNewInBasket }}>
      {children}
    </NewInBasketContext.Provider>
  );
};
