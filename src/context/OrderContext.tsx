import { Food } from "@/types/foodType";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

type ThemContextType = {
  order: Food[][];
  setOrder: React.Dispatch<React.SetStateAction<Food[][]>>;
};

const iContextState: ThemContextType = {
  order: [],
  setOrder: () => {},
};

type ChildrenType = {
  children: ReactNode;
};

export const OrderContext = createContext<ThemContextType>(iContextState);

export const Order = ({ children }: ChildrenType) => {
  const [order, setOrder] = useState<Food[][]>([]);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
