import { Basket } from "@/components/Basket";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Loginbar } from "@/components/Loginbar";
import { Secret } from "@/components/Secret";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import React, { useContext } from "react";

const Footerinfo = () => {
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  return (
    <div className="w-full relative min-h-screen flex justify-center items-center">
      {isBasketBarVisible === true && <Basket />}
      {isLoginVisible === true && <Loginbar />}
      <div
        className={`bg-white w-full min-h-screen flex flex-col items-center justify-between gap-8 ${
          isBasketBarVisible || isLoginVisible ? "opacity-25" : null
        }`}
      >
        <Header selectedFoodsLength={0} />
        <Secret />
        <Footer />
      </div>
    </div>
  );
};

export default Footerinfo;
