import { Food } from "@/types/foodType";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

type ThemContextType = {
  foodInfo: Food | null;
  setFoodInfo: React.Dispatch<React.SetStateAction<Food | null>>;
};

const InitialValue: ThemContextType = {
  foodInfo: null,
  setFoodInfo: () => {},
};

type ChildrenType = {
  children: ReactNode;
};

export const FoodInfoContext = createContext<ThemContextType>(InitialValue);

export const FoodInfo = ({ children }: ChildrenType) => {
  const [foodInfo, setFoodInfo] = useState<Food | null>(null);

  return (
    <FoodInfoContext.Provider value={{ foodInfo, setFoodInfo }}>
      {children}
    </FoodInfoContext.Provider>
  );
};
