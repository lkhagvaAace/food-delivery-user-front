import { AlertVisibleContext } from "@/context/AlertVisiblity";
import { AlertWordContext } from "@/context/AlertWord";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export const Logout = ({ setIsLogOutVisible }: any) => {
  const router = useRouter();
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  const { alertWord, setAlertWord } = useContext(AlertWordContext);
  const logout = async () => {
    try {
      setIsLogOutVisible(false);
      localStorage.clear();
      setAlertWord("Амжилттай гарлаа!");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
      setTimeout(() => {
        router.push("/login");
      }, 2001);
    } catch (error) {
      console.error("error in logout", error);
    }
  };
  return (
    <div className="w-96 h-64 rounded-xl flex flex-col shadow-2xl absolute mt-96 z-30 bg-white">
      <p className="h-3/4 w-full flex justify-center items-center p-8 text-black text-2xl font-semibold">
        Та системээс гарахдаа итгэлтэй байна уу?
      </p>
      <div className="h-1/4 w-full flex">
        <button
          onClick={logout}
          className="h-full w-1/2 bg-green-200 text-gray-500 rounded-lg"
        >
          Тийм
        </button>
        <button
          onClick={() => setIsLogOutVisible(false)}
          className="h-full w-1/2 bg-green-600 rounded-lg"
        >
          Үгүй
        </button>
      </div>
    </div>
  );
};
