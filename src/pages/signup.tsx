import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import { signupUserSchema } from "@/Validations/SignupUserValidation";
import { useFormik } from "formik";
import { createUser } from "@/utilities/createUser";

type Props = {};

type SignupFormValues = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const Signup = (props: Props) => {
  const { values, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<SignupFormValues>({
      initialValues: {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupUserSchema,
      onSubmit: async () => {},
    });
  return (
    <div className="bg-white flex flex-col items-center justify-between gap-8 min-h-screen">
      <Header />
      <form
        onSubmit={(e) => createUser(e)}
        className="flex flex-col w-1/3 h-fit justify-center items-center my-16 gap-8"
      >
        <p className="text-black font-semibold text-3xl">Бүртгүүлэх</p>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-600">Нэр</label>
            <input
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Нэрээ оруулна уу."
              className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
            />
            <span className="text-red-500 text-sm font-semibold">
              {errors.name}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600">Имэйл</label>
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Имэйл хаягаа оруулна уу."
              type="text"
              className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
            />
            <span className="text-red-500 text-sm font-semibold">
              {errors.email}
            </span>
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
            <span className="text-red-500 text-sm font-semibold">
              {errors.password}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600">Нууц үг давтах</label>
            <input
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Нууц үгээ оруулна уу."
              className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
            />
            <p>
              <span className="text-red-500 text-sm font-semibold">
                {errors.confirmPassword}
              </span>
            </p>
          </div>
        </div>
        <button type="submit" className="bg-green-500 rounded-lg w-80 h-12">
          Бүртгүүлэх
        </button>
      </form>
      <Footer />
    </div>
  );
};
export default Signup;
