import { AlertWordContext } from "@/context/AlertWord";
import { Loading } from "@/svg/Loading";
import React, { useContext } from "react";

export const Alert = () => {
  const { alertWord, setAlertWord } = useContext(AlertWordContext);
  return (
    <div className="w-fit h-[100px] absolute z-50 bg-gray-600 flex items-center rounded-lg mt-16 py-4 px-8 justify-between gap-4">
      <div className="w-8 h-8 flex justify-center items-center">
        <Loading />
      </div>
      <span className="text-white font-semibold text-lg w-fit">
        {alertWord}
      </span>
    </div>
  );
};
