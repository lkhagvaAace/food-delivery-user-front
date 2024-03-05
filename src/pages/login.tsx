import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Basket } from "@/components/Basket";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { Loginbar } from "@/components/Loginbar";

type Props = {};

const Login = (props: Props) => {
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between gap-8">
      <Header />
      {isBasketBarVisible === true ? <Basket /> : null}
      <div className="flex justify-center w-full h-96 mb-64">
        <Loginbar />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
