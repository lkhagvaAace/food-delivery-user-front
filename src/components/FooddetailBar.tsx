import { Cancel } from "@/svg/Cancel";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { SelectedFoodContext } from "@/context/SelectedFoodContext";
import { FoodInfoContext } from "@/context/FoodDetail";
import { Food } from "@/types/foodType";
type ThemContextType = {
  selectedFoods: Food[];
  setSelectedFoods: Dispatch<SetStateAction<Food[]>>;
};
export const FooddetailBar = () => {
  const { selectedFoods, setSelectedFoods } =
    useContext<ThemContextType>(SelectedFoodContext);
  const { foodInfo, setFoodInfo } = useContext(FoodInfoContext);
  const [total, setTotal] = useState<number>(1);
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const counting = () => {
    const coincidenceChecker: Food[] = selectedFoods.filter((el) => {
      return el._id == foodInfo?._id;
    });
    if (coincidenceChecker.length > 0) {
      const food = selectedFoods.filter((el) => {
        return el._id == foodInfo?._id;
      });
    }
    if (total != 0) {
      setSelectedFoods([...selectedFoods, { ...foodInfo, count: total }]);
    }
  };
  return (
    <div className="absolute z-30 flex justify-center items-center w-full h-full">
      <div className="w-2/3 h-fit py-8 bg-white rounded-lg items-center flex justify-between gap-8 px-8 absolute z-4">
        <img src={`${foodInfo?.img}`} className="w-1/2 h-full" />
        <div className="flex flex-col w-full gap-4 items-end">
          <button
            onClick={() => {
              setIsFoodDetailVisible(false);
            }}
          >
            <Cancel />
          </button>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold text-black">
                {foodInfo?.name}
              </p>
              <p className="text-lg font-semibold text-green-500">
                {foodInfo?.price} ₮
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <label className="text-sm font-semibold text-black">Орц</label>
              <div className="flex justify-center items-center bg-gray-200 text-gray-500 rounded-lg p-4">
                {foodInfo?.ingredients}
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <label className="text-sm font-semibold text-black">Тоо</label>
              <div className="flex justify-between items-center bg-gray-200 text-gray-500 rounded-lg p-4">
                <button
                  onClick={() => {
                    if (total != 0) {
                      setTotal(total - 1);
                    }
                  }}
                  className="btn btn-outline btn-accent"
                >
                  -
                </button>
                <p>{total}</p>
                <button
                  onClick={() => {
                    setTotal(total + 1);
                  }}
                  className="btn btn-outline btn-accent"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setIsFoodDetailVisible(false);
                counting();
              }}
              className="bg-green-500 rounded-lg w-full h-12"
            >
              Сагслах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
