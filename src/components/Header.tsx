import React, { useContext } from "react";
import { Basket } from "../svg/Basket";
import { Profile } from "../svg/Profile";
import { Logo } from "../svg/Logo";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { useRouter } from "next/router";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import { UserIdContext } from "@/context/UserIdContext";

type Props = {};

export const Header = (props: Props) => {
  const router = useRouter();
  const { userId, setUserId } = useContext(UserIdContext);
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
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
          className="text-black font-semibold w-fit h-8"
        >
          НҮҮР
        </button>
        <button
          onClick={() => router.push("/menu")}
          className="text-black font-semibold w-fit h-8"
        >
          ХООЛНЫ ЦЭС
        </button>
        <button className="text-black font-semibold w-fit h-8">
          ХҮРГЭЛТИЙН БҮС
        </button>
      </nav>
      <div className="flex justify-center items-center gap-16">
        <input
          type="text"
          placeholder="Хайх"
          className="border-2 border-black border-solid rounded-lg w-64 h-12 pl-4 bg-white text-gray-600 px-4"
        />
        <button
          onClick={() => setIsBasketBarVisible(true)}
          className="flex gap-4 justify-center items-center"
        >
          <div className="w-6 h-6">
            <Basket />
          </div>
          <p className="text-black font-semibold">Сагс</p>
        </button>
        <button
          onClick={() => {
            if (userId === "") {
              setIsLoginVisible(true);
            } else {
              router.push("/profile");
            }
          }}
          className="flex gap-4 justify-center items-center"
        >
          <div className="w-12 h-12">
            <Profile />
          </div>
          <p className="text-black font-semibold">
            {userId === "" ? "Нэвтрэх" : "Хэрэглэгч"}
          </p>
        </button>
      </div>
    </div>
  );
};
