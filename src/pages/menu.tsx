import { instance } from "@/Instance";
import { Alert } from "@/components/Alert";
import { Basket } from "@/components/Basket";
import { FooddetailBar } from "@/components/FooddetailBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadingPage } from "@/components/LoadingPage";
import { Loginbar } from "@/components/Loginbar";
import { MenuCategory } from "@/components/MenuCategory";
import { MenuFoodBar } from "@/components/MenuFoodBar";
import { AlertVisibleContext } from "@/context/AlertVisiblity";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import { SelectedCategoryContext } from "@/context/SelectedCategory";
import { Category } from "@/types/CategoryType";
import { Food } from "@/types/foodType";
import React, { useContext, useState } from "react";

const Menu = ({
  foodData,
  categoryData,
}: {
  foodData: Food[];
  categoryData: Category[];
}) => {
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  );
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  return (
    <div className="w-full relative min-h-screen flex justify-center items-center">
      {isBasketBarVisible === true ? <Basket /> : null}
      {isFoodDetailVisible === true ? <FooddetailBar /> : null}
      {isLoginVisible === true ? <Loginbar /> : null}
      <div
        className={`bg-white min-h-screen flex flex-col items-center justify-between gap-8 m-auto w-full ${
          isBasketBarVisible || isFoodDetailVisible || isLoginVisible
            ? "opacity-25"
            : null
        }`}
      >
        <Header selectedFoodsLength={0} />
        {/* {loading && <LoadingPage />} */}
        {alertVisible && <Alert />}
        <MenuCategory categoryData={categoryData} />
        <MenuFoodBar foodData={foodData} />
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
export const getServerSideProps = async () => {
  let loading: boolean = true;
  const foodRes = await instance.get("/getFoods");
  const foodData: Food[] = foodRes.data;
  const categoryRes = await instance.get("/getCategories");
  const categoryData: Category[] = categoryRes.data;
  loading = false;
  return {
    props: { foodData, categoryData },
  };
};
