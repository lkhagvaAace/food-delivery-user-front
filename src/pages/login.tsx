import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Basket } from "@/components/Basket";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { Loginbar } from "@/components/Loginbar";
import { AlertVisibleContext } from "@/context/AlertVisiblity";
import { Alert } from "@/components/Alert";

type Props = {};

const Login = (props: Props) => {
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  return (
    <div className="w-full relative min-h-screen flex justify-center">
      {alertVisible && <Alert />}
      {isBasketBarVisible === true ? <Basket /> : null}
      <div
        className={`bg-white min-h-screen flex w-full flex-col justify-between items-center gap-8  ${
          isBasketBarVisible && "opacity-25"
        }`}
      >
        <Header selectedFoodsLength={0} />
        <div className={`flex justify-center w-full h-96 mb-64`}>
          <Loginbar />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
