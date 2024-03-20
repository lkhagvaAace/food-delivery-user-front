import { SelectedCategoryContext } from "@/context/SelectedCategory";
import { Category } from "@/types/CategoryType";
import React, { useContext } from "react";

export const MenuCategory = ({
  categoryData,
}: {
  categoryData: Category[];
}) => {
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  );
  return (
    <div className="w-full h-fit py-8 px-8 justify-evenly flex flex-wrap">
      {categoryData &&
        categoryData.map((el) => {
          return (
            <button
              key={el._id}
              onClick={() => setSelectedCategory(el._id)}
              className={`text-black ${
                selectedCategory === el._id && "bg-green-500 text-white"
              } flex justify-center items-center w-64 h-4 rounded-lg border-2 text-xl font-medium py-4 border-black border-solid`}
            >
              {el.name}
            </button>
          );
        })}
    </div>
  );
};
