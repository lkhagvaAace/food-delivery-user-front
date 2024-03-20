import { instance } from "@/Instance";
import { Basket } from "@/components/Basket";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadingPage } from "@/components/LoadingPage";
import { Loginbar } from "@/components/Loginbar";
import { Orderhistory } from "@/components/Orderhistory";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import { Food } from "@/types/foodType";
import React, { useContext, useEffect, useState } from "react";

const history = () => {
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Food[]>([]);
  const getOrders = async (token: string | null) => {
    try {
      const res = await instance.get("/getOrders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    } catch (error) {
      console.error("error in getOrders", error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    getOrders(token);
  }, []);
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
        {loading && <LoadingPage />}
        <Orderhistory orders={orders} />
        <Footer />
      </div>
    </div>
  );
};
export default history;
