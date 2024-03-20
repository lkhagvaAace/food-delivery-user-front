import React, { useContext } from "react";
import { instance } from "../Instance";
import { useFormik } from "formik";
import { signinUserSchema } from "@/Validations/SigninUserValidation";
import { useRouter } from "next/router";
import { isLoginVisibleContext } from "@/context/LoginVisiblity";
import { AlertVisibleContext } from "@/context/AlertVisiblity";
import { AlertWordContext } from "@/context/AlertWord";

export const Loginbar = () => {
  const router = useRouter();
  const { isLoginVisible, setIsLoginVisible } = useContext(
    isLoginVisibleContext
  );
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  const { alertWord, setAlertWord } = useContext(AlertWordContext);
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signinUserSchema,
      onSubmit: () => {},
    });
  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      errors.email ||
      errors.password ||
      values.email === "" ||
      values.password === ""
    ) {
      setAlertWord("Шаардлага хангах утга оруулна уу!");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
      return;
    }
    try {
      const user = {
        email: values.email,
        password: values.password,
      };
      const res = await instance.post("/login", user);
      if (res.status === 205) {
        setAlertWord("Хэрэглэгч олдсонгүй!");
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
        }, 2000);
        return;
      }
      if (res.status === 206) {
        setAlertWord("Нууц үг таарсангүй!");
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
        }, 2000);
        return;
      }
      setIsLoginVisible(false);
      localStorage.setItem("accessToken", res.data.accessToken);
      setAlertWord("Амжилттай нэвтэрлээ!");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
      setTimeout(() => {
        router.push("/");
      }, 2001);
      return;
    } catch (error) {
      console.error("error in login", error);
    }
  };
  return (
    <form
      onSubmit={(e) => signIn(e)}
      className="flex flex-col w-1/3 h-fit px-8 py-16 rounded-lg justify-center items-center gap-8 absolute bg-white z-30"
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
          {touched.email && errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.email}
            </span>
          )}
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
          {touched.password && errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.password}
            </span>
          )}
          <button
            type="button"
            onClick={() => router.push("/repassword")}
            className="text-gray-600 w-full pr-0 flex justify-end"
          >
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
          type="button"
          onClick={() => router.push("/signup")}
          className="bg-white rounded-lg w-80 h-12 text-gray-600 border-2 border-green-600 border-solid"
        >
          Бүртгүүлэх
        </button>
      </div>
    </form>
  );
};
