import React, { useContext } from "react";
import { instance } from "../Instance";
import { useFormik } from "formik";
import { signinUserSchema } from "@/Validations/SigninUserValidation";
import { useRouter } from "next/router";
import { UserIdContext } from "@/context/UserIdContext";

export const Loginbar = () => {
  const router = useRouter();
  const { userId, setUserId } = useContext(UserIdContext);
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinUserSchema,
    onSubmit: () => {},
  });
  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = {
        email: values.email,
        password: values.password,
      };
      const res = await instance.post("/login", user);
      if (res.status === 205) alert("User Not Found");
      if (res.status === 206) alert("Wrong Password!");
      setUserId(res.data.message);
    } catch (error) {
      console.error("error in login", error);
    }
  };
  return (
    <form
      onSubmit={(e) => signIn(e)}
      className="flex flex-col w-1/3 mt-64 h-96 justify-center items-center my-96 gap-8 z-30"
    >
      <p className="text-black font-semibold text-3xl">Нэвтрэх</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Имэйл</label>
          <input
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Имэйл хаягаа оруулна уу."
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
          {errors.email ? (
            <p className="text-red-500 text-lg">{errors.email}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Нууц үг</label>
          <input
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Нууц үгээ оруулна уу."
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
          {errors.password ? (
            <p className="text-red-500 text-lg">{errors.password}</p>
          ) : null}
          <button className="text-gray-600 w-full pr-0 flex justify-end">
            Нууц үг сэргээх
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button type="submit" className="bg-green-500 rounded-lg w-80 h-12">
          Нэвтрэх
        </button>
        <p className="rounded-lg w-80 h-12 text-gray-600 flex justify-center items-center">
          Эсвэл
        </p>
        <button
          onClick={() => router.push("/signup")}
          className="bg-white rounded-lg w-80 h-12 text-gray-600 border-2 border-green-600 border-solid"
        >
          Бүртгүүлэх
        </button>
      </div>
    </form>
  );
};
