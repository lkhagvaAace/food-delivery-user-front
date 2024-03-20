import { Loading } from "@/svg/Loading";
import React from "react";

export const LoadingPage = () => {
  return (
    <div className="w-full absolute min-h-full z-50 bg-white flex items-center flex-col pt-96">
      <div className="w-32 h-32 flex justify-center items-center">
        <Loading />
      </div>
      <span className="text-green-500 font-semibold text-2xl">
        Page Loading...
      </span>
    </div>
  );
};
