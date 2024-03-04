import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Secret } from "@/components/Secret";
import { Conditon } from "@/components/Conditon";
import React from "react";

const Footerinfo = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8">
      <Header />
      <Secret />
      <Footer />
    </div>
  );
};

export default Footerinfo;
