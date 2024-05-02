import React, { useContext, useEffect, useState } from "react";
import { Basket } from "../svg/Basket";
import { Profile } from "../svg/Profile";
import { Logo } from "../svg/Logo";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { useRouter } from "next/router";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import { HeaderValueContext } from "@/context/HeaderInput";
import { NewInBasketContext } from "@/context/NewInBaskter";

type Props = {};

export const Header = ({
  selectedFoodsLength,
}: {
  selectedFoodsLength: number;
}) => {
  const { newInBasket, setNewInBasket } = useContext(NewInBasketContext);
  const router = useRouter();
  const { headerValue, setHeaderValue } = useContext(HeaderValueContext);
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  const [token, setToken] = useState<string | null>("");
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) return;
    const accessToken = localStorage.getItem("accessToken");
    setToken(accessToken);
  }, []);
  const checkToken = async () => {
    try {
      if (token === "") return setIsLoginVisible(true);
      router.push("/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex w-11/12 justify-between py-4">
      <nav className="flex items-center gap-16">
        <button
          onClick={() => router.push("/")}
          className="w-6 h-6 rounded-[50]"
        >
          <Logo />
        </button>
        <button
          onClick={() => router.push("/")}
          className={`${
            router.asPath === "/" ? "text-green-500" : "text-black"
          } font-semibold w-fit h-8`}
        >
          НҮҮР
        </button>
        <button
          onClick={() => router.push("/menu")}
          className={`${
            router.asPath === "/menu" ? "text-green-500" : "text-black"
          } font-semibold w-fit h-8`}
        >
          ХООЛНЫ ЦЭС
        </button>
      </nav>
      <div className="flex justify-center items-center gap-16">
        <input
          onChange={(e) => setHeaderValue(e.target.value)}
          type="text"
          placeholder="Хайх"
          className="border-2 border-black border-solid rounded-lg w-64 h-12 pl-4 bg-white text-gray-600 px-4"
        />
        <button
          onClick={() => setIsBasketBarVisible(true)}
          className="flex gap-4 justify-center items-center relative"
        >
          <div className="w-6 h-6">
            <Basket />
          </div>
          {newInBasket && selectedFoodsLength > 0 && (
            <div className="absolute z-30 bg-red-500 rounded-[50%] w-4 h-4 mb-[10px] mr-8 flex justify-center items-center p-2 text-sm">
              {selectedFoodsLength}
            </div>
          )}
          <p className="text-black font-semibold">Сагс</p>
        </button>
        <button
          onClick={() => {
            checkToken();
          }}
          className="flex gap-4 justify-center items-center"
        >
          <div className="w-12 h-12">
            <Profile />
          </div>
          <p
            className={`${
              router.asPath === "/profile" ? "text-green-500" : "text-black"
            } font-semibold`}
          >
            {token === "" ? "Нэвтрэх" : "Хэрэглэгч"}
          </p>
        </button>
      </div>
    </div>
  );
};
