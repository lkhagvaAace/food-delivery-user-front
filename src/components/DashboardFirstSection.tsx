import React from "react";

export const DashboardFirstSection = () => {
  return (
    <div
      className={`w-full h-[600px] bg-[url('/bg.png')] bg-[#18BA51] flex justify-between px-32 items-center `}
    >
      <div className="flex flex-col w-1/5 gap-4">
        <p className="text-3xl font-semibold">East Blue Food Delivery</p>
        <div className="bg-white w-full h-[1px]"></div>
        <p className="text-xl font-semibold">Let's eat with Luffy!</p>
      </div>
      <img src="./Logo.jpeg" />
    </div>
  );
};
