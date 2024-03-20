import React, { useContext, useMemo, useState } from "react";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { FoodInfoContext } from "@/context/FoodDetail";
import { Food } from "@/types/foodType";
import { Category } from "@/types/CategoryType";
import { Star } from "@/svg/Star";
import { Rightarrow } from "@/svg/Rightarrow";
import { useRouter } from "next/router";
import { HeaderValueContext } from "@/context/HeaderInput";
import { SelectedCategoryContext } from "@/context/SelectedCategory";

export const DashboardFoodBar = ({
  foodData,
  categoryData,
}: {
  foodData: Food[];
  categoryData: Category[];
}) => {
  const router = useRouter();
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  );
  const { headerValue, setHeaderValue } = useContext(HeaderValueContext);
  const [domFoods, setDomFoods] = useState<Food[]>([]);
  const { foodInfo, setFoodInfo } = useContext(FoodInfoContext);
  const filterByInputValue = useMemo(() => {
    setDomFoods(
      foodData.filter((el) =>
        el.name.toLowerCase().includes(headerValue.toLowerCase())
      )
    );
  }, [headerValue]);
  return (
    <div className="flex w-full h-fit justify-start px-32 flex-wrap gap-16 my-16">
      <div className="flex flex-col w-full">
        {categoryData.length > 0 &&
          categoryData.map((el) => {
            return (
              <div className="flex flex-col gap-8 pb-16" key={el._id}>
                <div className="text-black text-2xl w-full font-medium justify-between flex">
                  <div className="flex gap-2 w-full items-center">
                    <Star />
                    {el.name}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(el._id);
                      router.push("/menu");
                    }}
                    className="flex text-green-500 w-fit items-center"
                  >
                    <p className="text-sm w-32">Бүгдийг харах</p>
                    <div className="w-4 h-4">
                      <Rightarrow />
                    </div>
                  </button>
                </div>
                <div className="flex gap-8 text-black">
                  {domFoods.length > 0 ? (
                    domFoods.map((element) => {
                      if (element.category === el._id) {
                        return (
                          <button
                            key={element._id}
                            onClick={() => {
                              setIsFoodDetailVisible(true);
                              setFoodInfo(element);
                            }}
                            className={`w-1/5 flex flex-col gap-2 text-black relative`}
                          >
                            {element.isSale.salePercent > 0 ? (
                              <div className="flex justify-end w-full h-fit absolute">
                                <div className="absolute bg-green-500 text-white font-semibold w-fit h-fit p-2 rounded-xl mt-2 mr-2 border-[1px] border-solid border-white">
                                  {element.isSale.salePercent}%
                                </div>
                              </div>
                            ) : null}
                            <img
                              src={`${element.img}`}
                              className="w-full h-48 rounded-lg"
                            />
                            <p className="font-bold text-xl">{element.name}</p>
                            <div className="text-green-500 font-semibold">
                              {element.isSale.isSale ? (
                                <div className="flex gap-2">
                                  <p>
                                    {(
                                      (element.price / 100) *
                                      (100 - element.isSale.salePercent)
                                    ).toLocaleString()}
                                    ₮
                                  </p>
                                  <p className="line-through text-black">
                                    {element.price.toLocaleString()}₮
                                  </p>
                                </div>
                              ) : (
                                <p>{element.price.toLocaleString()}₮</p>
                              )}
                            </div>
                          </button>
                        );
                      } else null;
                    })
                  ) : (
                    <div className="flex flex-col w-full justify-center items-center">
                      <img src="./box.png" className="w-32 h-32" />
                      <p className="text-black text-lg">Хоосон байна.</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
