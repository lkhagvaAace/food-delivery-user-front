import React, { useContext, useEffect, useMemo, useState } from "react";
import { FoodInfoContext } from "@/context/FoodDetail";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { Food } from "@/types/foodType";
import { getFoods } from "@/utilities/getFoods";

export const MenuFoodBar = ({ selectedCategory }: any) => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const [foods, setFoods] = useState<Food[]>([]);
  const [domFoods, setDomFoods] = useState<Food[]>([]);
  const setFoodsFromDB = (data: Food[]) => {
    setFoods(data);
    setDomFoods(data);
  };
  useEffect(() => {
    getFoods(setFoodsFromDB);
  }, []);
  const filteringbByCategory = useMemo(async () => {
    const filteredFoods = foods.filter(
      (el: Food) => el.category === selectedCategory
    );
    setDomFoods(filteredFoods);
  }, [selectedCategory]);
  return (
    <div className="flex w-full h-fit justify-start flex-wrap gap-16 pl-36">
      {domFoods.length > 0 &&
        domFoods.map((el) => {
          return (
            <button className="text-black w-[300px] h-64 rounded-lg flex flex-col gap-2 relative">
              {el.isSale && (
                <div className="flex justify-end w-full h-fit absolute">
                  <div className="absolute bg-green-500 text-white font-semibold w-fit h-fit p-2 rounded-xl mt-2 mr-2 border-[1px] border-solid border-white">
                    {/* {el.isSale.salePercent}% */}
                  </div>
                </div>
              )}
              <img src={`${el.img}`} className="w-full h-48 rounded-lg" />
              <p className="font-bold text-xl">{el.name}</p>
              <div className="text-green-500 font-semibold">
                {/* {el.isSale.isSale ? (
                <div className="flex gap-2">
                  <p>{(el.price / 100) * (100 - el.isSale.salePercent)}₮</p>
                  <p className="line-through text-black">
                    {el.price.toLocaleString()}₮
                  </p>
                </div>
              ) : (
                <p>{el.price}</p>
              )} */}
                <p>{el.price}</p>
              </div>
            </button>
          );
        })}
    </div>
  );
};
