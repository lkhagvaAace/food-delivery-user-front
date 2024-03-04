import React, { useContext, useEffect, useState } from "react";
import { data } from "./Mock";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { FoodInfoContext } from "@/context/FoodDetail";
import { Food } from "@/types/foodType";
import { getFoods } from "@/utilities/getFoods";

export const DashboardFoodBar = () => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const [foods, setFoods] = useState<Food[]>([]);
  const { foodInfo, setFoodInfo } = useContext(FoodInfoContext);
  const setFoodsFromDB = (data: Food[]) => {
    setFoods(data);
  };
  useEffect(() => {
    getFoods(setFoodsFromDB);
  }, []);
  return (
    <div
      className={`flex flex-wrap gap-8 w-11/12 min-h-screen justify-evenly my-8`}
    >
      {foods.length > 0 &&
        foods?.map((el) => {
          return (
            <button
              onClick={() => {
                setIsFoodDetailVisible(true);
                setFoodInfo(el);
              }}
              className="w-1/4 flex flex-col gap-2 text-black relative"
            >
              {el.isSale.isSale && (
                <div className="flex justify-end w-full h-fit absolute">
                  <div className="absolute bg-green-500 text-white font-semibold w-fit h-fit p-2 rounded-xl mt-2 mr-2 border-[1px] border-solid border-white">
                    {el.isSale.salePercent}%
                  </div>
                </div>
              )}
              <img
                src=""
                className="w-full h-48 border-2 border-solid border-red-500 rounded-lg"
              />
              <p className="font-bold text-xl">{el.name}</p>
              <div className="text-green-500 font-semibold">
                {el.isSale.isSale ? (
                  <div className="flex gap-2">
                    <p>{(el.price / 100) * (100 - el.isSale.salePercent)}₮</p>
                    <p className="line-through text-black">
                      {el.price.toLocaleString()}₮
                    </p>
                  </div>
                ) : (
                  <p>{el.price}</p>
                )}
              </div>
            </button>
          );
        })}
    </div>
  );
};
