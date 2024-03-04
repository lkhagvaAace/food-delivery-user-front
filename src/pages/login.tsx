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
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8">
      <Header />
      {isBasketBarVisible === true ? <Basket /> : null}
      <Loginbar />
      <Footer />
    </div>
  );
};

export default Login;
