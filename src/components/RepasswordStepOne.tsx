import { instance } from "@/Instance";
import { emailSchema } from "@/Validations/emailSchema";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
type StateType = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const RepasswordStepOne = ({ setStep, setCode, setUserId }: any) => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: () => {},
  });
  const verifyingEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (errors.email) return false;
      const mail = {
        email: values.email,
      };
      const res = await instance.post("/verifyEmail", mail);
      if (res.status === 404) {
        return alert("User Not Found");
      }
      setCode(res.data.code);
      setUserId(res.data._id);
      return setStep(2);
    } catch (error) {
      console.error("error in verifyEmail", error);
    }
  };
  return (
    <form
      onSubmit={(e) => verifyingEmail(e)}
      className="flex flex-col w-1/3 h-96 justify-center items-center my-8 gap-8"
    >
      <p className="text-black font-semibold text-3xl">Нууц үг сэргээх</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-2 py-8">
          <label className="text-gray-600">Имэйл</label>
          <input
            required={true}
            type="text"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Имэйл хаягаа оруулна уу."
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
          {errors.email ? (
            <p className="text-lg text-red-500 font-semibold">{errors.email}</p>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className={`${
          errors.email ? "bg-gray-300" : "bg-green-500"
        } rounded-lg w-80 h-12`}
      >
        Үргэлжлүүлэх
      </button>
    </form>
  );
};
