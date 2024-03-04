import { instance } from "@/Instance";
import { signupUserSchema } from "@/Validations/SignupUserValidation";
import { useFormik } from "formik";
import { useRouter } from "next/router";
const router = useRouter();
type SignupFormValues = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};
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
export const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    const res = await instance.post("/createUser", user);
    if (res.status === 203) {
      router.push("/login");
    }
  } catch (error) {
    console.error("error in createUser", error);
  }
};
