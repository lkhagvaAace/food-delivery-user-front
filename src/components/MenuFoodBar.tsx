import React, { useContext } from "react";
import { data } from "./Mock";
import { FoodInfoContext } from "@/context/FoodDetail";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";

export const MenuFoodBar = () => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { foodInfo, setFoodInfo } = useContext(FoodInfoContext);
  return (
    <div className="flex flex-wrap gap-8 w-11/ min-h-screen justify-center items-center my-8">
      {data?.map((el) => {
        return (
          <button
            onClick={() => {
              // setFoodInfo(el);
              setIsFoodDetailVisible(true);
            }}
            className="w-1/5 flex flex-col justify-center gap-2 text-black"
          >
            <img src={`${el.img}`} />
            <p className="text-xl font-semibold">{el.foodName}</p>
            <p className="text-xl font-semibold text-green-500">
              {el.price.toLocaleString()}₮
            </p>
          </button>
        );
      })}
    </div>
  );
};
