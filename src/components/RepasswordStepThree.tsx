import { instance } from "@/Instance";
import { passwordSchema } from "@/Validations/changePassword";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";

export const RepasswordStepThree = ({ userId }: any) => {
  const router = useRouter();
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: () => {},
  });
  const changePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      _id: userId,
      password: values.password,
    };
    try {
      const res = await instance.put("/changePassword", user);
      if (res.status != 200) return alert("Failed to update");
      alert("Successfully updated!");
      return router.push("/login");
    } catch (error) {
      console.error("error in changepassword", error);
    }
  };
  return (
    <form
      onSubmit={changePassword}
      className="flex flex-col w-1/3 h-96 justify-center items-center my-8 gap-8"
    >
      <p className="text-black font-semibold text-3xl">Шинэ нууц үг зохиох</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Нууц үг</label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            type="text"
            placeholder="Lkhagva0810"
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Нууц үг давтах</label>
          <input
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id="confirmPassword"
            type="text"
            placeholder="Lkhagva0810"
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>
      </div>
      {errors.confirmPassword || errors.password ? (
        <button disabled className="bg-gray-300 rounded-lg w-80 h-12">
          Үргэлжлүүлэх
        </button>
      ) : (
        <button type="submit" className="bg-green-500 rounded-lg w-80 h-12">
          Үргэлжлүүлэх
        </button>
      )}
    </form>
  );
};
