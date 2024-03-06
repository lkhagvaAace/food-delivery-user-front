import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import { signupUserSchema } from "@/Validations/SignupUserValidation";
import { useFormik } from "formik";
import { createUser } from "@/utilities/createUser";
import { SignupFormValues } from "@/types/signupType";
import { useRouter } from "next/router";

type Props = {};

const Signup = (props: Props) => {
  const router = useRouter();
  const { values, errors, handleBlur, handleChange, handleSubmit } =
    useFormik<SignupFormValues>({
      initialValues: {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        phoneNumber: 0,
      },
      validationSchema: signupUserSchema,
      onSubmit: async () => {},
    });
  const creatingUser = async (e: React.FormEvent<HTMLFormElement>) => {
    const status = await createUser(e, values);
    if (status != 201) {
      return alert("Failed to sign up");
    }
    alert("Successfully signed up");
    return router.push("/login");
  };
  return (
    <div className="bg-white flex flex-col items-center justify-between gap-8 min-h-screen">
      <Header />
      <form
        onSubmit={creatingUser}
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
