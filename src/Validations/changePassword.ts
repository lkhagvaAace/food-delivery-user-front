import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(4)
    .matches(passwordRules, { message: "Need a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Required"),
});
