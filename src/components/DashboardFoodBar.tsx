import React, { useContext, useEffect, useState } from "react";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { FoodInfoContext } from "@/context/FoodDetail";
import { Food } from "@/types/foodType";
import { getFoods } from "@/utilities/getFoods";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import { Loginbar } from "./Loginbar";
import { getCategoriesFromDatabass } from "@/utilities/getCategories";
import { Category } from "@/types/CategoryType";
import { Star } from "@/svg/Star";
import { Rightarrow } from "@/svg/Rightarrow";

export const DashboardFoodBar = () => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  const [categories, setCategoryies] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const { foodInfo, setFoodInfo } = useContext(FoodInfoContext);
  const setFoodsFromDB = (data: Food[]) => {
    setFoods(data);
  };
  const getCategoriesFunction = (data: Category[]) => {
    setCategoryies(data);
  };
  useEffect(() => {
    getCategoriesFromDatabass(getCategoriesFunction);
    getFoods(setFoodsFromDB);
  }, []);
  return (
    <div className="flex w-full h-fit justify-start px-32 flex-wrap gap-16 my-16 ml-24">
      {isLoginVisible === true && <Loginbar />}
      <div className="flex flex-col w-full">
        {categories.length > 0 &&
          categories.map((el) => {
            return (
              <div className="flex flex-col gap-8 pb-16">
                <div className="text-black text-2xl w-full font-medium justify-between flex">
                  <div className="flex gap-2 w-full items-center">
                    <Star />
                    {el.name}
                  </div>
                  <div className="flex text-green-500 w-fit items-center">
                    <p className="text-sm w-32">Бүгдийг харах</p>
                    <div className="w-4 h-4">
                      <Rightarrow />
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 text-black">
                  {foods.length > 0 &&
                    foods.map((element) => {
                      if (element.category === el._id) {
                        return (
                          <button
                            onClick={() => {
                              setIsFoodDetailVisible(true);
                              setFoodInfo(element);
                            }}
                            className="w-1/5 flex flex-col gap-2 text-black relative"
                          >
                            {/* {el.isSale.isSale && (
                              <div className="flex justify-end w-full h-fit absolute">
                                <div className="absolute bg-green-500 text-white font-semibold w-fit h-fit p-2 rounded-xl mt-2 mr-2 border-[1px] border-solid border-white">
                                  {el.isSale.salePercent}%
                                </div>
                              </div>
                            )} */}
                            <img
                              src={`${element.img}`}
                              className="w-full h-48 rounded-lg"
                            />
                            <p className="font-bold text-xl">{el.name}</p>
                            {/* <div className="text-green-500 font-semibold">
                              {el.isSale.isSale ? (
                                <div className="flex gap-2">
                                  <p>
                                    {(el.price / 100) *
                                      (100 - el.isSale.salePercent)}
                                    ₮
                                  </p>
                                  <p className="line-through text-black">
                                    {el.price.toLocaleString()}₮
                                  </p>
                                </div>
                              ) : (
                                <p>{el.price}</p>
                              )}
                            </div> */}
                            <p className="text-green-500 font-medium">
                              {element.price.toLocaleString()}₮
                            </p>
                          </button>
                        );
                      } else null;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
