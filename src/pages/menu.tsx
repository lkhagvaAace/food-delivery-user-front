import { Basket } from "@/components/Basket";
import { FooddetailBar } from "@/components/FooddetailBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuCategory } from "@/components/MenuCategory";
import { MenuFoodBar } from "@/components/MenuFoodBar";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";

const Menu = () => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8 m-auto">
      <Header />
      {isBasketBarVisible === true ? <Basket /> : null}
      {isFoodDetailVisible === true ? <FooddetailBar /> : null}
      <MenuCategory setSelectedCategory={setSelectedCategory} />
      <MenuFoodBar selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default Menu;
