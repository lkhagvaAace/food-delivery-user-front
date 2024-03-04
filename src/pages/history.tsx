import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Orderhistory } from "@/components/Orderhistory";
import React from "react";

const history = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between gap-8">
      <Header />
      <Orderhistory />
      <Footer />
    </div>
  );
};
export default history;
