import { Category } from "@/types/CategoryType";
import { getCategoriesFromDatabass } from "@/utilities/getCategories";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export const MenuCategory = ({ setSelectedCategory }: any) => {
  const [categories, setCategoryies] = useState<Category[]>([]);
  const getCategoriesFunction = (data: Category[]) => {
    setCategoryies(data);
  };
  useEffect(() => {
    getCategoriesFromDatabass(getCategoriesFunction);
  }, []);
  return (
    <div className="w-full h-fit py-8 px-8 justify-evenly flex flex-wrap">
      {categories.length > 0 &&
        categories.map((el) => {
          return (
            <button
              onClick={() => setSelectedCategory(el._id)}
              className="text-black flex justify-center items-center w-64 h-4 rounded-lg border-2 text-xl font-medium py-4 border-black border-solid"
            >
              {el.name}
            </button>
          );
        })}
    </div>
  );
};
