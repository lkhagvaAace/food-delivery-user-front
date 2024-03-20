import { User } from "@/types/userType";
import { Food } from "@/types/foodType";
import React from "react";
type Order = {
  foods: Food[];
  orderNumber: number;
  process: string;
  totalPrice: number;
  userId: User;
  _id: string;
  createdDate: string;
};

export const Orderhistory = (orders: any) => {
  const order: Order[] = orders.orders;
  return (
    <div className="flex justify-between w-2/3 items-center my-16 gap-16">
      <div className="rounded-lg w-1/2 h-[700px] shadow-2xl text-black p-8 flex flex-col">
        <p className="text-xl py-4">Захиалгын түүх</p>
        <div className="flex w-full flex-col justify-center items-center overflow-y-scroll pt-12">
          {order.length > 0 &&
            order.map((el) => {
              return (
                <div className="flex flex-col w-full h-24">
                  <div
                    key={el._id}
                    className="flex justify-between w-full h-32 items-center"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-12 h-12 flex justify-center items-center ${
                          el.process === "Waiting" &&
                          "border-[1px] border-solid border-blue-600 rounded-[50%]"
                        }`}
                      >
                        <div
                          className={`${
                            el.process === "Waiting" && "bg-blue-600"
                          } w-4 h-4 rounded-[50%]`}
                        ></div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-black">Захиалга #{el.orderNumber}</p>
                        <p className="text-blue-600">
                          {el.process === "Waiting" && "Хүлээгдэж байна"}
                        </p>
                      </div>
                    </div>
                    <p className="text-black">{el.createdDate}</p>
                  </div>
                  <div className="bg-blue-600 h-[1px] w-full"></div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="rounded-lg w-1/2 h-[700px] shadow-2xl text-black p-8 flex flex-col">
        <p className="text-xl py-4">Захиалгын дэлгэрэнгүй</p>
        <div className="flex flex-col justify-center items-center overflow-y-scroll pt-36">
          {order.length > 0 &&
            order.map((el) => {
              return (
                <div className="flex flex-col w-full h-24 pt-16">
                  {el.foods.length > 0 &&
                    el.foods.map((element) => {
                      return (
                        <div className="text-black flex justify-between w-full h-32">
                          <p>{element.name}</p>
                          <p>({element.count})</p>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
