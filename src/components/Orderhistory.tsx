import { OrderContext } from "@/context/OrderContext";
import React, { useContext } from "react";

type foodData = {
  id: number;
  foodName: string;
  price: number;
  img: string;
  categoryName: string;
  count: number;
};
type ThemContextType = {
  order: foodData[][];
  setOrder: React.Dispatch<React.SetStateAction<foodData[][]>>;
};
const currentDate = new Date();

export const Orderhistory = () => {
  return (
    <div className="flex justify-between w-2/3 items-center my-16 gap-16">
      <div className="rounded-lg w-1/2 h-[700px] shadow-2xl text-black p-8 flex flex-col">
        <p className="text-xl py-4">Захиалгын түүх</p>
        <div className="flex flex-col justify-center items-center">
          {/* {order?.map((el) => {
            return (
              <div className="flex items-center justify-between w-full gap-8">
                <div className="flex gap-4 items-center">
                  <button className="w-12 h-12 rounded-[50%] bg-blue-500"></button>
                  <div className="flex flex-col">
                    <p>
                      Захиалга #
                      {el.reduce((acc, cur) => acc + cur.price * cur.count, 0)}
                    </p>
                    <p className="text-blue-500">Хүлээгдэж буй</p>
                  </div>
                </div>
                <p className="w-1/3">{`${currentDate.getFullYear()}/ ${
                  currentDate.getMonth() + 1
                } / ${currentDate.getDate()}`}</p>
              </div>
            );
          })} */}
        </div>
      </div>
      <div className="rounded-lg w-1/2 h-[700px] shadow-2xl text-black p-8 flex flex-col">
        <p className="text-xl py-4">Захиалгын дэлгэрэнгүй</p>
        <div className="flex flex-col justify-center items-center gap-8">
          {/* {order?.map((el) => {
            return (
              <div className="flex flex-col items-center justify-between w-full h-12">
                {el?.map((foodName) => {
                  return (
                    <div className="flex w-full justify-between">
                      <p>{foodName.foodName}</p>
                      <p>({foodName.count})</p>
                    </div>
                  );
                })}
                <hr></hr>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
