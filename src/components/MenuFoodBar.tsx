import React, { useContext, useMemo, useState } from "react";
import { FoodInfoContext } from "@/context/FoodDetail";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { Food } from "@/types/foodType";
import { HeaderValueContext } from "@/context/HeaderInput";
import { SelectedCategoryContext } from "@/context/SelectedCategory";

export const MenuFoodBar = ({ foodData }: { foodData: Food[] }) => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  );
  const { headerValue, setHeaderValue } = useContext(HeaderValueContext);
  const { foodInfo, setFoodInfo } = useContext(FoodInfoContext);
  const [domFoods, setDomFoods] = useState<Food[]>([]);
  const [test, setTest] = useState<Food[]>([]);
  const filterByInputValue = useMemo(() => {
    setDomFoods(
      test.filter((el) =>
        el.name.toLowerCase().includes(headerValue.toLowerCase())
      )
    );
  }, [headerValue]);
  const filteringbByCategory = useMemo(async () => {
    if (selectedCategory === "") return setDomFoods(foodData);
    const filteredFoods = foodData.filter(
      (el: Food) => el.category === selectedCategory
    );
    setDomFoods(filteredFoods);
    setTest(filteredFoods);
  }, [selectedCategory]);
  return (
    <div className="flex w-full h-fit justify-start flex-wrap gap-16 pl-36">
      {domFoods.length > 0 ? (
        domFoods.map((el) => {
          return (
            <button
              key={el._id}
              onClick={() => {
                setIsFoodDetailVisible(true), setFoodInfo(el);
              }}
              className="text-black w-[300px] h-64 rounded-lg flex flex-col gap-2 relative"
            >
              {el.isSale.salePercent > 0 && (
                <div className="flex justify-end w-full h-fit absolute">
                  <div className="absolute bg-green-500 text-white font-semibold w-fit h-fit p-2 rounded-xl mt-2 mr-2 border-[1px] border-solid border-white">
                    {el.isSale.salePercent}%
                  </div>
                </div>
              )}
              <img src={`${el.img}`} className="w-full h-48 rounded-lg" />
              <p className="font-bold text-xl">{el.name}</p>
              <div className="text-green-500 font-semibold">
                {el.isSale.isSale ? (
                  <div className="flex gap-2">
                    <p>
                      {(
                        (el.price / 100) *
                        (100 - el.isSale.salePercent)
                      ).toLocaleString()}
                      ₮
                    </p>
                    <p className="line-through text-black">
                      {el.price.toLocaleString()}₮
                    </p>
                  </div>
                ) : (
                  <p>{el.price.toLocaleString()}₮</p>
                )}
              </div>
            </button>
          );
        })
      ) : (
        <div className="flex flex-col w-full justify-center items-center">
          <img src="./box.png" className="w-32 h-32" />
          <p className="text-black text-lg">Хайлт илэрсэнгүй.</p>
        </div>
      )}
    </div>
  );
};
