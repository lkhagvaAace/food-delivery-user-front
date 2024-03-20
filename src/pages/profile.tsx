import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React, { useContext, useEffect, useState } from "react";
import { Profilesection } from "@/components/Profilesection";
import { Logout } from "@/components/Logout";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { Basket } from "@/components/Basket";

import { useRouter } from "next/router";
import { instance } from "@/Instance";
import { jwtDecode } from "jwt-decode";
import { LoadingPage } from "@/components/LoadingPage";
import { AlertVisibleContext } from "@/context/AlertVisiblity";
import { Alert } from "@/components/Alert";

const profile = () => {
  const router = useRouter();
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const [isLogOutVisible, setIsLogOutVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  const refresh = async () => {
    try {
      const res = await instance.get("/refreshToken");
      return localStorage.setItem("accessToken", res.data.accessToken);
    } catch (error) {
      console.error("error in refreshToken", error);
    }
  };
  const bringUserInfo = async (token: any) => {
    try {
      if (!token) return;
      const exp = jwtDecode(token).exp;
      if (!exp) return false;
      if (exp < Date.now() / 1000) {
        refresh();
      }
      const res = await instance.get("/getUserInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(res.data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    } catch (error) {
      console.error("error in getUserInfo", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    bringUserInfo(token);
  }, []);
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8">
      <Header selectedFoodsLength={0} />
      {isBasketBarVisible === true ? <Basket /> : null}
      {isLogOutVisible === true && (
        <Logout setIsLogOutVisible={setIsLogOutVisible} />
      )}
      {loading && <LoadingPage />}
      {alertVisible && <Alert />}
      <Profilesection
        userInfo={userInfo}
        setIsLogOutVisible={setIsLogOutVisible}
        setLoading={setLoading}
      />
      <Footer />
    </div>
  );
};

export default profile;
