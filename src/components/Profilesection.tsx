import React, { useEffect, useState } from "react";
import { Out } from "../../Out";
import { History } from "@/svg/History";
import { Edit } from "@/svg/Edit";
import Mail from "@/svg/Mail";
import { Phonenumber } from "@/svg/Phonenumber";
import { Profile } from "@/svg/Profile";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { SignupFormValues } from "@/types/signupType";
import { signupUserSchema } from "@/Validations/SignupUserValidation";
import { instance } from "@/Instance";
import { edit } from "@/utilities/editUser";

export const Profilesection = ({ userInfo, setIsLogOutVisible }: any) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [img, setImg] = useState({});
  const { values, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<SignupFormValues>({
      initialValues: {
        email: userInfo.name,
        name: userInfo.name,
        password: "",
        confirmPassword: "",
        phoneNumber: userInfo.phoneNumber,
      },
      validationSchema: signupUserSchema,
      onSubmit: async () => {},
    });
  return (
    <form
      onSubmit={(e) => edit(e, values, img, userInfo._id)}
      className={`flex flex-col justify-center items-center gap-4 w-full h-full pb-16`}
    >
      <div className="w-fit h-fit flex flex-col relative">
        <img
          src={`${userInfo.avatarImg}`}
          className="rounded-[50%] w-32 h-32 border-[1px] border-black border-solid"
        />
        <button className="p-2 rounded-[50%] bg-white z-30 absolute mt-20 ml-24 shadow-2xl shadow-black">
          <Edit />
        </button>
        <input
          id="file"
          type="file"
          className="w-32 bg-black"
          onChange={(e) => setImg(e.target.files[0])}
        />
      </div>
      <p className="text-black font-medium text-2xl">{userInfo.name}</p>
      <div className="flex justify-between px-8 w-1/4 border-gray-400 border-[1px] border-solid rounded-lg py-2 h-16 bg-gray-100 items-center">
        <div className="flex gap-4 items-center justify-center">
          <Profile />
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Таны нэр</p>
            {onEdit === false ? (
              <input
                disabled
                type="text"
                defaultValue={userInfo.name}
                className="text-black bg-gray-100"
              />
            ) : (
              <input
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                defaultValue={userInfo.name}
                className="text-black bg-gray-100"
              />
            )}
          </div>
        </div>
        <div className="w-8 h-8" onClick={() => setOnEdit(true)}>
          <Edit />
        </div>
      </div>
      {errors.name && <p className="text-red-500">{errors.name}</p>}
      <div className="flex justify-between px-8 w-1/4 border-gray-400 border-[1px] border-solid rounded-lg  py-2 h-16 bg-gray-100 items-center">
        <div className="flex gap-4 items-center justify-center">
          <Phonenumber />
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Утасны дугаар</p>
            {onEdit === false ? (
              <input
                disabled
                type="number"
                defaultValue={userInfo.phoneNumber}
                className="text-black bg-gray-100"
              />
            ) : (
              <input
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                defaultValue={userInfo.phoneNumber}
                className="text-black bg-gray-100"
              />
            )}
          </div>
        </div>
        <div className="w-8 h-8" onClick={() => setOnEdit(true)}>
          <Edit />
        </div>
      </div>
      {errors.phoneNumber && (
        <p className={`text-red-500`}>Wrong phonenumber</p>
      )}
      <div className="flex justify-between px-8 w-1/4 border-gray-400 border-[1px] border-solid rounded-lg py-2 bg-gray-100 items-center">
        <div className="flex gap-4 items-center justify-center">
          <Mail />
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-400">Таны Имэйл</p>
            {onEdit === false ? (
              <input
                disabled
                type="text"
                defaultValue={userInfo.email}
                className="text-black bg-gray-100"
              />
            ) : (
              <input
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                defaultValue={userInfo.email}
                className="text-black bg-gray-100"
              />
            )}
          </div>
        </div>
        <div className="w-8 h-8" onClick={() => setOnEdit(true)}>
          <Edit />
        </div>
      </div>
      {errors.email && (
        <p className={`${errors.email && "text-red-500"}`}>{errors.email}</p>
      )}
      {onEdit === true ? (
        errors.email || errors.name || errors.phoneNumber ? (
          <button
            disabled
            className="flex justify-center items-center px-8 w-1/4 border-gray-400 h-16 py-8 bg-gray-300 rounded-lg"
          >
            Хадгалах
          </button>
        ) : (
          <button
            type="submit"
            className="flex justify-center items-center px-8 w-1/4 border-gray-400 h-16 py-8 bg-[#18BA51] rounded-lg"
          >
            Хадгалах
          </button>
        )
      ) : (
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
          <div
            onClick={() => setIsLogOutVisible(true)}
            className="flex gap-4 w-1/4 items-center cursor-pointer"
          >
            <Out />
            <p className="text-black">Гарах</p>
          </div>
        </div>
      )}
    </form>
  );
};
