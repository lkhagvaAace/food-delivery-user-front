import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { isFoodDetailVisibleContext } from "@/context/FDVisiblityContext";
import { FooddetailBar } from "@/components/FooddetailBar";
import { SelectedFoodContext } from "@/context/SelectedFoodContext";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { Basket } from "@/components/Basket";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import { Loginbar } from "@/components/Loginbar";
import { DashboardFirstSection } from "@/components/DashboardFirstSection";
import { DashboardCards } from "@/components/DashboardCards";
import { DashboardFoodBar } from "@/components/DashboardFoodBar";

type Props = {};

const Index = (props: Props) => {
  // const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
  //   isBasketBarVisibleContext
  // );
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  const { selectedFoods, setSelectedFoods } = useContext(SelectedFoodContext);
  return (
    <div
      className={`bg-white min-h-screen flex flex-col items-center justify-between w-full relative`}
    >
      {/* {isBasketBarVisible === true && selectedFoods ? <Basket /> : false} */}
      {isFoodDetailVisible === true ? <FooddetailBar /> : false}
      {isLoginVisible === true ? <Loginbar /> : false}
      <Header />
      <DashboardFirstSection />
      <DashboardCards />
      <DashboardFoodBar />
      <Footer />
    </div>
  );
};
export default Index;
