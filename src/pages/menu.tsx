import { Basket } from "@/components/Basket";
import { FooddetailBar } from "@/components/FooddetailBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuFoodBar } from "@/components/MenuFoodBar";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import React, { useContext } from "react";

const Menu = () => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8">
      <Header />
      {isBasketBarVisible === true ? <Basket /> : null}
      {isFoodDetailVisible === true ? <FooddetailBar /> : null}
      <MenuFoodBar />
      <Footer />
    </div>
  );
};

export default Menu;
