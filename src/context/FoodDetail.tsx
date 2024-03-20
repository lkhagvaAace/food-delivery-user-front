import { Food } from "@/types/foodType";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  foodInfo: Food;
  setFoodInfo: React.Dispatch<React.SetStateAction<Food>>;
};

// Initial value should be null for foodInfo and a function for setFoodInfo
const InitialValue: ThemContextType = {
  foodInfo: {
    _id: "",
    name: "",
    price: 0,
    _v: 0,
    category: "",
    isSale: {
      isSale: false,
      salePercent: 0,
    },
    img: "",
    ingredients: "",
    count: 0,
  },
  setFoodInfo: () => {},
};

type ChildrenType = {
  children: ReactNode;
};

export const FoodInfoContext = createContext<ThemContextType>(InitialValue);

export const FoodInfo = ({ children }: ChildrenType) => {
  const [foodInfo, setFoodInfo] = useState<Food>({
    _id: "",
    name: "",
    price: 0,
    _v: 0,
    category: "",
    isSale: {
      isSale: false,
      salePercent: 0,
    },
    img: "",
    ingredients: "",
    count: 0,
  });

  return (
    <FoodInfoContext.Provider value={{ foodInfo, setFoodInfo }}>
      {children}
    </FoodInfoContext.Provider>
  );
};
