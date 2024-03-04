import React from "react";

export const Logout = () => {
  return (
    <div className="w-96 h-64 rounded-xl flex flex-col shadow-2xl">
      <p className="h-3/4 w-full flex justify-center items-center p-8 text-black text-2xl font-semibold">
        Та системээс гарахдаа итгэлтэй байна уу?
      </p>
      <div className="h-1/4 w-full flex">
        <button className="h-full w-1/2 bg-green-200 text-gray-500 rounded-lg">
          Тийм
        </button>
        <button className="h-full w-1/2 bg-green-600 rounded-lg">Үгүй</button>
      </div>
    </div>
  );
};
