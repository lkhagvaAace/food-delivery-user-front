import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React, { useContext } from "react";
import { Profilesection } from "@/components/Profilesection";
import { Logout } from "@/components/Logout";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { Basket } from "@/components/Basket";
import { UserIdContext } from "@/context/UserIdContext";
import { useRouter } from "next/router";

const profile = () => {
  const router = useRouter();
  const { userId, setUserId } = useContext(UserIdContext);
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  if (userId === "") return router.push("/login");
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8">
      <Header />
      {isBasketBarVisible === true ? <Basket /> : null}
      {/* <Logout /> */}
      <Profilesection />
      <Footer />
    </div>
  );
};

export default profile;
