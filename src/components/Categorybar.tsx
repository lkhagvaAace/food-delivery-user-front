import { Cancel } from "@/svg/Cancel";
import React from "react";

export const Categorybar = () => {
  return (
    <form className="flex flex-col items-center w-96 rounded-lg h-48 border-[1px] border-solid border-black">
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-2">
          <div className="w-8 h-8">
            <Cancel />
          </div>
          <p className="text-black font-medium text-lg">Create new category</p>
          <p></p>
        </div>
        <hr></hr>
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <label className="text-gray-600 text-xs px-4">Category name</label>
        <input
          className="w-11/12 rounded-lg h-12 mx-4 px-4 bg-gray-100"
          placeholder="Food"
          type="text"
        />
        <hr></hr>
      </div>
      <div className="flex gap-4 items-center w-full justify-end pt-2 mr-2">
        <button className="text-black">Clear</button>
        <button className="text-white bg-black rounded-lg w-24 h-8">
          Continue
        </button>
      </div>
    </form>
  );
};
