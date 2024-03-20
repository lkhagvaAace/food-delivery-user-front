import React, { useContext, useState } from "react";
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
import { useRouter } from "next/router";
import { LoadingPage } from "@/components/LoadingPage";
import { instance } from "@/Instance";
import { Food } from "@/types/foodType";
import { Category } from "@/types/CategoryType";
import { Alert } from "@/components/Alert";
import { AlertVisibleContext } from "@/context/AlertVisiblity";

const Index = ({
  foodData,
  categoryData,
  loading,
}: {
  foodData: Food[];
  categoryData: Category[];
  loading: boolean;
}) => {
  const router = useRouter();
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { isFoodDetailVisible, setIsFoodDetailVisible } = useContext(
    isFoodDetailVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  const { selectedFoods, setSelectedFoods } = useContext(SelectedFoodContext);
  const [newInBasket, setNewInBasket] = useState<boolean>(false);

  return (
    <div className="w-full relative min-h-screen flex justify-center items-center">
      {isBasketBarVisible === true ? <Basket /> : false}
      {isFoodDetailVisible === true ? <FooddetailBar /> : false}
      {isLoginVisible === true ? <Loginbar /> : false}
      <div
        className={`bg-white min-h-screen flex flex-col items-center justify-between w-full relative ${
          isFoodDetailVisible || isBasketBarVisible || isLoginVisible
            ? "opacity-25"
            : null
        }`}
      >
        <Header selectedFoodsLength={selectedFoods.length} />
        {loading && <LoadingPage />}
        {alertVisible && <Alert />}
        <DashboardFirstSection />
        <DashboardCards />
        <DashboardFoodBar foodData={foodData} categoryData={categoryData} />
        <Footer />
      </div>
    </div>
  );
};
export default Index;
export const getServerSideProps = async () => {
  let loading: boolean = true;
  const foodRes = await instance.get("/getFoods");
  const foodData: Food[] = foodRes.data;
  const categoryRes = await instance.get("/getCategories");
  const categoryData: Category[] = categoryRes.data;
  loading = false;
  return {
    props: { foodData, categoryData, loading },
  };
};
