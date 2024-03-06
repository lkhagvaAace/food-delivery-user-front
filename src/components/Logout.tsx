import { useRouter } from "next/router";
import React from "react";

export const Logout = ({ setIsLogOutVisible }: any) => {
  const router = useRouter();
  const logout = async () => {
    try {
      setIsLogOutVisible(false);
      localStorage.clear();
      router.push("/login");
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
