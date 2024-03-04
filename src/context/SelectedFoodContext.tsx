import { Food } from "@/types/foodType";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

type ThemContextType = {
  selectedFoods: Food[];
  setSelectedFoods: Dispatch<SetStateAction<Food[]>>;
};

const iContextState: ThemContextType = {
  selectedFoods: [],
  setSelectedFoods: () => {},
};

type ChildrenType = {
  children: ReactNode;
};

export const SelectedFoodContext =
  createContext<ThemContextType>(iContextState);

export const SelectedFoods = ({ children }: ChildrenType) => {
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);

  return (
    <SelectedFoodContext.Provider value={{ selectedFoods, setSelectedFoods }}>
      {children}
    </SelectedFoodContext.Provider>
  );
};
