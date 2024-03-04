import { Cancel } from "@/svg/Cancel";
import React from "react";

export const Createfoodbar = () => {
  return (
    <form className="flex flex-col items-center w-1/3 rounded-lg h-fit pb-4 border-[1px] border-solid border-black">
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-2">
          <div className="w-8 h-8">
            <Cancel />
          </div>
          <p className="text-black font-medium text-lg">Create food</p>
          <p></p>
        </div>
        <hr></hr>
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <label className="text-gray-600 text-xs px-4">Хоолны нэр</label>
        <input
          className="w-11/12 rounded-lg h-12 mx-4 px-4 bg-gray-100"
          placeholder="Food"
          type="text"
        />
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <label className="text-gray-600 text-xs px-4">Хоолны ангилал</label>
        <input
          className="w-11/12 rounded-lg h-12 mx-4 px-4 bg-gray-100"
          placeholder="Food"
          type="text"
        />
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <label className="text-gray-600 text-xs px-4">Хоолны орц</label>
        <input
          className="w-11/12 rounded-lg h-12 mx-4 px-4 bg-gray-100"
          placeholder="Food"
          type="text"
        />
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <label className="text-gray-600 text-xs px-4">Хоолны үнэ</label>
        <input
          className="w-11/12 rounded-lg h-12 mx-4 px-4 bg-gray-100"
          placeholder="Food"
          type="text"
        />
      </div>
      <div className="flex flex-col w-full mt-4 gap-4">
        <div className="flex items-center px-4 gap-4">
          <div className="form-control">
            <input type="checkbox" className="toggle" />
          </div>
          <label className="text-gray-600 text-xs">Хямдралтай эсэх</label>
        </div>
        <input
          className="w-11/12 rounded-lg h-12 mx-4 px-4 bg-gray-100"
          placeholder="Food"
          type="text"
        />
      </div>
      <div className="flex flex-col justify-center w-full p-4">
        <label className="text-gray-600 text-xs">Хоолны зураг</label>
        <div className="w-1/2 px-4 h-fit py-8 gap-4 bg-gray-100 rounded-lg border-[1px] border-dashed border-gray-500 flex flex-col justify-center items-center my-4">
          <p className="text-xl font-semibold text-gray-700">
            Add image for the food
          </p>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center w-full justify-end pt-2 mr-2">
        <button className="text-black">Clear</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Continue
        </button>
      </div>
    </form>
  );
};
