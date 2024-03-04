import { Book } from "@/svg/Book";
import { Clock } from "@/svg/Clock";
import { Healthyfood } from "@/svg/Healthyfood";
import React from "react";

export const DashboardCards = () => {
  return (
    <div className={`w-full flex items-center justify-between px-32 `}>
      <div className="flex flex-col pl-8 py-4 w-1/5 h-32 rounded-lg shadow-xl gap-4">
        <Book />
        <div className="flex flex-col">
          <p className="text-black text-lg font-medium">
            Хүргэлтийн төлөв хянах
          </p>
          <p className="text-black text-sm">Захиалга бэлтгэлийн явцыг хянах</p>
        </div>
      </div>
      <div className="flex flex-col pl-8 py-4 w-1/5 h-32 rounded-lg drop-shadow-2xl shadow-xl gap-4">
        <Clock />
        <div className="flex flex-col">
          <p className="text-black text-lg font-medium">Шуурхай хүргэлт</p>
          <p className="text-black text-sm">Захиалга бэлтгэлийн явцыг хянах</p>
        </div>
      </div>
      <div className="flex flex-col pl-8 py-4 w-1/5 h-32 rounded-lg drop-shadow-2xl shadow-xl gap-4">
        <Healthyfood />
        <div className="flex flex-col">
          <p className="text-black text-lg font-medium">Эрүүл, баталгаат орц</p>
          <p className="text-black text-sm">Захиалга бэлтгэлийн явцыг хянах</p>
        </div>
      </div>
      <div className="flex flex-col pl-8 py-4 w-1/5 h-32 rounded-lg drop-shadow-2xl shadow-xl gap-4">
        <Book />
        <div className="flex flex-col">
          <p className="text-black text-lg font-medium">Хоолны өргөн сонголт</p>
          <p className="text-black text-sm">Захиалга бэлтгэлийн явцыг хянах</p>
        </div>
      </div>
    </div>
  );
};
