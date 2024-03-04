import React from "react";
import { Out } from "../../Out";
import { History } from "@/svg/History";
import { Edit } from "@/svg/Edit";
import Mail from "@/svg/Mail";
import { Phonenumber } from "@/svg/Phonenumber";
import { Profile } from "@/svg/Profile";
import { useRouter } from "next/router";

export const Profilesection = () => {
  const router = useRouter();
  return (
    <form className="flex flex-col justify-center items-center gap-8 w-full h-full pb-16">
      <img className="rounded-[50%] w-32 h-32 border-[1px] border-black border-solid" />
      <p className="text-black font-medium text-2xl">name</p>
      <div className="flex justify-between px-8 w-1/4 border-gray-400 border-[1px] border-solid rounded-lg py-2 h-16 bg-gray-100 items-center">
        <div className="flex gap-4 items-center justify-center">
          <Profile />
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Таны нэр</p>
            <p className="text-black">Name</p>
          </div>
        </div>
        <button className="w-8 h-8">
          <Edit />
        </button>
      </div>
      <div className="flex justify-between px-8 w-1/4 border-gray-400 border-[1px] border-solid rounded-lg  py-2 h-16 bg-gray-100 items-center">
        <div className="flex gap-4 items-center justify-center">
          <Phonenumber />
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Утасны дугаар</p>
            <p className="text-black">99119911</p>
          </div>
        </div>
        <button className="w-8 h-8">
          <Edit />
        </button>
      </div>
      <div className="flex justify-between px-8 w-1/4 border-gray-400 border-[1px] border-solid rounded-lg py-2 bg-gray-100 items-center">
        <div className="flex gap-4 items-center justify-center">
          <Mail />
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Таны нэр haha</p>
            <p className="text-black">Name</p>
          </div>
        </div>
        <button className="w-8 h-8">
          <Edit />
        </button>
      </div>
      <div className="w-full items-center gap-4 flex flex-col">
        <div className="flex gap-4 w-1/4 items-center">
          <History />
          <button
            onClick={() => {
              router.push("/history");
            }}
            className="text-black"
          >
            Захиалгийн түүх
          </button>
        </div>
        <div className="flex gap-4 w-1/4 items-center">
          <Out />
          <p className="text-black">Гарах</p>
        </div>
      </div>
      <button className="flex justify-center items-center px-8 w-1/4 border-gray-400 h-16 py-8 bg-[#18BA51] rounded-lg">
        Хадгалах
      </button>
    </form>
  );
};
