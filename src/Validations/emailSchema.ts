import * as yup from "yup";
export const emailSchema = yup.object().shape({
  email: yup.string().email().max(50).required("Required"),
});
