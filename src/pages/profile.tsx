import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React, { useContext, useEffect, useState } from "react";
import { Profilesection } from "@/components/Profilesection";
import { Logout } from "@/components/Logout";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { Basket } from "@/components/Basket";

import { useRouter } from "next/router";
import { instance } from "@/Instance";

const profile = () => {
  const router = useRouter();
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const [isLogOutVisible, setIsLogOutVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const bringUserInfo = async (token: any) => {
    try {
      if (!token) return;
      const res = await instance.get("/getUserInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(res.data);
    } catch (error) {
      console.error("error in getUserInfo", error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    bringUserInfo(token);
  }, []);
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8">
      <Header />
      {isBasketBarVisible === true ? <Basket /> : null}
      {isLogOutVisible === true && (
        <Logout setIsLogOutVisible={setIsLogOutVisible} />
      )}
      <Profilesection
        userInfo={userInfo}
        setIsLogOutVisible={setIsLogOutVisible}
      />
      <Footer />
    </div>
  );
};

export default profile;
